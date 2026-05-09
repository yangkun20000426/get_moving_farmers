// src/stores/gameStore.js
import { reactive, watch } from 'vue'
import { crops, buildings, pets, levels } from '../data/gameConfig.js'
import { PK_TYPES } from '../data/pkConfig.js'

const STORAGE_KEY = 'fitfarm_user_state'

function normalizeCropStake(obj) {
  const out = {}
  for (const [k, v] of Object.entries(obj || {})) {
    const q = Math.max(0, Math.floor(Number(v)))
    if (q > 0) out[k] = q
  }
  return out
}

function mergeCropMaps(a, b) {
  const out = { ...normalizeCropStake(a) }
  for (const [k, v] of Object.entries(normalizeCropStake(b))) {
    out[k] = (out[k] || 0) + v
  }
  return out
}

function canAffordCrops(warehouse, need) {
  for (const [id, qty] of Object.entries(normalizeCropStake(need))) {
    if ((warehouse.crops[id] || 0) < qty) return false
  }
  return true
}

function deductCropsFromWarehouse(warehouse, deduction) {
  const need = normalizeCropStake(deduction)
  if (!canAffordCrops(warehouse, need)) return false
  for (const [id, qty] of Object.entries(need)) {
    warehouse.crops[id] = (warehouse.crops[id] || 0) - qty
    if (warehouse.crops[id] <= 0) delete warehouse.crops[id]
  }
  return true
}

function addCropsToWarehouse(warehouse, addition) {
  for (const [id, qty] of Object.entries(normalizeCropStake(addition))) {
    warehouse.crops[id] = (warehouse.crops[id] || 0) + qty
  }
}

function petStakeCoinTotal(petIds) {
  let sum = 0
  for (const id of petIds || []) {
    sum += pets[id]?.price || 0
  }
  return sum
}

