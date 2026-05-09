<!-- src/pages/StorePage.vue -->
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

    <!-- 种子商店 -->
    <div v-if="activeTab === 'seeds'" class="store-list">
      <div
        v-for="(crop, id) in availableCrops"
        :key="id"
        class="store-item"
        @click="buyItem('crop', id)"
      >
        <span class="item-icon">{{ crop.icon }}</span>
        <div class="item-info">
          <span class="item-name">{{ crop.name }}</span>
          <span class="item-desc">生长: {{ crop.growTime }}小时</span>
        </div>
        <span class="item-price">💰{{ crop.price }}</span>
      </div>
    </div>

    <!-- 建筑商店 -->
    <div v-if="activeTab === 'buildings'" class="store-list">
      <div
        v-for="(building, id) in availableBuildings"
        :key="id"
        class="store-item"
        :class="{ owned: state.unlockedBuildings.includes(id) }"
        @click="buyItem('building', id)"
      >
        <span class="item-icon">{{ building.icon }}</span>
        <div class="item-info">
          <span class="item-name">{{ building.name }}</span>
          <span class="item-desc">{{ building.effect }}</span>
        </div>
        <span v-if="!state.unlockedBuildings.includes(id)" class="item-price">💰{{ building.price }}</span>
        <span v-else class="owned-tag">已拥有</span>
      </div>
    </div>

    <!-- 宠物商店 -->
    <div v-if="activeTab === 'pets'" class="store-list">
      <div
        v-for="(pet, id) in availablePets"
        :key="id"
        class="store-item"
        :class="{ owned: state.unlockedPets.includes(id) }"
        @click="buyItem('pet', id)"
      >
        <span class="item-icon">{{ pet.icon }}</span>
        <div class="item-info">
          <span class="item-name">{{ pet.name }}</span>
          <span class="item-desc">{{ pet.effect }}</span>
        </div>
        <span v-if="!state.unlockedPets.includes(id)" class="item-price">💰{{ pet.price }}</span>
        <span v-else class="owned-tag">已拥有</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { state, gameActions } from '../stores/gameStore.js'
import { crops, buildings, pets } from '../data/gameConfig.js'

const activeTab = ref('seeds')

const tabs = [
  { id: 'seeds', name: '种子' },
  { id: 'buildings', name: '建筑' },
  { id: 'pets', name: '宠物' }
]

const availableCrops = computed(() => {
  const available = {}
  Object.entries(crops).forEach(([id, crop]) => {
    if (state.unlockedCrops.includes(id) || !crop.unlock) {
      available[id] = crop
    }
  })
  return available
})

const availableBuildings = computed(() => {
  const available = {}
  Object.entries(buildings).forEach(([id, building]) => {
    if (state.unlockedBuildings.includes(id) || !building.unlock) {
      available[id] = building
    }
  })
  return available
})

const availablePets = computed(() => {
  const available = {}
  Object.entries(pets).forEach(([id, pet]) => {
    if (state.unlockedPets.includes(id) || !pet.unlock) {
      available[id] = pet
    }
  })
  return available
})

function buyItem(type, id) {
  let config
  if (type === 'crop') config = crops[id]
  else if (type === 'building') config = buildings[id]
  else if (type === 'pet') config = pets[id]

  if (type !== 'crop' && state.unlockedBuildings.includes(id)) {
    return // 已拥有
  }

  if (state.coins < config.price) {
    alert('金币不足')
    return
  }

  if (confirm(`购买 ${config.name}？`)) {
    const result = gameActions.buyItem(type, id, config.price)
    if (result.success) {
      alert('购买成功！')
    } else {
      alert(result.message)
    }
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

.store-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.store-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: var(--surface);
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 2px 4px var(--shadow);
}

.store-item:hover {
  background: var(--background);
}

.store-item.owned {
  opacity: 0.6;
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

.item-desc {
  font-size: 12px;
  color: var(--text-secondary);
}

.item-price {
  color: var(--secondary);
  font-weight: 500;
}

.owned-tag {
  color: var(--primary);
  font-size: 12px;
}
</style>