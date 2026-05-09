<!-- QQ 农场风格：天空、白云、太阳、远景丘陵 -->
<template>
  <div class="backdrop" aria-hidden="true">
    <div class="sky" />
    <div class="sun" />
    <svg class="cloud cloud-a" viewBox="0 0 120 48" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="40" cy="28" rx="28" ry="18" fill="#fff" opacity="0.92" />
      <ellipse cx="68" cy="26" rx="34" ry="22" fill="#fff" opacity="0.95" />
      <ellipse cx="92" cy="30" rx="22" ry="14" fill="#fff" opacity="0.88" />
    </svg>
    <svg class="cloud cloud-b" viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="22" rx="22" ry="14" fill="#fff" opacity="0.85" />
      <ellipse cx="52" cy="20" rx="28" ry="18" fill="#fff" opacity="0.9" />
      <ellipse cx="74" cy="24" rx="18" ry="12" fill="#fff" opacity="0.82" />
    </svg>
    <svg class="hills" viewBox="0 0 400 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0,55 Q80,35 160,50 T320,42 Q360,38 400,48 L400,80 L0,80 Z"
        fill="#7CB342"
      />
      <path
        d="M0,62 Q100,48 200,58 T400,52 L400,80 L0,80 Z"
        fill="#689F38"
        opacity="0.95"
      />
      <path d="M0,68 Q200,60 400,65 L400,80 L0,80 Z" fill="#558B2F" />
    </svg>
  </div>
</template>

<style scoped>
.backdrop {
  position: relative;
  width: 100%;
  height: 132px;
  margin: 0 -16px;
  width: calc(100% + 32px);
  overflow: hidden;
  border-radius: 0 0 24px 24px;
}

.sky {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    #29b6f6 0%,
    #4fc3f7 28%,
    #81d4fa 55%,
    #b3e5fc 85%,
    #c5e1a5 100%
  );
}

.sun {
  position: absolute;
  top: 18px;
  right: 14%;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #fff9c4 0%, #ffeb3b 45%, #ffc107 100%);
  box-shadow:
    0 0 28px rgba(255, 235, 59, 0.85),
    0 0 48px rgba(255, 213, 79, 0.45);
  animation: sun-pulse 5s ease-in-out infinite;
}

.cloud {
  position: absolute;
  height: auto;
  opacity: 0.95;
  filter: drop-shadow(0 2px 4px rgba(100, 150, 200, 0.25));
}

.cloud-a {
  width: 140px;
  top: 26px;
  left: -20px;
  animation: drift-a 38s linear infinite;
}

.cloud-b {
  width: 115px;
  top: 48px;
  left: 40%;
  animation: drift-b 52s linear infinite;
}

.hills {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 56px;
  width: 100%;
  display: block;
  filter: drop-shadow(0 -2px 6px rgba(46, 125, 50, 0.25));
}

@keyframes drift-a {
  0% {
    transform: translateX(-30px);
  }
  100% {
    transform: translateX(calc(100vw + 60px));
  }
}

@keyframes drift-b {
  0% {
    transform: translateX(-80px);
  }
  100% {
    transform: translateX(calc(100vw + 100px));
  }
}

@keyframes sun-pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.95;
  }
}
</style>
