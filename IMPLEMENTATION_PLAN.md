# FitFarm 游戏化运动激励工具 - 实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 实现一个可在 GitHub Pages 部署的交互式网页原型，展示游戏化运动激励工具的核心功能

**Architecture:** 单页面应用（SPA），数据存储在浏览器 localStorage，无后端服务。六个核心页面：首页农场、运动打卡、商店、仓库、社交、成就

**Tech Stack:**
- 前端框架：Vue 3 (CDN) + Vite 开发
- 样式：自定义 CSS + CSS Variables
- 数据存储：localStorage
- 图标：Emoji + SVG
- 动画：CSS Animations
- 部署：GitHub Pages

---

## 1. 文件结构

```
FitFarm/
├── index.html          # 主入口
├── src/
│   ├── main.js       # Vue 应用入口
│   ├── App.vue      # 根组件
│   ├── data/
│   │   └── gameData.js    # 游戏数据（作物、建筑、宠物配置）
│   ├── stores/
│   │   └── gameStore.js   # 状态管理（localStorage）
│   ├── components/
│   │   ├── FarmGrid.vue      # 农场地块组件
│   │   ├── Crop.vue         # 作物组件
│   │   ├── Building.vue     # 建筑组件
│   │   ├── Pet.vue          # 宠物组件
│   │   ├── CoinAnimation.vue # 金币飘字动画
│   │   └── Modal.vue        # 通用弹窗
│   └── pages/
│       ├── HomePage.vue     # 首页（农场全景）
│       ├──运动Page.vue     # 运动打卡页
│       ├── StorePage.vue     # 商店页
│       ├── WarehousePage.vue # 仓库页
│       ├── SocialPage.vue   # 社交页
│       └── AchievementPage.vue # 成就页
├── style.css         # 全局样式
├── package.json     # 项目配置
└── vite.config.js  # Vite 配置

# GitHub 部署
├── .gitignore
├── README.md
└── docs/
    └── index.html  # GitHub Pages 入口（构建输出）
```

---

## 2. 游戏数据结构设计

### 2.1 用户数据（localStorage 存储）

```javascript
// 用户游戏状态
const userState = {
  coins: 1000,              // 金币
  diamonds: 50,             // 钻石
  energy: 100,               // 体力
  level: 1,                 // 运动等级
  experience: 0,            // 经验值
  streakDays: 0,            // 连续打卡天数
  lastExerciseDate: null,        // 上次运动日期

  // 农场数据
  farmGrid: [
    { id: 1, crop: 'carrot', plantedAt: null, status: 'empty' },
    // ... 9个地块
  ],

  // 已解锁内容
  unlockedCrops: ['carrot', 'tomato'],
  unlockedBuildings: [],
  unlockedPets: ['chicken'],

  // 仓库存储
  warehouse: {
    crops: {},     // { carrot: 10, tomato: 5 }
    items: {}     // { potion: 2 }
  },

  // 活跃buff
  activeBuffs: [],  // [{ type: 'speed', expiresAt: timestamp }]

  // 成就进度
  achievements: {
    firstExercise: false,
    streak7Days: false,
    // ...
  },

  // 社交数据
  friends: [],       // 好友列表（模拟）
  stealCount: 0,    // 今日偷菜次数
  pkWins: 0,        // PK胜利次数
}
```

### 2.2 游戏配置数据

```javascript
// 作物配置
const cropConfig = {
  carrot: {
    name: '胡萝卜',
    growTime: 2 * 60 * 60 * 1000, // 2小时（毫秒）
    price: 10,
    sellPrice: 15,
    emoji: '🥕',
    unlock: null
  },
  // ... 更多作物
}

// 建筑配置
const buildingConfig = {
  greenhouse: {
    name: '温室',
    price: 500,
    emoji: '🏠',
    effect: '作物生长加速2倍',
    unlock: { level: 2 }
  },
  // ... 更多建筑
}

// 运动产出配置
const exerciseConfig = {
  running: {
    name: '跑步',
    coinsPerMin: 1,
    energyPerMin: 5,
    expPerMin: 10
  },
  // ... 更多运动类型
}
```

---

## 3. 核心功能实现逻辑

### 3.1 运动打卡系统

**功能描述：** 用户选择运动类型，输入运动时长，系统计算金币/经验产出

**实现逻辑：**
```
1. 用户选择运动类型（跑步/健身/球类/骑行）
2. 用户输入运动时长（分）
3. 系统验证体力是否足够
4. 计算产出：
   - 金币 = 时长 × 运动类型.coinsPerMin × 活跃增益
   - 经验 = 时长 × 运动类型.expPerMin
   - 体力消耗 = 时长 × 运动类型.energyPerMin
5. 更新用户数据（扣除体力，增加金币经验）
6. 检查升级
7. 检查连续打卡（判断日期是否是今天第一次）
8. 触发金币飘字动画
9. 保存到 localStorage
```

**代码片段：**
```javascript
function doExercise(type, minutes) {
  const config = exerciseConfig[type]
  const buffs = getActiveBuffs()

  // 计算增益
  let coinRate = 1
  let expRate = 1
  buffs.forEach(b => {
    if (b.type === 'gain') coinRate += 0.15
    if (b.type === 'speed') expRate += 0.1
  })

  const coins = minutes * config.coinsPerMin * coinRate
  const exp = minutes * config.expPerMin * expRate
  const energyCost = minutes * config.energyPerMin

  if (user.energy < energyCost) {
    return { success: false, message: '体力不足' }
  }

  // 更新用户数据
  user.coins += Math.floor(coins)
  user.experience += Math.floor(exp)
  user.energy -= energyCost

  // 检查连续打卡
  const today = new Date().toDateString()
  if (user.lastExerciseDate !== today) {
    if (isYesterday(user.lastExerciseDate)) {
      user.streakDays++
    } else {
      user.streakDays = 1
    }
    user.lastExerciseDate = today

    // 检查解锁
    checkUnlocks()
  }

  // 检查升级
  checkLevelUp()

  saveUserState()
  return { success: true, coins: Math.floor(coins), exp: Math.floor(exp) }
}
```

### 3.2 农场种植系统

**功能描述：** 在空地块种植作物，作物成熟后收获

**实现逻辑：**
```
1. 用户点击空地块
2. 弹出作物选择（已解锁的作物）
3. 用户选择作物并确认
4. 扣除金币（购买种子）
5. 开始种植（记录 plantedAt）
6. 启动计时器（检测成熟）
7. 作物成熟时显示收获按钮
8. 用户点击收获
9. 添加作物到仓库
10. 重置地块
```

