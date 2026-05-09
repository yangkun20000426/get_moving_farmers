<!-- src/components/FarmPlot.vue -->
<template>
  <div
    class="farm-plot"
    :class="{ ready: isReady, growing: isGrowing && !isReady, empty: !plot.crop }"
    @click="handleClick"
  >
    <div class="plot-soil" aria-hidden="true">
      <div class="soil-shade" />
      <div class="soil-highlight" />
    </div>

    <CropSprite
      v-if="plot.crop"
      class="plot-crop"
      :crop-id="plot.crop"
      :progress="growthProgress"
      :ready="isReady"
      :growing="isGrowing && !isReady"
    />

    <span v-if="isGrowing && !isReady" class="timer">{{ timeLeft }}</span>
    <span v-if="isReady" class="ready-tag">收获</span>

    <div v-if="!plot.crop" class="empty-hint">
      <span class="seed-plus">+</span>
      <span class="seed-label">播种</span>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { crops } from '../data/gameConfig.js'
import CropSprite from './CropSprite.vue'

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

const crop = computed(() => (props.plot.crop ? crops[props.plot.crop] : null))

const growthProgress = computed(() => {
  if (!props.plot.plantedAt || !crop.value) return 0
  const elapsed = now.value - props.plot.plantedAt
  const total = crop.value.growTime * 60 * 60 * 1000
  return Math.min(1, elapsed / total)
})

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
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.22s ease, box-shadow 0.22s ease;
  box-shadow:
    inset 0 -12px 24px rgba(62, 39, 35, 0.35),
    0 6px 14px rgba(0, 0, 0, 0.12);
  border: 2px solid rgba(93, 64, 55, 0.35);
}

.farm-plot:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow:
    inset 0 -12px 24px rgba(62, 39, 35, 0.3),
    0 10px 22px rgba(0, 0, 0, 0.16);
}

.plot-soil {
  position: absolute;
  inset: 0;
  background: linear-gradient(165deg, #a1887f 0%, #6d4c41 42%, #4e342e 100%);
  z-index: 0;
}

.soil-shade {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 55% at 50% 85%, rgba(0, 0, 0, 0.28), transparent 55%);
  pointer-events: none;
}

.soil-highlight {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 90% 40% at 30% 20%, rgba(255, 255, 255, 0.12), transparent 50%),
    repeating-linear-gradient(
      92deg,
      rgba(62, 39, 35, 0.08) 0,
      rgba(62, 39, 35, 0.08) 2px,
      transparent 2px,
      transparent 7px
    );
  opacity: 0.85;
  pointer-events: none;
}

.farm-plot.empty .plot-soil {
  background: linear-gradient(175deg, #c49a7a 0%, #8d6e63 45%, #5d4037 100%);
}

.plot-crop {
  position: relative;
  z-index: 1;
  padding-bottom: 6px;
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  min-height: 0;
}

.farm-plot.ready .plot-soil {
  background: linear-gradient(165deg, #81c784 0%, #43a047 50%, #2e7d32 100%);
}

.farm-plot.ready {
  animation: plot-ready-pulse 1.35s ease-in-out infinite;
  border-color: rgba(255, 241, 118, 0.65);
}

.farm-plot.growing .plot-soil::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 0%, rgba(129, 199, 132, 0.18), transparent 55%);
  pointer-events: none;
}

.timer {
  position: absolute;
  bottom: 6px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: #fff;
  background: rgba(0, 0, 0, 0.48);
  padding: 3px 8px;
  border-radius: 999px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.ready-tag {
  position: absolute;
  bottom: 6px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  background: linear-gradient(180deg, #ffeb3b 0%, #ffc107 100%);
  color: #4e342e;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 999px;
  box-shadow: 0 2px 8px rgba(255, 193, 7, 0.55);
}

.empty-hint {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding-bottom: 14px;
  flex: 1;
}

.seed-plus {
  font-size: 28px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.55);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  animation: seed-pulse 2s ease-in-out infinite;
}

.seed-label {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.65);
  font-weight: 500;
}

@keyframes plot-ready-pulse {
  0%,
  100% {
    box-shadow:
      inset 0 -12px 24px rgba(46, 125, 50, 0.25),
      0 6px 14px rgba(67, 160, 71, 0.35);
  }
  50% {
    box-shadow:
      inset 0 -12px 24px rgba(46, 125, 50, 0.2),
      0 10px 26px rgba(255, 241, 118, 0.45);
  }
}

@keyframes seed-pulse {
  0%,
  100% {
    opacity: 0.65;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.06);
  }
}
</style>
