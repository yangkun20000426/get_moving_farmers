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