### 3.3 商店系统

**功能描述：** 购买种子、建筑、宠物、道具

**实现逻辑：**
```
1. 显示商品列表（根据用户等级/解锁状态过滤）
2. 用户点击商品
3. 显示购买确认（价格、效果）
4. 扣除金币/钻石
5. 解锁/添加物品
6. 如果是建筑：显示在农场
7. 如果是宠物：显示在宠物栏
8. 保存并更新界面
```

### 3.4 仓库系统

**功能描述：** 查看和管理拥有的作物和道具

**实现逻辑：**
```
1. 显示仓库中的作物列表（按类型分组）
2. 对每个作物显示：数量、用途按钮
3. 点击出售：确认后增加金币
4. 点击喂养：选择宠物，确认后减少作物、增加饱腹度
5. 点击合成：选择配方，确认后消耗材料、产出道具
6. 点击烹饪：选择菜谱，确认后消耗材料、产出增益
7. 点击完成任务：消耗指定作物、完成订单、获得奖励
```

### 3.5 社交系统（简化版）

**功能描述：** 好友排行榜、"偷菜"互动

**实现逻辑：**
```
1. 排行榜：显示模拟数据（随机生成的好友运动数据）
2. 偷菜：点击好友 → 进入好友农场 → 点击成熟的作物 → 随机获取产出10%
3. 每日偷菜次数限制：3次
4. PK对战：选择好友 → 随机生成PK结果 → 记录胜负
```

### 3.6 成就系统

**功能描述：** 达成条件后解锁成就、获得奖励

**实现逻辑：**
```
1. 页面加载时检查所有成就条件
2. 对达成的成就：标记为已完成、发放奖励
3. 显示成就进度条
4. 解锁新内容时检查相关成就
```

---

## 4. 任务列表

### Task 1: 项目初始化

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html`
- Create: `src/main.js`
- Create: `.gitignore`

- [ ] **Step 1: 创建 package.json**

```json
{
  "name": "fitfarm",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "@vitejs/plugin-vue": "^5.0.0"
  },
  "dependencies": {
    "vue": "^3.4.0"
  }
}
```

- [ ] **Step 2: 创建 vite.config.js**

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: './'
})
```

- [ ] **Step 3: 创建 index.html**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FitFarm - 游戏化运动激励工具</title>
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/src/main.js"></script>
</body>
</html>
```

- [ ] **Step 4: 创建 src/main.js**

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

createApp(App).mount('#app')
```

- [ ] **Step 5: 创建 .gitignore**

```
node_modules/
dist/
.DS_Store
*.local
```

- [ ] **Step 6: 安装依赖**

```bash
npm install
```

- [ ] **Step 7: 提交**

```bash
git add .
git commit -m "chore: project init"
```

---

### Task 2: 游戏数据配置

**Files:**
- Create: `src/data/gameConfig.js`

- [ ] **Step 1: 创建游戏配置数据**

包含：运动类型配置、作物配置、建筑配置、宠物配置、药水配置、菜谱配置、成就配置

```javascript
// src/data/gameConfig.js

// 运动类型配置
export const exerciseTypes = [
  { id: 'running', name: '跑步', icon: '🏃', coinsPerMin: 1, expPerMin: 10, energyPerMin: 5 },
  { id: 'gym', name: '健身房', icon: '🏋️', coinsPerMin: 1.5, expPerMin: 15, energyPerMin: 8 },
  { id: 'ball', name: '球类运动', icon: '⚽', coinsPerMin: 1.2, expPerMin: 12, energyPerMin: 6 },
  { id: 'cycling', name: '骑行', icon: '🚴', coinsPerMin: 1, expPerMin: 10, energyPerMin: 4 },
  { id: 'other', name: '其他', icon: '💪', coinsPerMin: 0.8, expPerMin: 8, energyPerMin: 4 }
]

// 作物配置
export const crops = {
  carrot: { name: '胡萝卜', icon: '🥕', growTime: 2, price: 10, sellPrice: 15, unlock: null },
  tomato: { name: '番茄', icon: '🍅', growTime: 4, price: 25, sellPrice: 38, unlock: null },
  corn: { name: '玉米', icon: '🌽', growTime: 6, price: 40, sellPrice: 60, unlock: { level: 3 } },
  strawberry: { name: '草莓', icon: '🍓', growTime: 8, price: 60, sellPrice: 90, unlock: { streak: 7 } },
  pumpkin: { name: '南瓜', icon: '🎃', growTime: 12, price: 100, sellPrice: 150, unlock: { level: 5 } },
  grape: { name: '葡萄', icon: '🍇', growTime: 18, price: 150, sellPrice: 225, unlock: { streak: 14 } },
  watermelon: { name: '西瓜', icon: '🍉', growTime: 24, price: 200, sellPrice: 300, unlock: { level: 7 } },
  apple: { name: '苹果', icon: '🍎', growTime: 48, price: 400, sellPrice: 600, unlock: { level: 10 } }
}

// 建筑配置
export const buildings = {
  greenhouse: { name: '温室', icon: '🏠', price: 500, effect: '作物生长加速2倍', unlock: { level: 2 } },
  warehouse: { name: '仓库', icon: '🏚️', price: 1000, effect: '存储上限+50', unlock: { level: 3 } },
  petHouse: { name: '宠物屋', icon: '🐕', price: 2000, effect: '饲养宠物', unlock: { streak: 14 } },
  mill: { name: '磨坊', icon: '⚙️', price: 3000, effect: '加工溢价50%', unlock: { level: 5 } },
  restaurant: { name: '餐厅', icon: '🍽️', price: 5000, effect: '烹饪增益', unlock: { streak: 30 } },
  gym: { name: '运动馆', icon: '🏟️', price: 10000, effect: '运动收益+10%', unlock: { level: 10 } }
}

// 宠物配置
export const pets = {
  chicken: { name: '小鸡', icon: '🐔', price: 100, effect: '收益+5%', unlock: null },
  dog: { name: '小狗', icon: '🐕', price: 500, effect: '防偷+10%', unlock: { level: 3 } },
  cat: { name: '小猫', icon: '🐱', price: 500, effect: '产出+10%', unlock: { level: 3 } },
  rabbit: { name: '兔子', icon: '🐰', price: 1000, effect: '快速收获', unlock: { streak: 14 } },
  horse: { name: '马驹', icon: '🐴', price: 3000, effect: '运动效率+10%', unlock: { level: 5 } }
}

// 药水配置
export const potions = {
  strength: { name: '体力药水', icon: '🧪', materials: { carrot: 5 }, effect: '运动体力+20%', duration: 24 },
  speed: { name: '加速药水', icon: '⚡', materials: { tomato: 5 }, effect: '作物生长加速2倍', duration: 24 },
  gain: { name: '增益药水', icon: '💫', materials: { corn: 5 }, effect: '运动收益+15%', duration: 24 }
}

// 菜谱配置
export const recipes = {
  salad: { name: '蔬菜沙拉', icon: '🥗', materials: { carrot: 3 }, effect: '运动收益+10%', duration: 2 },
  fruitPlatter: { name: '水果拼盘', icon: '🍓', materials: { strawberry: 3, grape: 3 }, effect: '运动收益+20%', duration: 4 },
  energySet: { name: '能量套餐', icon: '🍱', materials: { corn: 3 }, effect: '体力+30%', duration: 4 }
}

// 成就配置
export const achievements = {
  firstExercise: { name: '初次运动', desc: '完成首次运动', reward: { coins: 100 } },
  streak7: { name: '坚持不懈', desc: '连续运动7天', reward: { crops: ['strawberry'] } },
  streak14: { name: '循序渐进', desc: '连续运动14天', reward: { crops: ['grape'], buildings: ['petHouse'] } },
  streak30: { name: '持之以恒', desc: '连续运动30天', reward: { crops: ['grape'] } },
  level5: { name: '运动达人', desc: '达到5级', reward: { coins: 500 } },
  rich: { name: '农场主', desc: '金币超过10000', reward: { diamonds: 100 } }
}

// 等级配置
export const levels = [
  { level: 1, exp: 0, title: '青铜运动员' },
  { level: 2, exp: 1000, title: '白银运动员' },
  { level: 3, exp: 3000, title: '黄金运动员' },
  { level: 5, exp: 8000, title: '铂金运动员' },
  { level: 10, exp: 20000, title: '钻石运动员' }
]
```

