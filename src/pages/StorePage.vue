<!-- src/pages/StorePage.vue — 农场杂货铺 -->
<template>
  <div class="page page-scene store-page">
    <div class="shop-header">
      <span class="game-sign-inline">🏪 村口杂货铺</span>
      <p class="shop-sub">种子 · 建筑 · 小动物</p>
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

    <!-- 种子 -->
    <div v-if="activeTab === 'seeds'" class="list-block">
      <div
        v-for="(crop, id) in availableCrops"
        :key="id"
        class="game-list-row"
        @click="buyItem('crop', id)"
      >
        <div class="game-thumb thumb-crop">
          <CropSprite :crop-id="id" :progress="1" :ready="false" :growing="false" />
        </div>
        <div class="item-info">
          <span class="item-name">{{ crop.name }}</span>
          <span class="item-desc">生长约 {{ crop.growTime }} 小时 · 种在田里吧</span>
        </div>
        <span class="item-price">💰 {{ crop.price }}</span>
      </div>
    </div>

    <!-- 建筑 -->
    <div v-if="activeTab === 'buildings'" class="list-block">
      <div
        v-for="(building, id) in availableBuildings"
        :key="id"
        class="game-list-row"
        :class="{ muted: state.unlockedBuildings.includes(id) }"
        @click="buyItem('building', id)"
      >
        <div class="game-thumb thumb-emoji">{{ building.icon }}</div>
        <div class="item-info">
          <span class="item-name">{{ building.name }}</span>
          <span class="item-desc">{{ building.effect }}</span>
        </div>
        <span v-if="!state.unlockedBuildings.includes(id)" class="item-price">💰 {{ building.price }}</span>
        <span v-else class="owned-tag">已拥有</span>
      </div>
    </div>

    <!-- 宠物 -->
    <div v-if="activeTab === 'pets'" class="list-block">
      <div
        v-for="(pet, id) in availablePets"
        :key="id"
        class="game-list-row"
        :class="{ muted: state.unlockedPets.includes(id) }"
        @click="buyItem('pet', id)"
      >
        <div class="game-thumb thumb-pet">
          <PetSprite :pet-id="id" />
        </div>
        <div class="item-info">
          <span class="item-name">{{ pet.name }}</span>
          <span class="item-desc">{{ pet.effect }}</span>
        </div>
        <span v-if="!state.unlockedPets.includes(id)" class="item-price">💰 {{ pet.price }}</span>
        <span v-else class="owned-tag">已拥有</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { state, gameActions } from '../stores/gameStore.js'
import { crops, buildings, pets } from '../data/gameConfig.js'
import CropSprite from '../components/CropSprite.vue'
import PetSprite from '../components/PetSprite.vue'

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
  else return

  if (type === 'building' && state.unlockedBuildings.includes(id)) return
  if (type === 'pet' && state.unlockedPets.includes(id)) return

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
.store-page {
  padding-top: 8px;
}

.shop-header {
  text-align: center;
  margin-bottom: 14px;
}

.shop-sub {
  margin-top: 10px;
  font-size: 13px;
  color: #33691e;
  font-weight: 600;
  opacity: 0.9;
}

.list-block {
  padding-bottom: 8px;
}

.item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.item-name {
  font-weight: 800;
  font-size: 16px;
  color: #3e2723;
}

.item-desc {
  font-size: 12px;
  color: #6d4c41;
  line-height: 1.35;
}

.item-price {
  font-weight: 800;
  font-size: 16px;
  color: #e65100;
  flex-shrink: 0;
}

.owned-tag {
  font-size: 13px;
  font-weight: 700;
  color: #2e7d32;
  flex-shrink: 0;
}

.thumb-crop :deep(.crop-sprite) {
  max-width: 46px;
  max-height: 52px;
}

.thumb-pet {
  width: 56px;
  height: 56px;
}

.thumb-pet :deep(.pet-sprite) {
  width: 52px;
  height: 52px;
}

.thumb-emoji {
  font-size: 36px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  border: 2px solid #bcaaa4;
}
</style>
