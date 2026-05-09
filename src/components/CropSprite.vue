<!-- 分层 SVG 作物插画，替代扁平 emoji，配合生长进度与收获态动画 -->
<template>
  <div
    class="crop-sprite"
    :class="{ ready, sway: !ready && growing }"
    :style="{ '--growth': growthScale }"
    aria-hidden="true"
  >
    <svg class="crop-svg" viewBox="0 0 72 88" xmlns="http://www.w3.org/2000/svg">
      <!-- 胡萝卜 -->
      <g v-if="cropId === 'carrot'" class="plant-root">
        <path fill="#2E7D32" d="M28 8c4-6 12-8 18-4 2 8-4 14-10 18l-4-6z M38 10c6-4 14-2 18 4-2 8-10 12-16 14l-2-8z" />
        <path fill="#FF8F00" d="M34 22 L38 78 Q36 84 30 84 Q26 82 28 76 Z" />
        <path fill="#FFA726" d="M36 28 L40 72 Q38 80 32 80 Q28 78 30 72 Z" opacity="0.85" />
        <path fill="#E65100" d="M34 50 Q38 52 36 58 Q32 56 34 50" opacity="0.35" />
      </g>
      <!-- 番茄 -->
      <g v-else-if="cropId === 'tomato'" class="plant-round">
        <ellipse cx="36" cy="68" rx="22" ry="10" fill="#3E2723" opacity="0.12" />
        <circle cx="36" cy="42" r="22" fill="#E53935" />
        <circle cx="30" cy="38" r="6" fill="#FFCDD2" opacity="0.45" />
        <path fill="#2E7D32" d="M28 22 Q36 14 44 22 Q40 28 36 30 Q32 28 28 22" />
        <path fill="#1B5E20" d="M34 18 L36 26 L38 18 Z" />
      </g>
      <!-- 玉米 -->
      <g v-else-if="cropId === 'corn'" class="plant-corn">
        <ellipse cx="36" cy="72" rx="18" ry="8" fill="#3E2723" opacity="0.1" />
        <path fill="#558B2F" d="M32 76 L34 28 L38 28 L40 76 Z" />
        <path fill="#FDD835" d="M34 32 Q36 24 38 32 L39 68 Q36 72 33 68 Z" />
        <path fill="#FFF59D" d="M35 36 h4 v4 h-4z M35 44 h4 v4 h-4z M35 52 h4 v4 h-4z" opacity="0.6" />
        <path fill="#33691E" d="M30 30 Q36 18 42 30 Q38 34 36 36 Q34 34 30 30" />
      </g>
      <!-- 草莓 -->
      <g v-else-if="cropId === 'strawberry'" class="plant-berry">
        <ellipse cx="36" cy="74" rx="16" ry="7" fill="#3E2723" opacity="0.1" />
        <path fill="#C62828" d="M24 48 Q36 28 48 48 Q44 68 36 76 Q28 68 24 48" />
        <circle cx="30" cy="52" r="2" fill="#FFEBEE" opacity="0.5" />
        <circle cx="38" cy="58" r="1.8" fill="#FFEBEE" opacity="0.45" />
        <circle cx="34" cy="64" r="1.5" fill="#FFEBEE" opacity="0.4" />
        <path fill="#2E7D32" d="M28 44 Q36 34 44 44 Q40 46 36 48 Q32 46 28 44" />
      </g>
      <!-- 南瓜 -->
      <g v-else-if="cropId === 'pumpkin'" class="plant-pumpkin">
        <ellipse cx="36" cy="70" rx="24" ry="9" fill="#3E2723" opacity="0.08" />
        <ellipse cx="36" cy="46" rx="26" ry="22" fill="#FB8C00" />
        <path stroke="#EF6C00" stroke-width="2" fill="none" d="M22 46 Q36 34 50 46 M26 52 Q36 42 46 52 M28 58 Q36 50 44 58" opacity="0.5" />
        <path fill="#5D4037" d="M34 26 Q36 18 38 26 L37 34 Z" />
      </g>
      <!-- 葡萄 -->
      <g v-else-if="cropId === 'grape'" class="plant-grape">
        <ellipse cx="36" cy="76" rx="14" ry="6" fill="#3E2723" opacity="0.08" />
        <path fill="#6A1B9A" d="M34 78 L36 32 L38 78 Z" opacity="0.35" />
        <circle cx="30" cy="44" r="8" fill="#8E24AA" />
        <circle cx="42" cy="44" r="8" fill="#7B1FA2" />
        <circle cx="36" cy="56" r="9" fill="#9C27B0" />
        <circle cx="30" cy="66" r="7" fill="#AB47BC" />
        <circle cx="42" cy="66" r="7" fill="#8E24AA" />
        <path fill="#33691E" d="M32 28 Q36 20 40 28 L38 36 Z" />
      </g>
      <!-- 西瓜 -->
      <g v-else-if="cropId === 'watermelon'" class="plant-melon">
        <ellipse cx="36" cy="74" rx="26" ry="10" fill="#3E2723" opacity="0.08" />
        <ellipse cx="36" cy="48" rx="28" ry="24" fill="#2E7D32" />
        <path stroke="#1B5E20" stroke-width="3" fill="none" d="M14 48 Q36 28 58 48" opacity="0.5" />
        <ellipse cx="36" cy="48" rx="22" ry="18" fill="#C62828" opacity="0.92" />
        <circle cx="28" cy="46" r="2" fill="#1B1B1B" />
        <circle cx="40" cy="52" r="2" fill="#1B1B1B" />
        <circle cx="34" cy="56" r="1.5" fill="#1B1B1B" />
      </g>
      <!-- 苹果树（简化为一棵小树苗挂果） -->
      <g v-else-if="cropId === 'apple'" class="plant-apple">
        <ellipse cx="36" cy="76" rx="12" ry="5" fill="#3E2723" opacity="0.12" />
        <path fill="#5D4037" d="M34 76 L36 44 L38 76 Z" />
        <circle cx="36" cy="38" r="18" fill="#43A047" />
        <circle cx="28" cy="34" r="6" fill="#66BB6A" opacity="0.5" />
        <circle cx="44" cy="36" r="5" fill="#66BB6A" opacity="0.45" />
        <circle cx="36" cy="42" r="10" fill="#E53935" />
        <path d="M36 28 Q38 22 42 24" stroke="#6D4C41" stroke-width="1.5" fill="none" stroke-linecap="round" />
      </g>
      <!-- 默认幼苗 -->
      <g v-else class="plant-default">
        <path fill="#43A047" d="M28 72 Q36 48 44 72 Z" />
        <path fill="#66BB6A" d="M32 60 Q36 44 40 60 Z" />
      </g>
    </svg>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  cropId: { type: String, required: true },
  /** 0–1，影响纵向缩放模拟生长 */
  progress: { type: Number, default: 1 },
  ready: { type: Boolean, default: false },
  growing: { type: Boolean, default: false }
})