- [ ] **Step 2: 提交**

```bash
git add src/data/gameConfig.js
git commit -m "feat: add game config data"
```

---

### Task 3: 状态管理

**Files:**
- Create: `src/stores/gameStore.js`

- [ ] **Step 1: 创建游戏状态管理**

```javascript
// src/stores/gameStore.js
import { reactive, watch } from 'vue'
import { crops, buildings, pets, achievements as achievementConfig, levels } from '../data/gameConfig.js'

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
  // 每日刷新
  dailyReset: null
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
      state.energy = Math.min(state.energy + 20, state.maxEnergy) // 每日恢复体力
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
    if (!plot.crop || plot.status !== 'ready') return { success: false, message: '无法收获' }

    const crop = crops[plot.crop]
    const quantity = Math.floor(Math.random() * 2) + 1 // 随机1-2个

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
```

- [ ] **Step 2: 提交**

```bash
git add src/stores/gameStore.js
git commit -m "feat: add game state management"
```

---

### Task 4: 样式系统

**Files:**
- Create: `style.css`

- [ ] **Step 1: 创建全局样式**

```css
/* style.css */
:root {
  --primary: #4CAF50;
  --primary-dark: #388E3C;
  --secondary: #FFC107;
  --accent: #FF9800;
  --background: #E8F5E9;
  --surface: #FFFFFF;
  --text: #212121;
  --text-secondary: #757575;
  --success: #4CAF50;
  --warning: #FFC107;
  --error: #F44336;
  --border: #E0E0E0;
  --shadow: rgba(0, 0, 0, 0.1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: var(--background);
  color: var(--text);
  line-height: 1.5;
}

/* 布局 */
.container {
  max-width: 480px;
  margin: 0 auto;
  min-height: 100vh;
  background: var(--surface);
  position: relative;
}

.page {
  padding: 16px;
  padding-bottom: 80px;
}

/* 顶部栏 */
.header {
  background: var(--primary);
  color: white;
  padding: 16px;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header h1 {
  font-size: 20px;
  font-weight: 600;
}

/* 底部导航 */
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 480px;
  background: var(--surface);
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-around;
  padding: 8px 0;
  z-index: 100;
}

.tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 4px 12px;
  border-radius: 8px;
  transition: all 0.2s;
}

.tab-item.active {
  color: var(--primary);
  background: var(--background);
}

.tab-item .icon {
  font-size: 24px;
  margin-bottom: 2px;
}

/* 资源栏 */
.resource-bar {
  background: var(--primary);
  color: white;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}

.resource-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

/* 卡片 */
.card {
  background: var(--surface);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 2px 8px var(--shadow);
}

.card-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
}

/* 按钮 */
.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary {
  background: var(--primary);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-dark);
}

.btn-primary:disabled {
  background: var(--border);
  cursor: not-allowed;
}

.btn-secondary {
  background: var(--background);
  color: var(--primary);
}

/* 输入框 */
.input {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 16px;
}

.input:focus {
  outline: none;
  border-color: var(--primary);
}

/* 选择器 */
.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

/* 动画 */
@keyframes float-up {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-50px); opacity: 0; }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.float-animation {
  animation: float-up 1s ease-out;
}

/* 进度条 */
.progress-bar {
  height: 8px;
  background: var(--border);
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--primary);
  border-radius: 4px;
  transition: width 0.3s;
}

/* 标签 */
.tag {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
}

.tag-success { background: #E8F5E9; color: var(--success); }
.tag-warning { background: #FFF8E1; color: var(--warning); }
.tag-info { background: #E3F2FD; color: #2196F3; }
```

- [ ] **Step 2: 提交**

```bash
git add style.css
git commit -m "style: add global styles"
```

---

### Task 5: 根组件

**Files:**
- Create: `src/App.vue`

- [ ] **Step 1: 创建根组件**

