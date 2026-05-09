<!-- src/pages/SocialPage.vue — 邻里串门 -->
<template>
  <div class="page page-scene social-page">
    <div class="town-header">
      <span class="game-sign-inline">👋 邻里串门</span>
      <p class="town-sub">排行榜 · 好友农田 · PK</p>
    </div>

    <!-- 排行榜 -->
    <div class="game-panel rank-panel">
      <div class="panel-strip">
        <span class="strip-icon">🏆</span>
        <span class="strip-title">全镇运动榜</span>
      </div>
      <div class="rank-list">
        <div
          v-for="(user, index) in leaderboard"
          :key="index"
          class="rank-row"
          :class="{
            top1: index === 0,
            top2: index === 1,
            top3: index === 2,
            isMe: user.name === '你'
          }"
        >
          <span class="rank-medal">{{ rankMedal(index) }}</span>
          <span class="rank-num">{{ index + 1 }}</span>
          <span class="rank-name">{{ user.name }}</span>
          <span class="rank-value">{{ user.value }} {{ user.unit }}</span>
        </div>
      </div>
    </div>

    <!-- 好友农场 -->
    <div class="game-panel">
      <div class="panel-strip">
        <span class="strip-icon">🥕</span>
        <span class="strip-title">好友农场</span>
      </div>
      <div class="friend-list">
        <div
          v-for="friend in friends"
          :key="friend.id"
          class="friend-card"
          @click="stealFrom(friend)"
        >
          <div class="friend-avatar">{{ friend.icon }}</div>
          <div class="friend-meta">
            <span class="friend-name">{{ friend.name }}</span>
            <span class="friend-status">
              <span class="sprout">🌱</span> {{ friend.farmStatus }}
            </span>
          </div>
          <button
            type="button"
            class="steal-btn"
            :disabled="state.stealCount >= 3"
            @click.stop="stealFrom(friend)"
          >
            {{ state.stealCount >= 3 ? '次数用尽' : '偷菜' }}
          </button>
        </div>
      </div>
    </div>

    <!-- PK -->
    <div class="game-panel pk-panel">
      <div class="panel-strip">
        <span class="strip-icon">⚔️</span>
        <span class="strip-title">PK 对战</span>
      </div>
      <p class="pk-desc">和好友随机比划当天运气（演示）</p>
      <button type="button" class="game-btn-primary-lg pk-btn" @click="startPK">
        ⚔️ 开始 PK
      </button>
      <div v-if="pkResult" class="pk-result">{{ pkResult }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { state } from '../stores/gameStore.js'

const pkResult = ref('')

const leaderboard = ref([
  { name: '运动达人小王', value: 1500, unit: '分钟' },
  { name: '健身狂人小李', value: 1200, unit: '分钟' },
  { name: '晨练选手小张', value: 1000, unit: '分钟' },
  { name: '你', value: state.stats.totalExerciseTime, unit: '分钟' },
  { name: '夜猫子小赵', value: 500, unit: '分钟' }
])

const friends = ref([
  { id: 1, name: '小明', icon: '👦', farmStatus: '胡萝卜快要熟了' },
  { id: 2, name: '小红', icon: '👧', farmStatus: '番茄长势喜人' },
  { id: 3, name: '小刚', icon: '👨', farmStatus: '玉米地里绿油油' }
])

function rankMedal(index) {
  if (index === 0) return '🥇'
  if (index === 1) return '🥈'
  if (index === 2) return '🥉'
  return '🏅'
}

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
    pkResult.value = '🎉 你赢了！明天继续虐全场～'
  } else {
    pkResult.value = '😢 输了不要紧，去运动页面涨实力！'
  }
}
</script>

<style scoped>
.social-page {
  padding-top: 8px;
}

.town-header {
  text-align: center;
  margin-bottom: 14px;
}

.town-sub {
  margin-top: 10px;
  font-size: 13px;
  color: #33691e;
  font-weight: 600;
}

.rank-panel {
  padding-top: 14px;
}

.panel-strip {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 14px;
  padding-bottom: 10px;
  border-bottom: 2px dashed rgba(141, 110, 99, 0.45);
}

.strip-icon {
  font-size: 22px;
}

.strip-title {
  font-size: 17px;
  font-weight: 800;
  color: #4e342e;
}

.rank-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.rank-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 12px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.75);
  border: 2px solid #d7ccc8;
}

.rank-row.top1 {
  border-color: #ffc107;
  background: linear-gradient(90deg, #fffde7 0%, #fff8e1 100%);
  box-shadow: 0 4px 12px rgba(255, 193, 7, 0.25);
}

.rank-row.top2 {
  border-color: #b0bec5;
  background: linear-gradient(90deg, #eceff1 0%, #fafafa 100%);
}

.rank-row.top3 {
  border-color: #ffcc80;
  background: linear-gradient(90deg, #fff3e0 0%, #fafafa 100%);
}

.rank-row.isMe {
  border-color: #66bb6a;
  background: linear-gradient(90deg, #e8f5e9 0%, #f1f8e9 100%);
}

.rank-medal {
  font-size: 20px;
  width: 28px;
  text-align: center;
}

.rank-num {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #689f38;
  color: #fff;
  font-size: 11px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rank-name {
  flex: 1;
  font-weight: 700;
  color: #3e2723;
}

.rank-value {
  font-size: 13px;
  font-weight: 600;
  color: #6d4c41;
}

.friend-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.friend-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.85);
  border: 3px solid #a5d6a7;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.friend-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 18px rgba(76, 175, 80, 0.2);
}

.friend-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #fff9c4 0%, #ffe082 100%);
  border: 3px solid #ffcc80;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  flex-shrink: 0;
}

.friend-meta {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.friend-name {
  font-weight: 800;
  color: #4e342e;
}

.friend-status {
  font-size: 12px;
  color: #558b2f;
  font-weight: 600;
}

.sprout {
  margin-right: 2px;
}

.steal-btn {
  flex-shrink: 0;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 800;
  color: #fff;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  background: linear-gradient(180deg, #ef5350 0%, #c62828 100%);
  border: 2px solid #b71c1c;
  box-shadow: 0 3px 0 #7f0000;
}

.steal-btn:disabled {
  background: #bdbdbd;
  border-color: #9e9e9e;
  box-shadow: none;
  cursor: not-allowed;
}

.pk-panel {
  text-align: center;
}

.pk-desc {
  font-size: 13px;
  color: #6d4c41;
  margin-bottom: 14px;
}

.pk-btn {
  max-width: 100%;
}

.pk-result {
  margin-top: 14px;
  font-size: 16px;
  font-weight: 700;
  color: #33691e;
}
</style>