const growthScale = computed(() => {
  const p = Math.min(1, Math.max(0, props.progress))
  return 0.38 + p * 0.62
})
</script>

<style scoped>
.crop-sprite {
  width: 100%;
  height: 100%;
  max-width: 72px;
  max-height: 88px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  pointer-events: none;
}

.crop-svg {
  width: 100%;
  height: auto;
  overflow: visible;
  transform-origin: 50% 85%;
  transform: scaleY(var(--growth, 1));
  transition: transform 0.6s ease-out, filter 0.35s ease;
  filter: drop-shadow(0 3px 4px rgba(0, 0, 0, 0.18));
}

.crop-sprite.ready .crop-svg {
  filter: drop-shadow(0 0 10px rgba(255, 213, 79, 0.95)) drop-shadow(0 4px 6px rgba(0, 0, 0, 0.15));
  animation: crop-ready-glow 1.2s ease-in-out infinite;
}

.crop-sprite.sway .crop-svg {
  animation: crop-sway 3.2s ease-in-out infinite;
}

@keyframes crop-sway {
  0%,
  100% {
    transform: scaleY(var(--growth, 1)) rotate(-2deg);
  }
  50% {
    transform: scaleY(var(--growth, 1)) rotate(2.5deg);
  }
}

@keyframes crop-ready-glow {
  0%,
  100% {
    filter: drop-shadow(0 0 8px rgba(255, 213, 79, 0.85)) drop-shadow(0 4px 6px rgba(0, 0, 0, 0.12));
  }
  50% {
    filter: drop-shadow(0 0 16px rgba(255, 241, 118, 1)) drop-shadow(0 5px 8px rgba(0, 0, 0, 0.18));
  }
}
</style>