```vue
<!-- src/App.vue -->
<template>
  <div class="container">
    <!-- 顶部资源栏 -->
    <div class="resource-bar">
      <div class="resource-item">
        <span>💰</span>
        <span>{{ state.coins }}</span>
      </div>
      <div class="resource-item">
        <span>💎</span>
        <span>{{ state.diamonds }}</span>
      </div>
      <div class="resource-item">
        <span>⚡</span>
        <span>{{ state.energy }}/{{ state.maxEnergy }}</span>
      </div>
      <div class="resource-item">
        <span>🔥</span>
        <span>{{ state.streakDays }}天</span>
      </div>
    </div>

    <!-- 页面内容 -->
    <component :is="currentPage" />

    <!-- 底部导航 -->
    <div class="tab-bar">
      <div
        v-for="tab in tabs"
        :key="tab.id"
        class="tab-item"
        :class="{ active: activeTab === tab.id }"
        @click="activeTab = tab.id"
      >
        <span class="icon">{{ tab.icon }}</span>
        <span>{{ tab.name }}</span>
      </div>
    </div>

    <!-- 弹窗 -->
    <Modal v-if="showModal" @close="showModal = false">
      <component :is="modalContent" />
    </Modal>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { state } from './stores/gameStore.js'
import HomePage from './pages/HomePage.vue'
import ExercisePage from './pages/ExercisePage.vue'
import StorePage from './pages/StorePage.vue'
import WarehousePage from './pages/WarehousePage.vue'
import SocialPage from './pages/SocialPage.vue'
import AchievementPage from './pages/AchievementPage.vue'
import Modal from './components/Modal.vue'

const activeTab = ref('home')
const showModal = ref(false)
const modalContent = ref(null)

const tabs = [
  { id: 'home', name: '农场', icon: '🏠' },
  { id: 'exercise', name: '运动', icon: '🏃' },
  { id: 'store', name: '商店', icon: '🏪' },
  { id: 'warehouse', name: '仓库', icon: '📦' },
  { id: 'social', name: '社交', icon: '👥' },
  { id: 'achievement', name: '成就', icon: '🏆' }
]

const currentPage = computed(() => {
  const pages = {
    home: HomePage,
    exercise: ExercisePage,
    store: StorePage,
    warehouse: WarehousePage,
    social: SocialPage,
    achievement: AchievementPage
  }
  return pages[activeTab.value]
})
</script>
```

- [ ] **Step 2: 提交**

```bash
git add src/App.vue
git commit -m "feat: add root component"
```

---

### Task 6: 首页（农场）

**Files:**
- Create: `src/pages/HomePage.vue`
- Create: `src/components/FarmPlot.vue`

- [ ] **Step 1: 创建农场页面**

```vue
<!-- src/pages/HomePage.vue -->
<template>
  <div class="page">
    <div class="farm-header">
      <div class="level-info">
        <span class="level-badge">{{ currentTitle }}</span>
        <span class="exp-text">Lv.{{ state.level }} · {{ state.experience }}EXP</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: expProgress + '%' }"></div>
      </div>
    </div>

    <div class="farm-grid">
      <FarmPlot
        v-for="(plot, index) in state.farmGrid"
        :key="plot.id"
        :plot="plot"
        :index="index"
        @plant="showPlantModal = true; selectedPlot = index"
        @harvest="handleHarvest(index)"
      />
    </div>

    <!-- 建筑区域 -->
    <div class="buildings-area" v-if="state.unlockedBuildings.length > 0">
      <div class="building" v-for="bid in state.unlockedBuildings" :key="bid">
        <span>{{ getBuildingIcon(bid) }}</span>
      </div>
    </div>

    <!-- 宠物区域 -->
    <div class="pets-area" v-if="state.unlockedPets.length > 0">
      <div class="pet" v-for="pid in state.unlockedPets" :key="pid">
        <span>{{ getPetIcon(pid) }}</span>
      </div>
    </div>

    <!-- 种植弹窗 -->
    <div v-if="showPlantModal" class="modal-overlay" @click="showPlantModal = false">
      <div class="modal-content" @click.stop>
        <h3>选择作物</h3>
        <div class="crop-list">
          <div
            v-for="cropId in state.unlockedCrops"
            :key="cropId"
            class="crop-item"
            @click="plantCrop(cropId)"
          >
            <span class="crop-icon">{{ getCropIcon(cropId) }}</span>
            <span class="crop-name">{{ getCropName(cropId) }}</span>
            <span class="crop-price">💰{{ getCropPrice(cropId) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { state, gameActions } from '../stores/gameStore.js'
import { crops, buildings, pets, levels } from '../data/gameConfig.js'
import FarmPlot from '../components/FarmPlot.vue'

const showPlantModal = ref(false)
const selectedPlot = ref(null)

const currentTitle = computed(() => {
  const level = levels.find(l => l.level === state.level)
  return level ? level.title : '青铜运动员'
})

const expProgress = computed(() => {
  const currentLevel = levels.find(l => l.level === state.level)
  const nextLevel = levels.find(l => l.level === state.level + 1)
  if (!nextLevel) return 100
  const expInLevel = state.experience - currentLevel.exp
  const expNeeded = nextLevel.exp - currentLevel.exp
  return Math.min(100, (expInLevel / expNeeded) * 100)
})

function getCropIcon(id) { return crops[id]?.icon || '🌱' }
function getCropName(id) { return crops[id]?.name || id }
function getCropPrice(id) { return crops[id]?.price || 0 }
function getBuildingIcon(id) { return buildings[id]?.icon || '🏠' }
function getPetIcon(id) { return pets[id]?.icon || '🐾' }

function plantCrop(cropId) {
  const result = gameActions.plantCrop(selectedPlot.value, cropId)
  if (result.success) {
    showPlantModal.value = false
  } else {
    alert(result.message)
  }
}

function handleHarvest(index) {
  const result = gameActions.harvestCrop(index)
  if (result.success) {
    // 显示收获动画
  }
}
</script>

<style scoped>
.farm-header {
  margin-bottom: 16px;
}

.level-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.level-badge {
  background: var(--primary);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
}

.exp-text {
  font-size: 12px;
  color: var(--text-secondary);
}

.farm-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-bottom: 16px;
}

.buildings-area, .pets-area {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 16px;
}

.building, .pet {
  font-size: 32px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 12px;
  max-width: 320px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
}

.crop-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
}

.crop-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background: var(--background);
  border-radius: 8px;
  cursor: pointer;
}

.crop-item:hover {
  background: var(--primary);
  color: white;
}

.crop-icon {
  font-size: 24px;
}

.crop-name {
  flex: 1;
}

.crop-price {
  color: var(--secondary);
}
</style>
```

- [ ] **Step 2: 创建 FarmPlot 组件**

