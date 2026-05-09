<!-- src/pages/SocialPage.vue — 邻里串门 + PK 挑战 -->
<template>
  <div class="page page-scene social-page">
    <div class="town-header">
      <span class="game-sign-inline">👋 邻里串门</span>
      <p class="town-sub">排行榜 · 好友农田 · PK 挑战</p>
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
        <div v-for="friend in friends" :key="friend.id" class="friend-card">
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
            @click="stealFrom(friend)"
          >
            {{ state.stealCount >= 3 ? '次数用尽' : '偷菜' }}
          </button>
        </div>
      </div>
    </div>

    <!-- PK 挑战 -->
    <div class="game-panel pk-panel">
      <div class="panel-strip pk-strip">
        <span class="strip-icon">⚔️</span>
        <span class="strip-title">PK 挑战</span>
        <button type="button" class="pk-launch" @click="openCreateModal">＋ 发起挑战</button>
      </div>
      <p class="pk-intro">
        向指定好友发起限时挑战，设置比拼规则与赌注；双方协商下注并同意后挑战生效，截止时按规则判定胜负，胜者拿走奖池（作物 + 金币；宠物按商店原价折算进金币池）。
        <strong>单机演示：</strong>好友下注由你在「同意成立」一步代为填写。
      </p>

      <!-- 待确认 -->
      <div v-if="pendingChallenges.length" class="pk-section">
        <h4 class="pk-subhd">待好友确认（下注）</h4>
        <div v-for="c in pendingChallenges" :key="c.id" class="pk-card pending">
          <div class="pk-row-top">
            <span class="pk-vs">你对 <strong>{{ c.friendName }}</strong></span>
            <button type="button" class="link-btn danger" @click="cancelPending(c.id)">撤回</button>
          </div>
          <p class="pk-meta">
            {{ getPkType(c.pkType).label }} · 时长 {{ c.durationDays }} 天
          </p>
          <p v-if="c.ruleNote" class="pk-rule">约定：{{ c.ruleNote }}</p>
          <div class="pk-stake-sum">
            我方赌注：{{ summarizeStake(c.stakesMe) }}
          </div>
          <button type="button" class="game-btn-primary-lg slim" @click="openAccept(c)">
            好友同意并下注（演示）
          </button>
        </div>
      </div>

      <!-- 进行中 -->
      <div v-if="activeChallenges.length" class="pk-section">
        <h4 class="pk-subhd">进行中</h4>
        <div v-for="c in activeChallenges" :key="c.id" class="pk-card active">
          <div class="pk-row-top">
            <span>⚔️ vs {{ c.friendName }}</span>
            <span class="pk-deadline">截止 {{ formatEnd(c.endsAt) }}</span>
          </div>
          <p class="pk-meta">{{ getPkType(c.pkType).label }} · {{ getPkType(c.pkType).hint }}</p>
          <div class="pk-score">
            <div class="score-me">
              <span class="lbl">我</span>
              <strong>{{ scoreDisplay(c, 'me') }}</strong>
              <span class="unit">{{ getPkType(c.pkType).unit }}</span>
            </div>
            <span class="vs-dot">VS</span>
            <div class="score-friend">
              <span class="lbl">{{ c.friendName }}</span>
              <strong>{{ scoreDisplay(c, 'friend') }}</strong>
              <span class="unit">{{ getPkType(c.pkType).unit }}</span>
            </div>
          </div>
          <p class="pk-pool">奖池：{{ summarizeEscrow(c.escrow) }}</p>
        </div>
      </div>

      <!-- 已结算 -->
      <div v-if="settledChallenges.length" class="pk-section">
        <h4 class="pk-subhd">最新战绩</h4>
        <div v-for="c in settledChallenges.slice(0, 5)" :key="c.id" class="pk-card settled">
          <p class="pk-result-line">
            <span v-if="c.winnerSide === 'me'" class="win">🏆 胜</span>
            <span v-else class="lose">…</span>
            vs {{ c.friendName }} · {{ getPkType(c.pkType).label }}
          </p>
          <p class="pk-result-msg">{{ c.resultMessage }}</p>
        </div>
      </div>

      <p v-if="!pendingChallenges.length && !activeChallenges.length && !settledChallenges.length" class="pk-empty">
        暂无 PK，点击右上角发起一场。
      </p>
    </div>

    <!-- 发起挑战弹窗 -->
    <div v-if="showCreatePk" class="modal-overlay" @click.self="showCreatePk = false">
      <div class="modal-sheet" @click.stop>
        <h3>发起 PK 挑战</h3>
        <label class="fld">
          <span>对手</span>
          <select v-model.number="pkFriendId" class="fld-input">
            <option v-for="f in friends" :key="f.id" :value="f.id">{{ f.name }}</option>
          </select>
        </label>
        <label class="fld">
          <span>持续天数</span>
          <input v-model.number="pkDurationDays" type="number" min="1" max="30" class="fld-input" />
        </label>
        <label class="fld">
          <span>比拼类型</span>
          <select v-model="pkType" class="fld-input">
            <option v-for="t in PK_TYPES" :key="t.id" :value="t.id">{{ t.label }}</option>
          </select>
        </label>
        <p class="fld-hint">{{ currentPkHint }}</p>
        <label class="fld">
          <span>补充约定（可选）</span>
          <textarea v-model="pkRule" rows="2" class="fld-input" placeholder="例如：每天早晨跑步打卡算数…" />
        </label>

        <div class="stake-block">
          <span class="stake-title">我的赌注</span>
          <label class="fld">
            <span>金币</span>
            <input v-model.number="pkStakeCoins" type="number" min="0" class="fld-input" />
          </label>
          <div v-if="warehouseCropRows.length" class="crop-stakes">
            <span class="mini-label">作物（从仓库扣）</span>
            <div v-for="row in warehouseCropRows" :key="row.id" class="crop-row">
              <span>{{ crops[row.id]?.name }}</span>
              <input
                v-model.number="pkStakeCrops[row.id]"
                type="number"
                min="0"
                :max="row.qty"
                class="fld-input tiny"
              />
              <span class="mx">/ {{ row.qty }}</span>
            </div>
          </div>
          <div v-if="state.unlockedPets?.length" class="pet-stakes">
            <span class="mini-label">宠物（按原价从金币扣押）</span>
            <label v-for="pid in state.unlockedPets" :key="pid" class="pet-line">
              <input
                type="checkbox"
                :checked="pkStakePetIds.includes(pid)"
                @change="togglePetStake(pid)"
              />
              {{ pets[pid]?.name }}（≈{{ pets[pid]?.price }} 币）
            </label>
          </div>
        </div>

        <div class="modal-actions">
          <button type="button" class="btn-cancel" @click="showCreatePk = false">取消</button>
          <button type="button" class="game-btn-primary-lg slim" @click="submitCreate">发出挑战</button>
        </div>
      </div>
    </div>

    <!-- 好友下注（演示）弹窗 -->
    <div v-if="showAcceptPk" class="modal-overlay" @click.self="showAcceptPk = false">
      <div class="modal-sheet" @click.stop>
        <h3>协商成立 PK</h3>
        <p class="accept-lead">
          现实中应由好友客户端确认。此处请<strong>代为填写好友的下注</strong>，双方赌注齐全后奖池成立并开始计时。
        </p>
        <button type="button" class="demo-fill" @click="demoFriendStakes">一键填入演示赌注</button>

        <label class="fld">
          <span>好友下注 · 金币</span>
          <input v-model.number="fStakeCoins" type="number" min="0" class="fld-input" />
        </label>
        <div class="crop-stakes">
          <span class="mini-label">好友下注 · 作物（演示数量）</span>
          <div v-for="cid in commonCropIds" :key="cid" class="crop-row">
            <span>{{ crops[cid]?.name }}</span>
            <input v-model.number="friendCropInputs[cid]" type="number" min="0" class="fld-input tiny" />
          </div>
        </div>

        <div class="modal-actions">
          <button type="button" class="btn-cancel" @click="showAcceptPk = false">取消</button>
          <button type="button" class="game-btn-primary-lg slim" @click="submitAccept">确认成立 PK</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { state, gameActions } from '../stores/gameStore.js'
