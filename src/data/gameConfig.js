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