function generatePkId() {
  return `pk_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`
}

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
  stealCount: 0,
  pkChallenges: []
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
    if (!Array.isArray(state.pkChallenges)) state.pkChallenges = []
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

    gameActions.resolvePkChallengesIfNeeded()
    gameActions.recordPkExercise(minutes)

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
  },

  /** 结算已到期的 PK（在运动打卡前后都可调用） */
  resolvePkChallengesIfNeeded() {
    const now = Date.now()
    for (const c of state.pkChallenges) {
      if (c.status !== 'active') continue
      if (now <= c.endsAt) continue

      let winMe = false
      if (c.pkType === 'exercise_minutes') {
        const my = c.myScore || 0
        const fd = c.friendScore || 0
        if (my > fd) winMe = true
        else if (my < fd) winMe = false
        else winMe = Math.random() >= 0.5
      } else if (c.pkType === 'exercise_sessions') {
        const my = c.mySessions || 0
        const fd = c.friendSessions || 0
        if (my > fd) winMe = true
        else if (my < fd) winMe = false
        else winMe = Math.random() >= 0.5
      } else {
        winMe = Math.random() >= 0.5
      }

      c.status = 'settled'
      c.winnerSide = winMe ? 'me' : 'friend'
      c.settledAt = now

      const pool = c.escrow || { coins: 0, crops: {} }
      if (winMe) {
        state.coins += pool.coins || 0
        addCropsToWarehouse(state.warehouse, pool.crops || {})
        state.stats.pkWins++
        c.resultMessage = `你战胜了 ${c.friendName}，赢得全部赌注！`
      } else {
        c.resultMessage = `${c.friendName} 获胜，赌注归对方（单机演示：你的下注已扣除）`
      }
    }
  },

  /** 将本次运动计入进行中的 PK */
  recordPkExercise(minutes) {
    const now = Date.now()
    for (const c of state.pkChallenges) {
      if (c.status !== 'active') continue
      if (now < c.startsAt || now > c.endsAt) continue

      if (c.pkType === 'exercise_minutes') {
        c.myScore = (c.myScore || 0) + minutes
        const bump = Math.floor(10 + Math.random() * 32)
        c.friendScore = (c.friendScore || 0) + bump
      } else if (c.pkType === 'exercise_sessions') {
        c.mySessions = (c.mySessions || 0) + 1
        if (Math.random() > 0.38) {
          c.friendSessions = (c.friendSessions || 0) + 1
        }
      }
    }
    gameActions.resolvePkChallengesIfNeeded()
  },

  /**
   * 发起 PK（待好友下注同意）
   * stakes: { crops: {}, coins: number, petIds: [] }
   */
  createPkChallenge(payload) {
    const {
      friendId,
      friendName,
      durationDays,
      pkType,
      ruleNote,
      stakes
    } = payload

    const days = Math.min(30, Math.max(1, Math.floor(Number(durationDays)) || 7))
    if (!PK_TYPES.find(t => t.id === pkType)) {
      return { success: false, message: '无效的 PK 类型' }
    }

    const cropsStake = normalizeCropStake(stakes?.crops || {})
    const coinsStake = Math.max(0, Math.floor(Number(stakes?.coins) || 0))
    const petIds = Array.isArray(stakes?.petIds) ? stakes.petIds.filter(Boolean) : []
    const petCoins = petStakeCoinTotal(petIds)

    const hasStake =
      coinsStake > 0 ||
      Object.keys(cropsStake).length > 0 ||
      petIds.length > 0

    if (!hasStake) {
      return { success: false, message: '请至少下注金币、作物或宠物（宠物按原价折算金币押注）' }
    }

    const needCoins = coinsStake + petCoins
    if (state.coins < needCoins) {
      return { success: false, message: '金币不足以支付下注与宠物折算' }
    }
    if (!canAffordCrops(state.warehouse, cropsStake)) {
      return { success: false, message: '仓库作物不足以支付下注' }
    }

    state.pkChallenges.push({
      id: generatePkId(),
      friendId,
      friendName,
      durationDays: days,
      pkType,
      ruleNote: (ruleNote || '').slice(0, 200),
      status: 'pending',
      createdAt: Date.now(),
      startsAt: null,
      endsAt: null,
      myScore: 0,
      friendScore: 0,
      mySessions: 0,
      friendSessions: 0,
      stakesMe: {
        crops: { ...cropsStake },
        coins: coinsStake,
        petIds: [...petIds]
      },
      stakesFriend: null,
      escrow: null,
      winnerSide: null,
      settledAt: null,
      resultMessage: ''
    })

    return { success: true }
  },

  /** 好友同意并下注后挑战成立（单机：由你代为填写好友赌注） */
  acceptPkChallenge(challengeId, friendStakes) {
    const c = state.pkChallenges.find(x => x.id === challengeId && x.status === 'pending')
    if (!c) return { success: false, message: '挑战不存在或已处理' }

    const sm = c.stakesMe
    const needMyCoins = (sm.coins || 0) + petStakeCoinTotal(sm.petIds || [])
    if (state.coins < needMyCoins) return { success: false, message: '金币不足，无法成立 PK' }
    if (!canAffordCrops(state.warehouse, sm.crops || {})) {
      return { success: false, message: '仓库作物不足，无法成立 PK（发起后请勿动用下注作物）' }
    }

    const fc = {
      crops: normalizeCropStake(friendStakes?.crops || {}),
      coins: Math.max(0, Math.floor(Number(friendStakes?.coins) || 0)),
      petIds: Array.isArray(friendStakes?.petIds)
        ? friendStakes.petIds.filter(Boolean)
        : []
    }

    const friendHas =
      fc.coins > 0 ||
      Object.keys(fc.crops).length > 0 ||
      fc.petIds.length > 0

    if (!friendHas) {
      return { success: false, message: '请为好友填写赌注后双方才算协商同意' }
    }

    state.coins -= needMyCoins
    deductCropsFromWarehouse(state.warehouse, sm.crops || {})

    const escrowCoins =
      needMyCoins +
      fc.coins +
      petStakeCoinTotal(fc.petIds)

    const escrowCrops = mergeCropMaps(sm.crops || {}, fc.crops)

    c.escrow = {
      coins: escrowCoins,
      crops: escrowCrops
    }
    c.stakesFriend = fc
    c.startsAt = Date.now()
    c.endsAt = c.startsAt + c.durationDays * 86400000
    c.status = 'active'
    c.myScore = 0
    c.friendScore = 0
    c.mySessions = 0
    c.friendSessions = 0
    c.resultMessage = ''

    return { success: true }
  },

  cancelPkChallenge(challengeId) {
    const idx = state.pkChallenges.findIndex(x => x.id === challengeId && x.status === 'pending')
    if (idx === -1) return { success: false, message: '只能取消待确认的挑战' }
    state.pkChallenges.splice(idx, 1)
    return { success: true }
  }
}

export default { state, gameActions }