import { crops, pets } from '../data/gameConfig.js'
import { PK_TYPES, getPkType } from '../data/pkConfig.js'

const friends = ref([
  { id: 1, name: '小明', icon: '👦', farmStatus: '胡萝卜快要熟了' },
  { id: 2, name: '小红', icon: '👧', farmStatus: '番茄长势喜人' },
  { id: 3, name: '小刚', icon: '👨', farmStatus: '玉米地里绿油油' }
])

const commonCropIds = ['carrot', 'tomato', 'corn']

const leaderboard = computed(() => [
  { name: '运动达人小王', value: 1500, unit: '分钟' },
  { name: '健身狂人小李', value: 1200, unit: '分钟' },
  { name: '晨练选手小张', value: 1000, unit: '分钟' },
  { name: '你', value: state.stats.totalExerciseTime, unit: '分钟' },
  { name: '夜猫子小赵', value: 500, unit: '分钟' }
])

const pendingChallenges = computed(() => state.pkChallenges.filter(c => c.status === 'pending'))
const activeChallenges = computed(() => state.pkChallenges.filter(c => c.status === 'active'))
const settledChallenges = computed(() =>
  [...state.pkChallenges].filter(c => c.status === 'settled').sort((a, b) => (b.settledAt || 0) - (a.settledAt || 0))
)

