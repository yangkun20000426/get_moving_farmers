<!-- src/pages/HomePage.vue — QQ 农场式场景：天空、农田透视、木栅栏、牧场草地 -->
<template>
  <div class="page farm-home">
    <FarmBackdrop />

    <div class="farm-scroll">
      <header class="farm-header">
        <div class="level-info">
          <span class="level-badge">{{ currentTitle }}</span>
          <span class="exp-text">Lv.{{ state.level }} · {{ state.experience }}EXP</span>
        </div>
        <div class="progress-bar wood-progress">
          <div class="progress-fill" :style="{ width: expProgress + '%' }"></div>
        </div>
      </header>

      <!-- 农田区块 -->
      <section class="field-block">
        <div class="sign-board">
          <span class="sign-wood">🌾 我的农田</span>
        </div>
        <div class="field-mat">
          <div class="farm-grid-stage">
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
          </div>
        </div>
      </section>

      <!-- 牧场（草地 + 栅栏，常驻可见） -->
      <section class="ranch-block">
        <FarmFence />
        <div class="ranch-ground">
          <div class="ranch-header">
            <span class="ranch-icon">🐄</span>
            <span class="ranch-title">牧场</span>
            <span class="ranch-sub">小动物在这里溜达～</span>
          </div>
          <div class="pets-area" v-if="state.unlockedPets.length > 0">
            <div class="pet" v-for="pid in state.unlockedPets" :key="pid">
              <PetSprite :pet-id="pid" size="ranch" />
              <span class="pet-name">{{ getPetName(pid) }}</span>
            </div>
          </div>
          <p v-else class="ranch-empty">解锁宠物后，它们会出现在草地上</p>
        </div>
      </section>

      <!-- 建筑 -->
      <section class="buildings-block" v-if="state.unlockedBuildings.length > 0">
        <div class="sign-board small">
          <span class="sign-wood">🏗️ 设施</span>
        </div>
        <div class="buildings-area">
          <div class="building" v-for="bid in state.unlockedBuildings" :key="bid">
            <span>{{ getBuildingIcon(bid) }}</span>
          </div>
        </div>
      </section>
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
            <div class="crop-thumb-wrap" aria-hidden="true">
              <CropSprite :crop-id="cropId" :progress="1" :ready="false" :growing="false" />
            </div>
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
import PetSprite from '../components/PetSprite.vue'
import CropSprite from '../components/CropSprite.vue'
import FarmBackdrop from '../components/FarmBackdrop.vue'
import FarmFence from '../components/FarmFence.vue'

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

function getCropName(id) { return crops[id]?.name || id }
function getCropPrice(id) { return crops[id]?.price || 0 }
function getBuildingIcon(id) { return buildings[id]?.icon || '🏠' }
function getPetName(id) { return pets[id]?.name || id }

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
.farm-home {
  margin: 0 -16px;
  padding: 0;
  min-height: calc(100vh - 130px);
  background: linear-gradient(
    180deg,
    #aed581 0%,
    #9ccc65 18%,
    #8bc34a 45%,
    #7cb342 72%,
    #689f38 100%
  );
}

.farm-scroll {
  padding: 0 16px 100px;
  margin-top: -12px;
  position: relative;
  z-index: 1;
}

.farm-header {
  margin-bottom: 14px;
  padding-top: 4px;
}

.level-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.level-badge {
  background: linear-gradient(135deg, #7cb342 0%, #558b2f 100%);
  color: white;
  padding: 7px 14px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  box-shadow:
    0 2px 0 #33691e,
    0 4px 10px rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.35);
}

.exp-text {
  font-size: 12px;
  color: #33691e;
  font-weight: 600;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
}

.wood-progress {
  height: 12px;
  background: rgba(46, 125, 50, 0.25);
  border-radius: 8px;
  border: 2px solid #5d4037;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15);
}

