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