```vue
<!-- src/components/FarmPlot.vue -->
<template>
  <div
    class="farm-plot"
    :class="{ ready: isReady, growing: isGrowing }"
    @click="handleClick"
  >
    <span class="plot-icon">{{ icon }}</span>
    <span v-if="isGrowing" class="timer">{{ timeLeft }}</span>
    <span v-if="isReady" class="ready-tag">收获</span>
    <span v-if="!plot.crop" class="plant-hint">+</span>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { crops } from '../data/gameConfig.js'

const props = defineProps({
  plot: Object,
  index: Number
})

const emit = defineEmits(['plant', 'harvest'])

const now = ref(Date.now())
let timer = null

onMounted(() => {
  timer = setInterval(() => {
    now.value = Date.now()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})

const crop = computed(() => props.plot.crop ? crops[props.plot.crop] : null)
const icon = computed(() => crop.value?.icon || '🟫')

const isGrowing = computed(() => {
  if (!props.plot.plantedAt || !crop.value) return false
  const elapsed = now.value - props.plot.plantedAt
  return elapsed < crop.value.growTime * 60 * 60 * 1000
})

const isReady = computed(() => {
  if (!props.plot.plantedAt || !crop.value) return false
  const elapsed = now.value - props.plot.plantedAt
  return elapsed >= crop.value.growTime * 60 * 60 * 1000
})

const timeLeft = computed(() => {
  if (!props.plot.plantedAt || !crop.value) return ''
  const elapsed = now.value - props.plot.plantedAt
  const leftMs = crop.value.growTime * 60 * 60 * 1000 - elapsed
  if (leftMs <= 0) return ''
  const hours = Math.floor(leftMs / (60 * 60 * 1000))
  const minutes = Math.floor((leftMs % (60 * 60 * 1000)) / (60 * 1000))
  return `${hours}:${minutes.toString().padStart(2, '0')}`
})

function handleClick() {
  if (isReady.value) {
    emit('harvest')
  } else if (!props.plot.crop) {
    emit('plant')
  }
}
</script>

<style scoped>
.farm-plot {
  aspect-ratio: 1;
  background: #8D6E63;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  transition: all 0.2s;
}

.farm-plot:hover {
  transform: scale(1.02);
}

.farm-plot.ready {
  background: #A5D6A7;
  animation: pulse 1s infinite;
}

.plot-icon {
  font-size: 32px;
}

.timer {
  font-size: 12px;
  color: white;
  background: rgba(0,0,0,0.5);
  padding: 2px 6px;
  border-radius: 4px;
  margin-top: 4px;
}

.ready-tag {
  position: absolute;
  bottom: 4px;
  background: var(--primary);
  color: white;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 4px;
}

.plant-hint {
  font-size: 24px;
  color: rgba(255,255,255,0.5);
}
</style>
```

- [ ] **Step 3: 提交**

```bash
git add src/pages/HomePage.vue src/components/FarmPlot.vue
git commit -m "feat: add home page and farm plot component"
```

---

### Task 7: 运动打卡页

**Files:**
- Create: `src/pages/ExercisePage.vue`

- [ ] **Step 1: 创建运动打卡页面**

```vue
<!-- src/pages/ExercisePage.vue -->
<template>
  <div class="page">
    <div class="card">
      <div class="card-title">开始运动</div>

      <div class="exercise-types">
        <div
          v-for="type in exerciseTypes"
          :key="type.id"
          class="type-item"
          :class="{ selected: selectedType === type.id }"
          @click="selectedType = type.id"
        >
          <span class="type-icon">{{ type.icon }}</span>
          <span class="type-name">{{ type.name }}</span>
        </div>
      </div>

      <div class="input-group">
        <label>运动时长（分钟）</label>
        <input
          type="number"
          v-model="duration"
          class="input"
          min="1"
          max="180"
        />
      </div>

      <div class="exercise-info">
        <div class="info-item">
          <span>💰</span>
          <span>预计收益: {{ expectedCoins }} 金币</span>
        </div>
        <div class="info-item">
          <span>⚡</span>
          <span>消耗体力: {{ expectedEnergy }}</span>
        </div>
        <div class="info-item">
          <span>✨</span>
          <span>获得经验: {{ expectedExp }} EXP</span>
        </div>
      </div>

      <button
        class="btn btn-primary"
        style="width: 100%"
        :disabled="!canExercise"
        @click="doExercise"
      >
        {{ canExercise ? '开始运动' : '体力不足' }}
      </button>
    </div>

    <!-- 运动记录 -->
    <div class="card" v-if="state.stats.totalExerciseTime > 0">
      <div class="card-title">运动统计</div>
      <div class="stats">
        <div class="stat-item">
          <span class="stat-value">{{ state.stats.totalExerciseTime }}</span>
          <span class="stat-label">总运动分钟</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">{{ state.stats.totalCoinsEarned }}</span>
          <span class="stat-label">累计金币</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">{{ state.streakDays }}</span>
          <span class="stat-label">连续打卡</span>
        </div>
      </div>
    </div>

    <!-- 收益动画 -->
    <div v-if="showAnimation" class="coin-animation">
      <span>+{{ lastEarned.coins }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { state, gameActions } from '../stores/gameStore.js'
import { exerciseTypes as exerciseTypesConfig } from '../data/gameConfig.js'

const selectedType = ref('running')
const duration = ref(30)
const showAnimation = ref(false)
const lastEarned = ref({ coins: 0, exp: 0 })

const exerciseTypes = exerciseTypesConfig

const selectedConfig = computed(() =>
  exerciseTypes.find(t => t.id === selectedType.value)
)

const expectedCoins = computed(() => {
  if (!selectedConfig.value) return 0
  return Math.floor(duration.value * selectedConfig.value.coinsPerMin)
})

const expectedEnergy = computed(() => {
  if (!selectedConfig.value) return 0
  return duration.value * selectedConfig.value.energyPerMin
})

const expectedExp = computed(() => {
  if (!selectedConfig.value) return 0
  return Math.floor(duration.value * selectedConfig.value.expPerMin)
})

const canExercise = computed(() => {
  return state.energy >= expectedEnergy.value && duration.value > 0
})

function doExercise() {
  const result = gameActions.doExercise(selectedType.value, duration.value, exerciseTypesConfig)
  if (result.success) {
    lastEarned.value = { coins: result.coins, exp: result.exp }
    showAnimation.value = true
    setTimeout(() => {
      showAnimation.value = false
    }, 1000)
  } else {
    alert(result.message)
  }
}
</script>

<style scoped>
.exercise-types {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-bottom: 16px;
}

.type-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  background: var(--background);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.type-item.selected {
  background: var(--primary);
  color: white;
}

.type-icon {
  font-size: 24px;
  margin-bottom: 4px;
}

.type-name {
  font-size: 12px;
}

.input-group {
  margin-bottom: 16px;
}

.input-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
}

.exercise-info {
  background: var(--background);
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 16px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  text-align: center;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 24px;
  font-weight: 600;
  color: var(--primary);
}

.stat-label {
  font-size: 12px;
  color: var(--text-secondary);
}

.coin-animation {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  font-weight: bold;
  color: var(--secondary);
  animation: float-up 1s ease-out;
  pointer-events: none;
}
</style>
```