.wood-progress .progress-fill {
  background: linear-gradient(180deg, #dce775 0%, #aed581 40%, #689f38 100%);
  border-radius: 6px;
  box-shadow: 0 0 8px rgba(205, 220, 57, 0.6);
}

/* 木牌标题 */
.sign-board {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.sign-board.small {
  margin-top: 16px;
  margin-bottom: 8px;
}

.sign-wood {
  display: inline-block;
  padding: 8px 28px;
  font-size: 15px;
  font-weight: 800;
  color: #3e2723;
  background: linear-gradient(180deg, #d7ccc8 0%, #bcaaa4 45%, #8d6e63 100%);
  border-radius: 8px;
  border: 3px solid #5d4037;
  box-shadow:
    0 3px 0 #4e342e,
    0 6px 14px rgba(0, 0, 0, 0.25);
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.35);
}

/* 田垄垫：外圈草皮 + 内圈犁沟感 */
.field-block {
  margin-bottom: 0;
}

.field-mat {
  padding: 16px;
  background: linear-gradient(145deg, #689f38 0%, #558b2f 55%, #33691e 100%);
  border-radius: 20px;
  border: 5px solid #4e342e;
  box-shadow:
    inset 0 2px 16px rgba(0, 0, 0, 0.28),
    0 14px 28px rgba(0, 0, 0, 0.22),
    inset 0 -2px 0 rgba(255, 255, 255, 0.12);
}

.farm-grid-stage {
  perspective: 880px;
  perspective-origin: 50% 42%;
}

.farm-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 11px;
  transform: rotateX(19deg);
  transform-origin: 50% 100%;
  transform-style: preserve-3d;
  padding: 4px 2px 18px;
}

/* 牧场 */
.ranch-block {
  margin-top: 4px;
}

.ranch-ground {
  position: relative;
  min-height: 140px;
  padding: 16px 14px 22px;
  background-color: #7cb342;
  background-image:
    radial-gradient(ellipse 120% 80% at 50% 100%, rgba(67, 160, 71, 0.45) 0%, transparent 55%),
    repeating-linear-gradient(
      92deg,
      rgba(255, 255, 255, 0.06) 0,
      rgba(255, 255, 255, 0.06) 1px,
      transparent 1px,
      transparent 5px
    ),
    repeating-linear-gradient(
      -8deg,
      transparent,
      transparent 3px,
      rgba(46, 125, 50, 0.12) 3px,
      rgba(46, 125, 50, 0.12) 6px
    );
  border-radius: 0 0 18px 18px;
  border: 4px solid #6d4c41;
  border-top: none;
  box-shadow: inset 0 4px 20px rgba(0, 0, 0, 0.12);
}

.ranch-header {
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}

.ranch-icon {
  font-size: 22px;
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2));
}

.ranch-title {
  font-size: 17px;
  font-weight: 800;
  color: #33691e;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.45);
}

.ranch-sub {
  font-size: 12px;
  color: #2e7d32;
  opacity: 0.9;
}

.ranch-empty {
  font-size: 13px;
  color: #33691e;
  text-align: center;
  padding: 20px 12px;
  opacity: 0.85;
}

.buildings-area,
.pets-area {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.buildings-area {
  padding: 8px 0 12px;
}

.building {
  font-size: 36px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.88);
  border-radius: 14px;
  border: 3px solid #8d6e63;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
}

.pet {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 12px 16px 14px;
  background: rgba(255, 255, 255, 0.82);
  border-radius: 18px;
  border: 3px solid rgba(141, 110, 99, 0.85);
  box-shadow:
    0 8px 18px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
}

.pet-name {
  font-size: 12px;
  color: #4e342e;
  font-weight: 700;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
}

.modal-content {
  background: linear-gradient(180deg, #fffde7 0%, #fff 100%);
  padding: 20px;
  border-radius: 16px;
  max-width: 320px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  border: 4px solid #8d6e63;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
}

.modal-content h3 {
  text-align: center;
  color: #4e342e;
  font-size: 18px;
}

.crop-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 14px;
}

.crop-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background: #f1f8e9;
  border-radius: 12px;
  cursor: pointer;
  border: 2px solid #c5e1a5;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.crop-item:hover {
  background: #dcedc8;
  border-color: var(--primary);
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.35);
}

.crop-thumb-wrap {
  width: 52px;
  height: 56px;
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.crop-thumb-wrap :deep(.crop-sprite) {
  max-width: 48px;
  max-height: 54px;
}

.crop-name {
  flex: 1;
  font-weight: 600;
  color: #33691e;
}

.crop-price {
  color: #f57f17;
  font-weight: 700;
}
</style>
