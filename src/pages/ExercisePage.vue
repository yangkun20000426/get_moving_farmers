<!-- src/pages/ExercisePage.vue — 农场主题 · 运动场 -->
<template>
  <div class="page page-scene exercise-page">
    <div class="game-panel hero-panel">
      <div class="hero-badge">
        <span class="game-sign-inline">🏃 开始运动</span>
      </div>
      <p class="hero-hint">选一种运动，积累时长兑换农场金币与经验</p>

      <div class="exercise-types">
        <button
          v-for="type in exerciseTypes"
          :key="type.id"
          type="button"
          class="type-tile"
          :class="{ selected: selectedType === type.id }"
          @click="selectedType = type.id"
        >
          <span class="type-icon-ring">
            <span class="type-icon">{{ type.icon }}</span>
          </span>
          <span class="type-name">{{ type.name }}</span>
        </button>
      </div>

      <div class="duration-field">
        <label class="field-label">运动时长（分钟）</label>
        <div class="field-inner">
          <input
            type="number"
            v-model.number="duration"
            class="duration-input"
            min="1"
            max="180"
          />
        </div>
      </div>

      <div class="reward-strip">
        <div class="reward-line">
          <span class="reward-ico">💰</span>
          <span>预计收益 <strong>{{ expectedCoins }}</strong> 金币</span>
        </div>
        <div class="reward-line">
          <span class="reward-ico">⚡</span>
          <span>消耗体力 <strong>{{ expectedEnergy }}</strong></span>
        </div>
        <div class="reward-line">
          <span class="reward-ico">✨</span>
          <span>获得经验 <strong>{{ expectedExp }}</strong> EXP</span>
        </div>
      </div>

      <button
        type="button"
        class="game-btn-primary-lg start-btn"
        :disabled="!canExercise"
        @click="doExercise"
      >
        {{ canExercise ? '🎯 开始运动' : '😮 体力不足' }}
      </button>
    </div>

    <div class="game-panel" v-if="state.stats.totalExerciseTime > 0">
      <div class="game-panel-title">📊 运动统计</div>
      <div class="stats-grid">
        <div class="stat-tile">
          <span class="stat-num">{{ state.stats.totalExerciseTime }}</span>
          <span class="stat-cap">总分钟</span>
        </div>
        <div class="stat-tile">
          <span class="stat-num">{{ state.stats.totalCoinsEarned }}</span>
          <span class="stat-cap">累计金币</span>
        </div>
        <div class="stat-tile">
          <span class="stat-num">{{ state.streakDays }}</span>
          <span class="stat-cap">连续打卡</span>
        </div>
      </div>
    </div>

    <div v-if="showAnimation" class="coin-animation">
      <span>+{{ lastEarned.coins }} 💰</span>
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
.exercise-page .hero-panel {
  padding-top: 20px;
}

.hero-badge {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.hero-hint {
  text-align: center;
  font-size: 13px;
  color: #5d4037;
  margin-bottom: 18px;
  opacity: 0.95;
}

.exercise-types {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 18px;
}

.type-tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 12px 8px;
  border: 3px solid #a1887f;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.65);
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
}

.type-tile:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
}

.type-tile.selected {
  border-color: #2e7d32;
  background: linear-gradient(165deg, #e8f5e9 0%, #c8e6c9 100%);
  box-shadow:
    0 4px 0 #1b5e20,
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
}

.type-icon-ring {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 30% 30%, #fff 0%, #e0f2f1 100%);
  border: 3px solid rgba(141, 110, 99, 0.5);
  box-shadow: inset 0 2px 6px rgba(255, 255, 255, 0.9);
}

.type-tile.selected .type-icon-ring {
  border-color: #43a047;
  background: radial-gradient(circle at 30% 30%, #fff 0%, #a5d6a7 100%);
}

.type-icon {
  font-size: 26px;
  line-height: 1;
}

.type-name {
  font-size: 12px;
  font-weight: 700;
  color: #4e342e;
}

.type-tile.selected .type-name {
  color: #1b5e20;
}

.duration-field {
  margin-bottom: 16px;
}

.field-label {
  display: block;
  font-size: 13px;
  font-weight: 700;
  color: #5d4037;
  margin-bottom: 8px;
}

.field-inner {
  background: rgba(255, 255, 255, 0.85);
  border: 3px dashed #8d6e63;
  border-radius: 12px;
  padding: 4px 12px;
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.06);
}

.duration-input {
  width: 100%;
  padding: 12px 4px;
  border: none;
  background: transparent;
  font-size: 22px;
  font-weight: 800;
  color: #33691e;
  text-align: center;
}

.duration-input:focus {
  outline: none;
}

.reward-strip {
  padding: 14px;
  margin-bottom: 18px;
  border-radius: 12px;
  background: linear-gradient(180deg, rgba(129, 199, 132, 0.35) 0%, rgba(76, 175, 80, 0.2) 100%);
  border: 2px solid rgba(46, 125, 50, 0.35);
}

.reward-line {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #33691e;
  margin-bottom: 8px;
}

.reward-line:last-child {
  margin-bottom: 0;
}

.reward-ico {
  font-size: 18px;
}

.reward-line strong {
  color: #e65100;
  font-size: 16px;
}

.start-btn {
  margin-top: 4px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.stat-tile {
  text-align: center;
  padding: 14px 8px;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 12px;
  border: 2px solid #aed581;
}

.stat-num {
  display: block;
  font-size: 22px;
  font-weight: 800;
  color: #2e7d32;
}

.stat-cap {
  font-size: 11px;
  color: #558b2f;
  font-weight: 600;
}

.coin-animation {
  position: fixed;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  font-weight: 800;
  color: #f57f17;
  text-shadow: 0 2px 0 #fff, 0 4px 12px rgba(245, 127, 23, 0.5);
  animation: float-up 1s ease-out forwards;
  pointer-events: none;
  z-index: 300;
}
</style>