- [ ] **Step 2: 提交**

```bash
git add src/pages/ExercisePage.vue
git commit -m "feat: add exercise page"
```

---

### Task 8: 商店页

**Files:**
- Create: `src/pages/StorePage.vue`

- [ ] **Step 1: 创建商店页面**

```vue
<!-- src/pages/StorePage.vue -->
<template>
  <div class="page">
    <div class="tabs">
      <div
        v-for="tab in tabs"
        :key="tab.id"
        class="tab"
        :class="{ active: activeTab === tab.id }"
        @click="activeTab = tab.id"
      >
        {{ tab.name }}
      </div>
    </div>

    <!-- 种子商店 -->
    <div v-if="activeTab === 'seeds'" class="store-list">
      <div
        v-for="(crop, id) in availableCrops"
        :key="id"
        class="store-item"
        @click="buyItem('crop', id)"
      >
        <span class="item-icon">{{ crop.icon }}</span>
        <div class="item-info">
          <span class="item-name">{{ crop.name }}</span>
          <span class="item-desc">生长: {{ crop.growTime }}小时</span>
        </div>
        <span class="item-price">💰{{ crop.price }}</span>
      </div>
    </div>

    <!-- 建筑商店 -->
    <div v-if="activeTab === 'buildings'" class="store-list">
      <div
        v-for="(building, id) in availableBuildings"
        :key="id"
        class="store-item"
        :class="{ owned: state.unlockedBuildings.includes(id) }"
        @click="buyItem('building', id)"
      >
        <span class="item-icon">{{ building.icon }}</span>
        <div class="item-info">
          <span class="item-name">{{ building.name }}</span>
          <span class="item-desc">{{ building.effect }}</span>
        </div>
        <span v-if="!state.unlockedBuildings.includes(id)" class="item-price">💰{{ building.price }}</span>
        <span v-else class="owned-tag">已拥有</span>
      </div>
    </div>

    <!-- 宠物商店 -->
    <div v-if="activeTab === 'pets'" class="store-list">
      <div
        v-for="(pet, id) in availablePets"
        :key="id"
        class="store-item"
        :class="{ owned: state.unlockedPets.includes(id) }"
        @click="buyItem('pet', id)"
      >
        <span class="item-icon">{{ pet.icon }}</span>
        <div class="item-info">
          <span class="item-name">{{ pet.name }}</span>
          <span class="item-desc">{{ pet.effect }}</span>
        </div>
        <span v-if="!state.unlockedPets.includes(id)" class="item-price">💰{{ pet.price }}</span>
        <span v-else class="owned-tag">已拥有</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { state, gameActions } from '../stores/gameStore.js'
import { crops, buildings, pets } from '../data/gameConfig.js'

const activeTab = ref('seeds')

const tabs = [
  { id: 'seeds', name: '种子' },
  { id: 'buildings', name: '建筑' },
  { id: 'pets', name: '宠物' }
]

const availableCrops = computed(() => {
  const available = {}
  Object.entries(crops).forEach(([id, crop]) => {
    if (state.unlockedCrops.includes(id) || !crop.unlock) {
      available[id] = crop
    }
  })
  return available
})

const availableBuildings = computed(() => {
  const available = {}
  Object.entries(buildings).forEach(([id, building]) => {
    if (state.unlockedBuildings.includes(id) || !building.unlock) {
      available[id] = building
    }
  })
  return available
})

const availablePets = computed(() => {
  const available = {}
  Object.entries(pets).forEach(([id, pet]) => {
    if (state.unlockedPets.includes(id) || !pet.unlock) {
      available[id] = pet
    }
  })
  return available
})

function buyItem(type, id) {
  let config
  if (type === 'crop') config = crops[id]
  else if (type === 'building') config = buildings[id]
  else if (type === 'pet') config = pets[id]

  if (type !== 'crop' && state.unlockedBuildings.includes(id)) {
    return // 已拥有
  }

  if (state.coins < config.price) {
    alert('金币不足')
    return
  }

  if (confirm(`购买 ${config.name}？`)) {
    const result = gameActions.buyItem(type, id, config.price)
    if (result.success) {
      alert('购买成功！')
    } else {
      alert(result.message)
    }
  }
}
</script>

<style scoped>
.tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.tab {
  flex: 1;
  text-align: center;
  padding: 12px;
  background: var(--background);
  border-radius: 8px;
  cursor: pointer;
}

.tab.active {
  background: var(--primary);
  color: white;
}

.store-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.store-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: var(--surface);
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 2px 4px var(--shadow);
}

.store-item:hover {
  background: var(--background);
}

.store-item.owned {
  opacity: 0.6;
}

.item-icon {
  font-size: 32px;
}

.item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.item-name {
  font-weight: 500;
}

.item-desc {
  font-size: 12px;
  color: var(--text-secondary);
}

.item-price {
  color: var(--secondary);
  font-weight: 500;
}

.owned-tag {
  color: var(--primary);
  font-size: 12px;
}
</style>
```

- [ ] **Step 2: 提交**

```bash
git add src/pages/StorePage.vue
git commit -m "feat: add store page"
```

---

### Task 9: 仓库页

**Files:**
- Create: `src/pages/WarehousePage.vue`

- [ ] **Step 1: 创建仓库页面**

