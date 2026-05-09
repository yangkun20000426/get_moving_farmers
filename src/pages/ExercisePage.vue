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