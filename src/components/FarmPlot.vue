<!-- src/components/FarmPlot.vue -->
<template>
  <div
    class="farm-plot"
    :class="{ ready: isReady, growing: isGrowing }"
    @click="handleClick"
  >
    <span class="plot-icon">{{ icon }}</span>
    <span v-if="isGrowing" class="timer">{{ timeLeft }}</span>
    <span v-if="isReady" class="ready-tag">收获</span>
    <span v-if="!plot.crop" class="plant-hint">+</span>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { crops } from '../data/gameConfig.js'

const props = defineProps({
  plot: Object,
  index: Number
})

const emit = defineEmits(['plant', 'harvest'])

const now = ref(Date.now())
let timer = null

onMounted(() => {
  timer = setInterval(() => {
    now.value = Date.now()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})

const crop = computed(() => props.plot.crop ? crops[props.plot.crop] : null)
const icon = computed(() => crop.value?.icon || '🟫')

const isGrowing = computed(() => {
  if (!props.plot.plantedAt || !crop.value) return false
  const elapsed = now.value - props.plot.plantedAt
  return elapsed < crop.value.growTime * 60 * 60 * 1000
})

const isReady = computed(() => {
  if (!props.plot.plantedAt || !crop.value) return false
  const elapsed = now.value - props.plot.plantedAt
  return elapsed >= crop.value.growTime * 60 * 60 * 1000
})

const timeLeft = computed(() => {
  if (!props.plot.plantedAt || !crop.value) return ''
  const elapsed = now.value - props.plot.plantedAt
  const leftMs = crop.value.growTime * 60 * 60 * 1000 - elapsed
  if (leftMs <= 0) return ''
  const hours = Math.floor(leftMs / (60 * 60 * 1000))
  const minutes = Math.floor((leftMs % (60 * 60 * 1000)) / (60 * 1000))
  return `${hours}:${minutes.toString().padStart(2, '0')}`
})

function handleClick() {
  if (isReady.value) {
    emit('harvest')
  } else if (!props.plot.crop) {
    emit('plant')
  }
}
</script>

<style scoped>
.farm-plot {
  aspect-ratio: 1;
  background: #8D6E63;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  transition: all 0.2s;
}

.farm-plot:hover {
  transform: scale(1.02);
}

.farm-plot.ready {
  background: #A5D6A7;
  animation: pulse 1s infinite;
}

.plot-icon {
  font-size: 32px;
}

.timer {
  font-size: 12px;
  color: white;
  background: rgba(0,0,0,0.5);
  padding: 2px 6px;
  border-radius: 4px;
  margin-top: 4px;
}

.ready-tag {
  position: absolute;
  bottom: 4px;
  background: var(--primary);
  color: white;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 4px;
}

.plant-hint {
  font-size: 24px;
  color: rgba(255,255,255,0.5);
}
</style>