const showCreatePk = ref(false)
const pkFriendId = ref(1)
const pkDurationDays = ref(7)
const pkType = ref('exercise_minutes')
const pkRule = ref('')
const pkStakeCoins = ref(0)
const pkStakeCrops = ref({})
const pkStakePetIds = ref([])

const currentPkHint = computed(() => getPkType(pkType.value).hint)

const warehouseCropRows = computed(() =>
  Object.entries(state.warehouse.crops || {})
    .filter(([, q]) => q > 0)
    .map(([id, qty]) => ({ id, qty }))
)

function openCreateModal() {
  const o = {}
  for (const [id, q] of Object.entries(state.warehouse.crops || {})) {
    if (q > 0) o[id] = 0
  }
  pkStakeCrops.value = o
  pkStakePetIds.value = []
  pkStakeCoins.value = 0
  pkRule.value = ''
  pkDurationDays.value = 7
  pkType.value = 'exercise_minutes'
  showCreatePk.value = true
}

function togglePetStake(pid) {
  const i = pkStakePetIds.value.indexOf(pid)
  if (i >= 0) pkStakePetIds.value.splice(i, 1)
  else pkStakePetIds.value.push(pid)
}

function submitCreate() {
  const friend = friends.value.find(f => f.id === pkFriendId.value)
  const cropsStake = {}
  for (const [id, q] of Object.entries(pkStakeCrops.value)) {
    const n = Math.min(
      Math.max(0, Math.floor(Number(q) || 0)),
      state.warehouse.crops[id] || 0
    )
    if (n > 0) cropsStake[id] = n
  }
  const r = gameActions.createPkChallenge({
    friendId: pkFriendId.value,
    friendName: friend?.name || '好友',
    durationDays: pkDurationDays.value,
    pkType: pkType.value,
    ruleNote: pkRule.value,
    stakes: {
      crops: cropsStake,
      coins: pkStakeCoins.value,
      petIds: [...pkStakePetIds.value]
    }
  })
  if (r.success) {
    showCreatePk.value = false
    alert('挑战已创建。请让对方同意下注，或在本页点击「好友同意并下注」完成单机演示。')
  } else {
    alert(r.message)
  }
}

const showAcceptPk = ref(false)
const acceptChallengeId = ref('')
const fStakeCoins = ref(50)
const friendCropInputs = ref({
  carrot: 1,
  tomato: 0,
  corn: 0
})

function openAccept(c) {
  acceptChallengeId.value = c.id
  fStakeCoins.value = 60
  friendCropInputs.value = { carrot: 1, tomato: 1, corn: 0 }
  showAcceptPk.value = true
}

