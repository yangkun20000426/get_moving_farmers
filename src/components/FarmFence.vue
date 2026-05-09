<!-- 木栅栏分割农田与牧场 -->
<template>
  <svg
    class="fence"
    viewBox="0 0 400 28"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="wood" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#d7a574" />
        <stop offset="100%" stop-color="#8d6e63" />
      </linearGradient>
    </defs>
    <rect x="0" y="18" width="400" height="10" fill="#5d4037" opacity="0.35" />
    <g v-for="i in 13" :key="i" :transform="`translate(${(i - 1) * 32}, 0)`">
      <rect x="10" y="4" width="10" height="22" rx="1" fill="url(#wood)" stroke="#5d4037" stroke-width="0.5" />
      <rect x="0" y="10" width="30" height="5" rx="1" fill="#a1887f" stroke="#6d4c41" stroke-width="0.4" />
      <rect x="0" y="17" width="30" height="5" rx="1" fill="#bcaaa4" stroke="#6d4c41" stroke-width="0.4" />
    </g>
  </svg>
</template>

<style scoped>
.fence {
  display: block;
  width: 100%;
  height: 28px;
  flex-shrink: 0;
}
</style>
