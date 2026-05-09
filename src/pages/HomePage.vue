<!-- src/pages/HomePage.vue -->
<template>
  <div class="page">
    <div class="farm-header">
      <div class="level-info">
        <span class="level-badge">{{ currentTitle }}</span>
        <span class="exp-text">Lv.{{ state.level }} · {{ state.experience }}EXP</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: expProgress + '%' }"></div>
      </div>
    </div>

    <div class="farm-grid">
      <FarmPlot
        v-for="(plot, index) in state.farmGrid"
        :key="plot.id"
        :plot="plot"
        :index="index"
        @plant="showPlantModal = true; selectedPlot = index"
        @harvest="handleHarvest(index)"
      />
    </div>

    <!-- 建筑区域 -->
    <div class="buildings-area" v-if="state.unlockedBuildings.length > 0">
      <div class="building" v-for="bid in state.unlockedBuildings" :key="bid">
        <span>{{ getBuildingIcon(bid) }}</span>
      </div>
    </div>

    <!-- 宠物区域 -->
    <div class="pets-area" v-if="state.unlockedPets.length > 0">
      <div class="pet" v-for="pid in state.unlockedPets" :key="pid">
        <span>{{ getPetIcon(pid) }}</span>
      </div>
    </div>

    <!-- 种植弹窗 -->
    <div v-if="showPlantModal" class="modal-overlay" @click="showPlantModal = false">
      <div class="modal-content" @click.stop>
        <h3>选择作物</h3>
        <div class="crop-list">
          <div
            v-for="cropId in state.unlockedCrops"
            :key="cropId"
            class="crop-item"
            @click="plantCrop(cropId)"
          >
            <span class="crop-icon">{{ getCropIcon(cropId) }}</span>
            <span class="crop-name">{{ getCropName(cropId) }}</span>
            <span class="crop-price">💰{{ getCropPrice(cropId) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { state, gameActions } from '../stores/gameStore.js'
import { crops, buildings, pets, levels } from '../data/gameConfig.js'
import FarmPlot from '../components/FarmPlot.vue'

const showPlantModal = ref(false)
const selectedPlot = ref(null)

const currentTitle = computed(() => {
  const level = levels.find(l => l.level === state.level)
  return level ? level.title : '青铜运动员'
})

const expProgress = computed(() => {
  const currentLevel = levels.find(l => l.level === state.level)
  const nextLevel = levels.find(l => l.level === state.level + 1)
  if (!nextLevel) return 100
  const expInLevel = state.experience - currentLevel.exp
  const expNeeded = nextLevel.exp - currentLevel.exp
  return Math.min(100, (expInLevel / expNeeded) * 100)
})

function getCropIcon(id) { return crops[id]?.icon || '🌱' }
function getCropName(id) { return crops[id]?.name || id }
function getCropPrice(id) { return crops[id]?.price || 0 }
function getBuildingIcon(id) { return buildings[id]?.icon || '🏠' }
function getPetIcon(id) { return pets[id]?.icon || '🐾' }

function plantCrop(cropId) {
  const result = gameActions.plantCrop(selectedPlot.value, cropId)
  if (result.success) {
    showPlantModal.value = false
  } else {
    alert(result.message)
  }
}

function handleHarvest(index) {
  const result = gameActions.harvestCrop(index)
  if (result.success) {
    alert(`收获成功！获得 ${result.quantity} 个${crops[result.crop].name}`)
  } else {
    alert(result.message)
  }
}
</script>

<style scoped>
.farm-header {
  margin-bottom: 16px;
}

.level-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.level-badge {
  background: var(--primary);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
}

.exp-text {
  font-size: 12px;
  color: var(--text-secondary);
}

.farm-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-bottom: 16px;
}

.buildings-area, .pets-area {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 16px;
}

.building, .pet {
  font-size: 32px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 12px;
  max-width: 320px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
}

.crop-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
}

.crop-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background: var(--background);
  border-radius: 8px;
  cursor: pointer;
}

.crop-item:hover {
  background: var(--primary);
  color: white;
}

.crop-icon {
  font-size: 24px;
}

.crop-name {
  flex: 1;
}

.crop-price {
  color: var(--secondary);
}
</style>