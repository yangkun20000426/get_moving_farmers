// src/stores/gameStore.js
import { reactive, watch } from 'vue'
import { crops, buildings, achievements as achievementConfig, levels } from '../data/gameConfig.js'

const STORAGE_KEY = 'fitfarm_user_state'

// 默认用户状态
const defaultState = {
  coins: 500,
  diamonds: 10,
  energy: 100,
  maxEnergy: 100,
  level: 1,
  experience: 0,
  streakDays: 0,
  lastExerciseDate: null,
  farmGrid: Array(9).fill(null).map((_, i) => ({ id: i, crop: null, plantedAt: null, status: 'empty' })),
  warehouse: { crops: {}, items: {} },
  unlockedCrops: ['carrot', 'tomato'],
  unlockedBuildings: [],
  unlockedPets: ['chicken'],
  unlockedRecipes: [],
  activeBuffs: [],
  achievements: {},
  stats: {
    totalExerciseTime: 0,
    totalCoinsEarned: 0,
    totalStealCount: 0,
    pkWins: 0
  },
  dailyReset: null,
  stealCount: 0
}

// 加载或初始化状态
function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) {
    const state = JSON.parse(saved)
    // 检查是否需要每日刷新
    const today = new Date().toDateString()
    if (state.dailyReset !== today) {
      state.dailyReset = today
      state.stealCount = 0
      state.energy = Math.min(state.energy + 20, state.maxEnergy)
    }
    return reactive(state)
  }
  return reactive({ ...defaultState })
}

// 保存状态
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

// 导出状态
export const state = loadState()

// 监听状态变化自动保存
watch(state, saveState, { deep: true })

// 游戏逻辑方法
export const gameActions = {
  // 运动打卡
  doExercise(type, minutes, exerciseConfig) {
    const config = exerciseConfig.find(c => c.id === type)
    if (!config) return { success: false, message: '运动类型不存在' }

    const energyCost = minutes * config.energyPerMin
    if (state.energy < energyCost) {
      return { success: false, message: '体力不足' }
    }

    // 计算buff
    let coinMultiplier = 1
    let expMultiplier = 1
    state.activeBuffs.forEach(buff => {
      if (buff.type === 'gain') coinMultiplier += 0.15
      if (buff.type === 'strength') expMultiplier += 0.2
    })

    const coins = Math.floor(minutes * config.coinsPerMin * coinMultiplier)
    const exp = Math.floor(minutes * config.expPerMin * expMultiplier)

    // 更新状态
    state.coins += coins
    state.experience += exp
    state.energy -= energyCost
    state.stats.totalExerciseTime += minutes
    state.stats.totalCoinsEarned += coins

    // 检查连续打卡
    const today = new Date().toDateString()
    if (state.lastExerciseDate !== today) {
      if (state.lastExerciseDate) {
        const lastDate = new Date(state.lastExerciseDate)
        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        if (lastDate.toDateString() === yesterday.toDateString()) {
          state.streakDays++
        } else {
          state.streakDays = 1
        }
      } else {
        state.streakDays = 1
      }
      state.lastExerciseDate = today

      // 检查解锁
      this.checkUnlocks()
    }

    // 检查升级
    this.checkLevelUp()

    return { success: true, coins, exp }
  },

  // 检查解锁
  checkUnlocks() {
    // 检查作物解锁
    Object.entries(crops).forEach(([id, crop]) => {
      if (crop.unlock && !state.unlockedCrops.includes(id)) {
        if (crop.unlock.level && state.level >= crop.unlock.level) {
          state.unlockedCrops.push(id)
        }
        if (crop.unlock.streak && state.streakDays >= crop.unlock.streak) {
          state.unlockedCrops.push(id)
        }
      }
    })

    // 检查建筑解锁
    Object.entries(buildings).forEach(([id, building]) => {
      if (building.unlock && !state.unlockedBuildings.includes(id)) {
        if (building.unlock.level && state.level >= building.unlock.level) {
          state.unlockedBuildings.push(id)
        }
        if (building.unlock.streak && state.streakDays >= building.unlock.streak) {
          state.unlockedBuildings.push(id)
        }
      }
    })
  },

  // 检查升级
  checkLevelUp() {
    const currentLevel = levels.find(l => state.experience >= l.exp)
    if (currentLevel && currentLevel.level > state.level) {
      state.level = currentLevel.level
      this.checkUnlocks()
    }
  },

  // 种植作物
  plantCrop(gridIndex, cropId) {
    const crop = crops[cropId]
    if (!crop) return { success: false, message: '作物不存在' }
    if (state.coins < crop.price) return { success: false, message: '金币不足' }
    if (state.farmGrid[gridIndex].status !== 'empty') return { success: false, message: '地块不为空' }

    state.coins -= crop.price
    state.farmGrid[gridIndex] = {
      id: gridIndex,
      crop: cropId,
      plantedAt: Date.now(),
      status: 'growing'
    }

    return { success: true }
  },

  // 收获作物
  harvestCrop(gridIndex) {
    const plot = state.farmGrid[gridIndex]
    if (!plot.crop || plot.status !== 'growing') return { success: false, message: '无法收获' }

    const crop = crops[plot.crop]
    const elapsed = Date.now() - plot.plantedAt
    const growTimeMs = crop.growTime * 60 * 60 * 1000

    if (elapsed < growTimeMs) return { success: false, message: '作物还未成熟' }

    const quantity = Math.floor(Math.random() * 2) + 1

    state.warehouse.crops[plot.crop] = (state.warehouse.crops[plot.crop] || 0) + quantity

    // 重置地块
    state.farmGrid[gridIndex] = {
      id: gridIndex,
      crop: null,
      plantedAt: null,
      status: 'empty'
    }

    return { success: true, crop: plot.crop, quantity }
  },

  // 购买物品
  buyItem(itemType, itemId, price) {
    if (state.coins < price) return { success: false, message: '金币不足' }

    state.coins -= price

    if (itemType === 'crop') {
      state.warehouse.crops[itemId] = (state.warehouse.crops[itemId] || 0) + 1
    } else if (itemType === 'building') {
      if (!state.unlockedBuildings.includes(itemId)) {
        state.unlockedBuildings.push(itemId)
      }
    } else if (itemType === 'pet') {
      if (!state.unlockedPets.includes(itemId)) {
        state.unlockedPets.push(itemId)
      }
    }

    return { success: true }
  }
}

export default { state, gameActions }