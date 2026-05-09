<!-- src/pages/WarehousePage.vue — 谷仓仓库 -->
<template>
  <div class="page page-scene warehouse-page">
    <div class="barn-header">
      <span class="game-sign-inline">🌾 我的谷仓</span>
      <p class="barn-sub">收获的作物会堆在这里</p>
    </div>

    <div class="game-tabs">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        type="button"
        class="game-tab"
        :class="{ active: activeTab === tab.id }"
        @click="activeTab = tab.id"
      >
        {{ tab.name }}
      </button>
    </div>

    <div v-if="activeTab === 'crops'" class="list-block">
      <template v-if="cropList.length === 0">
        <div class="empty-barn">
          <svg class="barn-illus" viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <ellipse cx="100" cy="118" rx="88" ry="14" fill="#3e2723" opacity="0.12" />
            <path d="M24 95 L100 38 L176 95 Z" fill="#8d6e63" stroke="#5d4037" stroke-width="2" />
            <rect x="36" y="95" width="128" height="28" rx="2" fill="#a1887f" stroke="#5d4037" stroke-width="2" />
            <rect x="82" y="70" width="36" height="42" fill="#5d4037" rx="2" />
            <rect x="46" y="102" width="22" height="16" fill="#5d4037" opacity="0.35" rx="1" />
            <rect x="132" y="102" width="22" height="16" fill="#5d4037" opacity="0.35" rx="1" />
            <path d="M100 38 L100 18 Q118 28 100 38" fill="#d7ccc8" stroke="#8d6e63" />
          </svg>
          <p class="empty-title">谷仓里还空着呢</p>
          <p class="empty-desc">去「运动」页打卡，收获会自动装进谷仓～</p>
        </div>
      </template>
      <template v-else>
        <div
          v-for="item in cropList"
          :key="item.id"
          class="game-list-row shelf-row"
        >
          <div class="game-thumb thumb-crop">
            <CropSprite :crop-id="item.id" :progress="1" :ready="false" :growing="false" />
          </div>
          <div class="item-info">
            <span class="item-name">{{ item.name }}</span>
            <span class="item-qty">库存 ×{{ item.quantity }}</span>
          </div>
          <button type="button" class="sell-btn" @click.stop="sellCrop(item.id)">出售</button>
        </div>
      </template>
    </div>

    <div v-if="activeTab === 'items'" class="list-block">
      <template v-if="Object.keys(state.warehouse.items).length === 0">
        <div class="empty-barn mild">
          <span class="empty-emoji">📦</span>
          <p class="empty-title">还没有杂物</p>
          <p class="empty-desc">药水、道具解锁后会出现在这里</p>
        </div>
      </template>
      <template v-else>
        <div
          v-for="(qty, id) in state.warehouse.items"
          :key="id"
          class="game-list-row shelf-row muted-click"
        >
          <div class="game-thumb thumb-emoji">📦</div>
          <div class="item-info">
            <span class="item-name">{{ id }}</span>
            <span class="item-qty">×{{ qty }}</span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { state } from '../stores/gameStore.js'
import { crops } from '../data/gameConfig.js'
import CropSprite from '../components/CropSprite.vue'

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
      quantity
    }))
})

function sellCrop(cropId) {
  const crop = crops[cropId]
  const quantity = state.warehouse.crops[cropId]
  const totalValue = crop.sellPrice * quantity

  if (confirm(`出售全部 ${crop.name} ×${quantity}？可获得 ${totalValue} 金币`)) {
    state.coins += totalValue
    state.warehouse.crops[cropId] = 0
  }
}
</script>

<style scoped>
.warehouse-page {
  padding-top: 8px;
}

.barn-header {
  text-align: center;
  margin-bottom: 14px;
}

.barn-sub {
  margin-top: 10px;
  font-size: 13px;
  color: #33691e;
  font-weight: 600;
}

.empty-barn {
  text-align: center;
  padding: 28px 16px 40px;
  background: rgba(255, 255, 255, 0.55);
  border: 3px dashed #8d6e63;
  border-radius: 18px;
  margin-bottom: 8px;
}

.empty-barn.mild {
  padding: 36px 16px;
}

.barn-illus {
  width: 180px;
  height: auto;
  margin: 0 auto 12px;
  display: block;
  filter: drop-shadow(0 6px 8px rgba(0, 0, 0, 0.12));
}

.empty-emoji {
  font-size: 48px;
  display: block;
  margin-bottom: 8px;
}

.empty-title {
  font-size: 17px;
  font-weight: 800;
  color: #4e342e;
  margin-bottom: 8px;
}

.empty-desc {
  font-size: 13px;
  color: #6d4c41;
  line-height: 1.5;
  max-width: 260px;
  margin: 0 auto;
}

.shelf-row {
  cursor: default;
}

.shelf-row:not(.muted-click):hover {
  transform: translateY(-2px);
}

.muted-click {
  cursor: default;
}

.item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.item-name {
  font-weight: 800;
  font-size: 16px;
  color: #3e2723;
}

.item-qty {
  font-size: 13px;
  color: #558b2f;
  font-weight: 700;
}

.thumb-crop :deep(.crop-sprite) {
  max-width: 46px;
  max-height: 52px;
}

.thumb-emoji {
  font-size: 32px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  border: 2px solid #bcaaa4;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sell-btn {
  flex-shrink: 0;
  padding: 10px 16px;
  font-size: 13px;
  font-weight: 800;
  color: #fff;
  background: linear-gradient(180deg, #78909c 0%, #546e7a 100%);
  border: 2px solid #37474f;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 3px 0 #263238;
}

.sell-btn:hover {
  filter: brightness(1.05);
}

.sell-btn:active {
  transform: translateY(2px);
  box-shadow: 0 1px 0 #263238;
}
</style>
