<!-- 小动物 SVG + 简单骨骼式动画，替代静态 emoji -->
<template>
  <div class="pet-sprite" :class="[`pet-${petId}`, { 'size-ranch': size === 'ranch' }]" aria-hidden="true">
    <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" class="pet-svg">
      <!-- 小鸡 -->
      <g v-if="petId === 'chicken'" class="anim-bob">
        <ellipse cx="48" cy="78" rx="22" ry="6" fill="#3E2723" opacity="0.12" />
        <ellipse cx="48" cy="52" rx="26" ry="22" fill="#FFF8E1" />
        <ellipse cx="48" cy="54" rx="22" ry="18" fill="#FFECB3" />
        <circle cx="62" cy="46" r="10" fill="#FFF8E1" />
        <polygon points="68,42 78,46 68,50" fill="#FF9800" />
        <circle cx="65" cy="44" r="2.5" fill="#212121" />
        <path fill="#F44336" d="M44 28 L48 20 L52 28 Z" />
        <path fill="#F44336" d="M48 22 L52 14 L54 24 Z" />
        <ellipse cx="38" cy="72" rx="5" ry="8" fill="#FF9800" />
        <ellipse cx="58" cy="72" rx="5" ry="8" fill="#FF9800" />
      </g>
      <!-- 小狗 -->
      <g v-else-if="petId === 'dog'" class="anim-wiggle">
        <ellipse cx="48" cy="80" rx="24" ry="7" fill="#3E2723" opacity="0.1" />
        <ellipse cx="48" cy="50" rx="28" ry="24" fill="#D7A574" />
        <ellipse cx="30" cy="42" rx="10" ry="18" fill="#C4956A" />
        <ellipse cx="66" cy="42" rx="10" ry="18" fill="#C4956A" />
        <ellipse cx="52" cy="48" rx="18" ry="16" fill="#E6C29A" />
        <circle cx="58" cy="46" r="3" fill="#212121" />
        <ellipse cx="54" cy="54" rx="8" ry="6" fill="#212121" />
        <path stroke="#8D6E63" stroke-width="6" stroke-linecap="round" fill="none" d="M72 56 Q84 48 88 36" />
      </g>
      <!-- 小猫 -->
      <g v-else-if="petId === 'cat'" class="anim-bob">
        <ellipse cx="48" cy="80" rx="22" ry="6" fill="#3E2723" opacity="0.1" />
        <path fill="#FFB74D" d="M28 44 L34 24 L42 40 Z M54 40 L62 24 L68 44 Z" />
        <ellipse cx="48" cy="52" rx="26" ry="22" fill="#FFCC80" />
        <circle cx="40" cy="50" r="4" fill="#42A5F5" />
        <circle cx="56" cy="50" r="4" fill="#42A5F5" />
        <ellipse cx="48" cy="58" rx="5" ry="4" fill="#E65100" />
        <path stroke="#FFCC80" stroke-width="8" stroke-linecap="round" fill="none" d="M22 60 Q12 52 10 40" />
      </g>
      <!-- 兔子 -->
      <g v-else-if="petId === 'rabbit'" class="anim-hop">
        <ellipse cx="48" cy="82" rx="18" ry="5" fill="#3E2723" opacity="0.08" />
        <ellipse cx="38" cy="28" rx="6" ry="22" fill="#EEEEEE" />
        <ellipse cx="58" cy="28" rx="6" ry="22" fill="#EEEEEE" />
        <ellipse cx="48" cy="56" rx="22" ry="20" fill="#FAFAFA" />
        <circle cx="40" cy="52" r="3" fill="#212121" />
        <circle cx="56" cy="52" r="3" fill="#212121" />
        <ellipse cx="48" cy="60" rx="4" ry="3" fill="#F48FB1" />
      </g>
      <!-- 马驹 -->
      <g v-else-if="petId === 'horse'" class="anim-trot">
        <ellipse cx="48" cy="82" rx="26" ry="6" fill="#3E2723" opacity="0.1" />
        <ellipse cx="52" cy="48" rx="22" ry="18" fill="#A1887F" />
        <ellipse cx="72" cy="44" rx="12" ry="10" fill="#BCAAA4" />
        <path fill="#5D4037" d="M68 36 Q76 28 84 32 L80 40 Z" />
        <circle cx="76" cy="42" r="2.5" fill="#212121" />
        <rect x="34" y="62" width="8" height="18" rx="3" fill="#8D6E63" />
        <rect x="50" y="62" width="8" height="18" rx="3" fill="#8D6E63" />
      </g>
      <!-- 兜底 -->
      <g v-else class="anim-bob">
        <circle cx="48" cy="48" r="28" fill="#E0E0E0" />
        <circle cx="40" cy="44" r="4" fill="#424242" />
        <circle cx="56" cy="44" r="4" fill="#424242" />
      </g>
    </svg>
  </div>
</template>

<script setup>
defineProps({
  petId: { type: String, required: true },
  /** 牧场区大号展示 */
  size: { type: String, default: 'default' }
})
</script>

<style scoped>
.pet-sprite {
  width: 72px;
  height: 72px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.pet-sprite.size-ranch {
  width: 108px;
  height: 108px;
  filter: drop-shadow(0 10px 14px rgba(0, 0, 0, 0.22));
}

.pet-svg {
  width: 100%;
  height: 100%;
  overflow: visible;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.15));
}

.anim-bob {
  transform-origin: 48px 72px;
  animation: pet-bob 2.4s ease-in-out infinite;
}

.anim-wiggle {
  transform-origin: 48px 72px;
  animation: pet-wiggle 2.8s ease-in-out infinite;
}

.anim-hop {
  transform-origin: 48px 80px;
  animation: pet-hop 1.8s ease-in-out infinite;
}

.anim-trot {
  transform-origin: 48px 78px;
  animation: pet-trot 2.2s linear infinite;
}

@keyframes pet-bob {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-4px) rotate(-2deg);
  }
}

@keyframes pet-wiggle {
  0%,
  100% {
    transform: rotate(-3deg);
  }
  50% {
    transform: rotate(3deg);
  }
}

@keyframes pet-hop {
  0%,
  100% {
    transform: translateY(0) scaleY(1);
  }
  40% {
    transform: translateY(-10px) scaleY(1.03);
  }
  55% {
    transform: translateY(0) scaleY(0.96);
  }
}

@keyframes pet-trot {
  0%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(3px) rotate(2deg);
  }
  75% {
    transform: translateX(-3px) rotate(-2deg);
  }
}
</style>