function demoFriendStakes() {
  fStakeCoins.value = 100
  friendCropInputs.value = { carrot: 2, tomato: 1, corn: 1 }
}

function submitAccept() {
  const crops = {}
  for (const cid of commonCropIds) {
    const n = Math.max(0, Math.floor(Number(friendCropInputs.value[cid]) || 0))
    if (n > 0) crops[cid] = n
  }
  const r = gameActions.acceptPkChallenge(acceptChallengeId.value, {
    crops,
    coins: fStakeCoins.value,
    petIds: []
  })
  if (r.success) {
    showAcceptPk.value = false
    alert('PK 已成立！挑战期内去「运动」打卡即可累积成绩；截止后自动结算。')
  } else {
    alert(r.message)
  }
}

function cancelPending(id) {
  if (!confirm('确定撤回这条待确认的挑战？')) return
  const r = gameActions.cancelPkChallenge(id)
  if (!r.success) alert(r.message)
}

function summarizeStake(st) {
  if (!st) return '—'
  const parts = []
  if (st.coins > 0) parts.push(`${st.coins} 金币`)
  const petExtra = (st.petIds || []).reduce((s, id) => s + (pets[id]?.price || 0), 0)
  if (petExtra) parts.push(`宠物折算 ${petExtra} 金币`)
  for (const [id, q] of Object.entries(st.crops || {})) {
    if (q > 0) parts.push(`${crops[id]?.name || id}×${q}`)
  }
  return parts.length ? parts.join('，') : '—'
}

function summarizeEscrow(eg) {
  if (!eg) return '—'
  const parts = []
  if (eg.coins > 0) parts.push(`${eg.coins} 金币`)
  for (const [id, q] of Object.entries(eg.crops || {})) {
    if (q > 0) parts.push(`${crops[id]?.name || id}×${q}`)
  }
  return parts.length ? parts.join('，') : '—'
}

function scoreDisplay(c, side) {
  if (c.pkType === 'exercise_minutes') {
    return side === 'me' ? c.myScore || 0 : c.friendScore || 0
  }
  return side === 'me' ? c.mySessions || 0 : c.friendSessions || 0
}