```vue
<!-- src/pages/WarehousePage.vue -->
<template>
  <div class="page">
    <div class="tabs">
      <div
        v-for="tab in tabs"
        :key="tab.id"
        class="tab"
        :class="{ active: activeTab === tab.id }"
        @click="activeTab = tab.id"
      >
        {{ tab.name }}
      </div>
    </div>

    <!-- 作物仓库 -->
    <div v-if="activeTab === 'crops'" class="warehouse-list">
      <div v-if="cropList.length === 0" class="empty-state">
        仓库空空如也，快去运动打卡获取作物吧！
      </div>
      <div
        v-for="item in cropList"
        :key="item.id"
        class="warehouse-item"
      >
        <span class="item-icon">{{ item.icon }}</span>
        <div class="item-info">
          <span class="item-name">{{ item.name }}</span>
          <span class="item-quantity">x{{ item.quantity }}</span>
        </div>
        <div class="item-actions">
          <button class="btn btn-secondary" @click="sellCrop(item.id)">出售</button>
          <button class="btn btn-secondary" @click="useCrop(item.id)">使用</button>
        </div>
      </div>
    </div>

    <!-- 物品仓库 -->
    <div v-if="activeTab === 'items'" class="warehouse-list">
      <div v-if="Object.keys(state.warehouse.items).length === 0" class="empty-state">
        暂无物品
      </div>
      <div
        v-for="(qty, id) in state.warehouse.items"
        :key="id"
        class="warehouse-item"
      >
        <span class="item-name">{{ id }}</span>
        <span class="item-quantity">x{{ qty }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { state, gameActions } from '../stores/gameStore.js'
import { crops } from '../data/gameConfig.js'

const activeTab = ref('crops')

const tabs = [
  { id: 'crops', name: '作物' },
  { id: 'items', name: '物品' }
]

const cropList = computed(() => {
  return Object.entries(state.warehouse.crops)
    .filter(([, qty]) => qty > 0)
    .map(([id, quantity]) => ({
      id,
      name: crops[id]?.name || id,
      icon: crops[id]?.icon || '📦',
      quantity
    }))
})

function sellCrop(cropId) {
  const crop = crops[cropId]
  const quantity = state.warehouse.crops[cropId]
  const totalValue = crop.sellPrice * quantity

  if (confirm(`出售全部 ${crop.name} x${quantity}？获得 ${totalValue} 金币`)) {
    state.coins += totalValue
    state.warehouse.crops[cropId] = 0
  }
}

function useCrop(cropId) {
  alert('请在厨房或实验室使用作物')
}
</script>

<style scoped>
.tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.tab {
  flex: 1;
  text-align: center;
  padding: 12px;
  background: var(--background);
  border-radius: 8px;
  cursor: pointer;
}

.tab.active {
  background: var(--primary);
  color: white;
}

.warehouse-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.warehouse-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: var(--surface);
  border-radius: 8px;
  box-shadow: 0 2px 4px var(--shadow);
}

.item-icon {
  font-size: 32px;
}

.item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.item-name {
  font-weight: 500;
}

.item-quantity {
  font-size: 14px;
  color: var(--text-secondary);
}

.item-actions {
  display: flex;
  gap: 8px;
}

.item-actions .btn {
  padding: 8px 12px;
  font-size: 12px;
}

.empty-state {
  text-align: center;
  padding: 48px;
  color: var(--text-secondary);
}
</style>
```

- [ ] **Step 2: 提交**

```bash
git add src/pages/WarehousePage.vue
git commit -m "feat: add warehouse page"
```

---

### Task 10: 社交页

**Files:**
- Create: `src/pages/SocialPage.vue`

- [ ] **Step 1: 创建社交页面**

```vue
<!-- src/pages/SocialPage.vue -->
<template>
  <div class="page">
    <!-- 排行榜 -->
    <div class="card">
      <div class="card-title">排行榜</div>
      <div class="rank-list">
        <div
          v-for="(user, index) in leaderboard"
          :key="index"
          class="rank-item"
        >
          <span class="rank-number">{{ index + 1 }}</span>
          <span class="rank-name">{{ user.name }}</span>
          <span class="rank-value">{{ user.value }} {{ user.unit }}</span>
        </div>
      </div>
    </div>

    <!-- 偷菜 -->
    <div class="card">
      <div class="card-title">好友农场</div>
      <div class="farm-list">
        <div v-for="friend in friends" :key="friend.id" class="friend-farm" @click="stealFrom(friend)">
          <span class="friend-icon">{{ friend.icon }}</span>
          <div class="friend-info">
            <span class="friend-name">{{ friend.name }}</span>
            <span class="friend-status">{{ friend.farmStatus }}</span>
          </div>
          <button class="btn btn-secondary" :disabled="state.stealCount >= 3">
            {{ state.stealCount >= 3 ? '次数用尽' : '偷菜' }}
          </button>
        </div>
      </div>
    </div>

    <!-- PK对战 -->
    <div class="card">
      <div class="card-title">PK对战</div>
      <p class="desc">与好友比拼运动数据</p>
      <button class="btn btn-primary" style="width: 100%" @click="startPK">
        开始PK
      </button>
      <div v-if="pkResult" class="pk-result">
        {{ pkResult }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { state } from '../stores/gameStore.js'

const pkResult = ref('')

// 模拟排行榜数据
const leaderboard = ref([
  { name: '运动达人小王', value: 1500, unit: '分钟' },
  { name: '健身狂人小李', value: 1200, unit: '分钟' },
  { name: '晨练选手小张', value: 1000, unit: '分钟' },
  { name: '你', value: state.stats.totalExerciseTime, unit: '分钟' },
  { name: '夜猫子小赵', value: 500, unit: '分钟' }
])

// 模拟好友数据
const friends = ref([
  { id: 1, name: '小明', icon: '👦', farmStatus: '胡萝卜成熟了' },
  { id: 2, name: '小红', icon: '👧', farmStatus: '番茄成熟了' },
  { id: 3, name: '小刚', icon: '👨', farmStatus: '玉米成熟了' }
])

function stealFrom(friend) {
  if (state.stealCount >= 3) {
    alert('今日偷菜次数已用完')
    return
  }

  const stolen = Math.floor(Math.random() * 50) + 10
  state.coins += stolen
  state.stealCount++
  state.stats.totalStealCount++

  alert(`偷取了 ${friend.name} 的 ${stolen} 金币！`)
}

function startPK() {
  const win = Math.random() > 0.5
  if (win) {
    state.stats.pkWins++
    pkResult.value = '🎉 你赢了！'
  } else {
    pkResult.value = '😢 你输了，继续加油！'
  }
}
</script>

<style scoped>
.rank-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.rank-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: var(--background);
  border-radius: 8px;
}

.rank-number {
  width: 24px;
  height: 24px;
  background: var(--primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}

.rank-name {
  flex: 1;
}

.rank-value {
  color: var(--text-secondary);
}

.farm-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.friend-farm {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: var(--background);
  border-radius: 8px;
  cursor: pointer;
}

.friend-icon {
  font-size: 32px;
}

.friend-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.friend-name {
  font-weight: 500;
}

.friend-status {
  font-size: 12px;
  color: var(--text-secondary);
}

.desc {
  margin-bottom: 12px;
  color: var(--text-secondary);
}

.pk-result {
  margin-top: 12px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
}
</style>
```

- [ ] **Step 2: 提交**

```bash
git add src/pages/SocialPage.vue
git commit -m "feat: add social page"
```

