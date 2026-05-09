<!-- src/pages/AchievementPage.vue — 荣誉墙 -->
<template>
  <div class="page page-scene achievement-page">
    <div class="honor-header">
      <span class="game-sign-inline">🏅 荣誉墙</span>
      <p class="honor-sub">完成目标，解锁农场好礼</p>
    </div>

    <div class="game-panel">
      <div class="panel-strip center">
        <span class="strip-title">成就进度</span>
      </div>
      <div class="achievement-list">
        <div
          v-for="achievement in achievements"
          :key="achievement.id"
          class="achievement-plank"
          :class="{ done: achievement.completed }"
        >
          <div class="plank-icon">{{ achievement.completed ? '🏆' : '🔒' }}</div>
          <div class="plank-body">
            <span class="plank-name">{{ achievement.name }}</span>
            <span class="plank-desc">{{ achievement.desc }}</span>
            <div v-if="!achievement.completed" class="plank-progress">
              <div class="wood-progress-track">
                <div
                  class="wood-progress-fill"
                  :style="{ width: formatPct(achievement.progress) + '%' }"
                />
              </div>
              <span class="plank-pct">{{ formatPct(achievement.progress) }}%</span>
            </div>
          </div>
          <div v-if="achievement.completed" class="plank-reward">
            {{ formatReward(achievement.reward) }}
          </div>
        </div>
      </div>
    </div>

    <div class="game-panel streak-panel">
      <div class="panel-strip center">
        <span class="strip-title">连续打卡</span>
      </div>
      <div class="streak-hero">
        <span class="flame">🔥</span>
        <span class="streak-num">{{ state.streakDays }}</span>
        <span class="streak-unit">天</span>
      </div>
      <div class="streak-grid">
        <div
          v-for="reward in streakRewards"
          :key="reward.days"
          class="streak-mile"
          :class="{ ok: state.streakDays >= reward.days }"
        >
          <span class="mile-day">{{ reward.days }} 天</span>
          <span class="mile-reward">{{ reward.reward }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
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

/** 展示用百分比：消除浮点误差 */
function formatPct(raw) {
  const x = Math.min(100, Math.max(0, Number(raw)))
  return Math.round(x * 10) / 10
}

function formatReward(reward) {
  if (!reward) return '无'
  const parts = []
  if (reward.coins) parts.push(`${reward.coins} 金币`)
  if (reward.crops) parts.push(`作物：${reward.crops.join('、')}`)
  if (reward.buildings) parts.push(`建筑：${reward.buildings.join('、')}`)
  if (reward.diamonds) parts.push(`${reward.diamonds} 钻石`)
  return parts.length ? parts.join('；') : JSON.stringify(reward)
}
</script>

<style scoped>
.achievement-page {
  padding-top: 8px;
}

.honor-header {
  text-align: center;
  margin-bottom: 14px;
}

.honor-sub {
  margin-top: 10px;
  font-size: 13px;
  color: #33691e;
  font-weight: 600;
}

.panel-strip {
  display: flex;
  align-items: center;
}

.panel-strip.center {
  justify-content: center;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 2px dashed rgba(141, 110, 99, 0.45);
}

.strip-title {
  font-size: 17px;
  font-weight: 800;
  color: #4e342e;
}

.achievement-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.achievement-plank {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px;
  border-radius: 12px;
  background: linear-gradient(165deg, #fafafa 0%, #eeeeee 100%);
  border: 3px solid #b0bec5;
  box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.8);
}

.achievement-plank.done {
  background: linear-gradient(165deg, #e8f5e9 0%, #c8e6c9 100%);
  border-color: #66bb6a;
}

.plank-icon {
  font-size: 26px;
  line-height: 1;
}

.plank-body {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.plank-name {
  font-weight: 800;
  font-size: 15px;
  color: #3e2723;
}

.plank-desc {
  font-size: 12px;
  color: #6d4c41;
}

.plank-progress {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
}

.wood-progress-track {
  flex: 1;
  height: 12px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.12);
  border: 2px solid #8d6e63;
  overflow: hidden;
}

.wood-progress-fill {
  height: 100%;
  border-radius: 6px;
  background: linear-gradient(180deg, #dce775 0%, #9ccc65 50%, #689f38 100%);
  transition: width 0.35s ease;
}

.plank-pct {
  font-size: 12px;
  font-weight: 800;
  color: #558b2f;
  min-width: 42px;
  text-align: right;
}

.plank-reward {
  font-size: 12px;
  font-weight: 700;
  color: #2e7d32;
  align-self: center;
}

.streak-panel {
  text-align: center;
}

.streak-hero {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 6px;
  margin-bottom: 18px;
}

.flame {
  font-size: 36px;
  animation: flame-shake 2s ease-in-out infinite;
}

.streak-num {
  font-size: 52px;
  font-weight: 900;
  color: #e65100;
  text-shadow: 0 2px 0 rgba(255, 255, 255, 0.6);
}

.streak-unit {
  font-size: 20px;
  font-weight: 800;
  color: #bf360c;
}

.streak-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.streak-mile {
  padding: 12px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.55);
  border: 2px dashed #a1887f;
  display: flex;
  flex-direction: column;
  gap: 6px;
  opacity: 0.65;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.streak-mile.ok {
  opacity: 1;
  border-style: solid;
  border-color: #66bb6a;
  background: rgba(232, 245, 233, 0.95);
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.2);
}

.mile-day {
  font-weight: 800;
  color: #33691e;
  font-size: 14px;
}

.mile-reward {
  font-size: 12px;
  color: #5d4037;
  font-weight: 600;
}

@keyframes flame-shake {
  0%,
  100% {
    transform: rotate(-4deg) scale(1);
  }
  50% {
    transform: rotate(4deg) scale(1.05);
  }
}
</style>