function formatEnd(ts) {
  if (!ts) return ''
  return new Date(ts).toLocaleString('zh-CN', {
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

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

onMounted(() => {
  gameActions.resolvePkChallengesIfNeeded()
})
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

.pk-strip {
  flex-wrap: wrap;
  justify-content: space-between;
}

.strip-icon {
  font-size: 22px;
}

.strip-title {
  font-size: 17px;
  font-weight: 800;
  color: #4e342e;
  flex: 1;
}

.pk-launch {
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 800;
  color: #fff;
  background: linear-gradient(180deg, #66bb6a 0%, #43a047 100%);
  border: 2px solid #2e7d32;
  border-radius: 999px;
  cursor: pointer;
  box-shadow: 0 3px 0 #1b5e20;
}

.pk-intro {
  font-size: 12px;
  color: #5d4037;
  line-height: 1.55;
  margin-bottom: 14px;
  text-align: left;
}

.pk-section {
  margin-bottom: 16px;
}

.pk-subhd {
  font-size: 14px;
  font-weight: 800;
  color: #33691e;
  margin-bottom: 10px;
}

.pk-card {
  text-align: left;
  padding: 14px;
  border-radius: 14px;
  margin-bottom: 10px;
  border: 3px solid #bcaaa4;
  background: rgba(255, 255, 255, 0.88);
}

.pk-card.pending {
  border-color: #ff9800;
  background: linear-gradient(165deg, #fff8e1 0%, #fff 100%);
}

.pk-card.active {
  border-color: #43a047;
  background: linear-gradient(165deg, #e8f5e9 0%, #fff 100%);
}

.pk-card.settled {
  border-color: #90a4ae;
  font-size: 13px;
}

.pk-row-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.pk-vs {
  font-size: 15px;
  color: #4e342e;
}

.pk-meta {
  font-size: 12px;
  color: #6d4c41;
  margin-bottom: 6px;
}

.pk-rule {
  font-size: 12px;
  color: #5d4037;
  margin-bottom: 8px;
}

.pk-stake-sum {
  font-size: 12px;
  color: #bf360c;
  font-weight: 600;
  margin-bottom: 10px;
}

.pk-deadline {
  font-size: 11px;
  color: #c62828;
  font-weight: 700;
}

.pk-score {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin: 12px 0;
  padding: 10px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
}

.score-me,
.score-friend {
  flex: 1;
  text-align: center;
}

.score-me .lbl,
.score-friend .lbl {
  display: block;
  font-size: 11px;
  color: #757575;
}

.score-me strong,
.score-friend strong {
  font-size: 22px;
  color: #2e7d32;
}

.vs-dot {
  font-weight: 900;
  color: #ff9800;
  font-size: 14px;
}

.unit {
  font-size: 11px;
  color: #558b2f;
}

.pk-pool {
  font-size: 12px;
  color: #4e342e;
  font-weight: 600;
}

.pk-result-line {
  font-weight: 700;
  color: #3e2723;
}

.pk-result-msg {
  margin-top: 6px;
  color: #558b2f;
  font-size: 12px;
}

.win {
  color: #e65100;
}

.lose {
  opacity: 0.5;
}

.pk-empty {
  font-size: 13px;
  color: #78909c;
  padding: 12px 0;
}

.link-btn {
  background: none;
  border: none;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  color: #546e7a;
}

.link-btn.danger {
  color: #c62828;
}

.slim {
  padding: 11px 16px !important;
  font-size: 14px !important;
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
  text-align: left;
}

/* modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 400;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 16px;
}

.modal-sheet {
  width: 100%;
  max-width: 400px;
  max-height: 88vh;
  overflow-y: auto;
  background: linear-gradient(180deg, #fffef5 0%, #fff 100%);
  border: 4px solid #8d6e63;
  border-radius: 18px;
  padding: 18px 16px 22px;
  box-shadow: 0 -8px 40px rgba(0, 0, 0, 0.25);
}

.modal-sheet h3 {
  text-align: center;
  color: #4e342e;
  margin-bottom: 14px;
}

.fld {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 12px;
  font-size: 13px;
  font-weight: 700;
  color: #5d4037;
}

.fld-input {
  padding: 10px 12px;
  border: 2px solid #bcaaa4;
  border-radius: 10px;
  font-size: 15px;
}

.fld-input.tiny {
  width: 72px;
  padding: 6px 8px;
}

.fld-hint {
  font-size: 11px;
  color: #689f38;
  margin: -6px 0 10px;
  line-height: 1.4;
}

.stake-block {
  padding: 12px;
  background: rgba(129, 199, 132, 0.15);
  border-radius: 12px;
  margin-bottom: 12px;
}

.stake-title {
  display: block;
  font-weight: 800;
  color: #33691e;
  margin-bottom: 10px;
}

.crop-stakes {
  margin-top: 8px;
}

.mini-label {
  display: block;
  font-size: 11px;
  color: #6d4c41;
  margin-bottom: 6px;
}

.crop-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
  font-size: 13px;
}

.mx {
  font-size: 12px;
  color: #9e9e9e;
}

.pet-stakes {
  margin-top: 10px;
}

.pet-line {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  margin-bottom: 4px;
  font-weight: 600;
}

.modal-actions {
  display: flex;
  gap: 10px;
  margin-top: 16px;
}

.btn-cancel {
  flex: 1;
  padding: 12px;
  border-radius: 12px;
  border: 2px solid #9e9e9e;
  background: #fafafa;
  font-weight: 700;
  cursor: pointer;
}

.modal-actions .game-btn-primary-lg {
  flex: 2;
}

.accept-lead {
  font-size: 12px;
  color: #5d4037;
  line-height: 1.5;
  margin-bottom: 10px;
}

.demo-fill {
  width: 100%;
  margin-bottom: 14px;
  padding: 10px;
  border-radius: 10px;
  border: 2px dashed #78909c;
  background: #eceff1;
  font-weight: 700;
  cursor: pointer;
  color: #37474f;
}
</style>