---

### Task 11: 成就页

**Files:**
- Create: `src/pages/AchievementPage.vue`

- [ ] **Step 1: 创建成就页面**

```vue
<!-- src/pages/AchievementPage.vue -->
<template>
  <div class="page">
    <div class="card">
      <div class="card-title">成就进度</div>
      <div class="achievement-list">
        <div
          v-for="achievement in achievements"
          :key="achievement.id"
          class="achievement-item"
          :class="{ completed: achievement.completed }"
        >
          <span class="achievement-icon">{{ achievement.completed ? '🏆' : '🔒' }}</span>
          <div class="achievement-info">
            <span class="achievement-name">{{ achievement.name }}</span>
            <span class="achievement-desc">{{ achievement.desc }}</span>
            <div v-if="!achievement.completed" class="achievement-progress">
              <div class="progress-bar">
                <div class="progress-fill" :style="{ width: achievement.progress + '%' }"></div>
              </div>
              <span class="progress-text">{{ achievement.progress }}%</span>
            </div>
          </div>
          <div v-if="achievement.completed" class="achievement-reward">
            <span>奖励: {{ formatReward(achievement.reward) }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 连续打卡 -->
    <div class="card">
      <div class="card-title">连续打卡</div>
      <div class="streak-display">
        <span class="streak-number">{{ state.streakDays }}</span>
        <span class="streak-label">天</span>
      </div>
      <div class="streak-rewards">
        <div
          v-for="reward in streakRewards"
          :key="reward.days"
          class="streak-reward"
          :class="{ claimed: state.streakDays >= reward.days }"
        >
          <span>{{ reward.days }}天</span>
          <span>{{ reward.reward }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { state } from '../stores/gameStore.js'
import { achievements as achievementConfig } from '../data/gameConfig.js'

const streakRewards = [
  { days: 7, reward: '解锁草莓' },
  { days: 14, reward: '解锁葡萄+宠物屋' },
  { days: 30, reward: '解锁餐厅' },
  { days: 100, reward: '冠军雕像' }
]

const achievements = computed(() => {
  return Object.entries(achievementConfig).map(([id, config]) => {
    let completed = false
    let progress = 0

    if (id === 'firstExercise') {
      completed = state.stats.totalExerciseTime > 0
      progress = completed ? 100 : 0
    } else if (id === 'streak7') {
      completed = state.streakDays >= 7
      progress = Math.min(100, (state.streakDays / 7) * 100)
    } else if (id === 'streak14') {
      completed = state.streakDays >= 14
      progress = Math.min(100, (state.streakDays / 14) * 100)
    } else if (id === 'streak30') {
      completed = state.streakDays >= 30
      progress = Math.min(100, (state.streakDays / 30) * 100)
    } else if (id === 'level5') {
      completed = state.level >= 5
      progress = Math.min(100, (state.level / 5) * 100)
    } else if (id === 'rich') {
      completed = state.coins >= 10000
      progress = Math.min(100, (state.coins / 10000) * 100)
    }

    return {
      id,
      ...config,
      completed,
      progress
    }
  })
})

function formatReward(reward) {
  if (!reward) return '无'
  if (reward.coins) return `${reward.coins}金币`
  if (reward.crops) return reward.crops.join(', ')
  if (reward.diamonds) return `${reward.diamonds}钻石`
  return JSON.stringify(reward)
}
</script>

<style scoped>
.achievement-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.achievement-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: var(--background);
  border-radius: 8px;
}

.achievement-item.completed {
  background: #E8F5E9;
}

.achievement-icon {
  font-size: 24px;
}

.achievement-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.achievement-name {
  font-weight: 500;
}

.achievement-desc {
  font-size: 12px;
  color: var(--text-secondary);
}

.achievement-progress {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
}

.achievement-progress .progress-bar {
  flex: 1;
}

.progress-text {
  font-size: 12px;
  color: var(--text-secondary);
}

.achievement-reward {
  font-size: 12px;
  color: var(--primary);
}

.streak-display {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;
}

.streak-number {
  font-size: 48px;
  font-weight: bold;
  color: var(--primary);
}

.streak-label {
  font-size: 24px;
}

.streak-rewards {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.streak-reward {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  background: var(--background);
  border-radius: 8px;
  font-size: 12px;
  opacity: 0.5;
}

.streak-reward.claimed {
  opacity: 1;
  background: #E8F5E9;
}
</style>
```

- [ ] **Step 2: 提交**

```bash
git add src/pages/AchievementPage.vue
git commit -m "feat: add achievement page"
```

---

### Task 12: Modal 组件

**Files:**
- Create: `src/components/Modal.vue`

- [ ] **Step 1: 创建 Modal 组件**

```vue
<!-- src/components/Modal.vue -->
<template>
  <div class="modal-overlay" @click="$emit('close')">
    <div class="modal-content" @click.stop>
      <button class="modal-close" @click="$emit('close')">×</button>
      <slot />
    </div>
  </div>
</template>

<script setup>
defineEmits(['close'])
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 12px;
  max-width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  font-size: 24px;
  cursor: pointer;
  color: var(--text-secondary);
}
</style>
```

- [ ] **Step 2: 提交**

```bash
git add src/components/Modal.vue
git commit -m "feat: add modal component"
```

---

### Task 13: 构建和部署

**Files:**
- Modify: `package.json`

- [ ] **Step 1: 构建项目**

```bash
npm run build
```

- [ ] **Step 2: 初始化 Git 仓库**

```bash
git init
git add .
git commit -m "feat: FitFarm game implementation"
```

- [ ] **Step 3: 创建 GitHub 仓库并推送**

```bash
# 在 GitHub 创建仓库后执行
git remote add origin https://github.com/[username]/fitfarm.git
git branch -M main
git push -u origin main
```

- [ ] **Step 4: 启用 GitHub Pages**

1. 进入 GitHub 仓库设置
2. 找到 Pages 选项
3. Source: Deploy from a branch
4. Branch: main, folder: /docs
5. 保存

- [ ] **Step 5: 等待部署完成后获取链接**

链接格式：`https://[username].github.io/fitfarm/`

---

## 5. 总结

完成以上13个任务后，你将得到：
1. 一个完整的游戏化运动激励工具网页应用
2. 六个核心功能页面
3. 本地数据存储，无需后端
4. 部署后可通过链接访问

部署链接示例：`https://yourusername.github.io/fitfarm/`

---

**文档版本**：v1.0
**创建日期**：2026-05-09
**状态**：待用户确认后执行