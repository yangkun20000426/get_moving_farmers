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