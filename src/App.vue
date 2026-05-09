<!-- src/App.vue -->
<template>
  <div class="container">
    <!-- 顶部资源栏 -->
    <div class="resource-bar">
      <div class="resource-item">
        <span>💰</span>
        <span>{{ state.coins }}</span>
      </div>
      <div class="resource-item">
        <span>💎</span>
        <span>{{ state.diamonds }}</span>
      </div>
      <div class="resource-item">
        <span>⚡</span>
        <span>{{ state.energy }}/{{ state.maxEnergy }}</span>
      </div>
      <div class="resource-item">
        <span>🔥</span>
        <span>{{ state.streakDays }}天</span>
      </div>
    </div>

    <!-- 页面内容 -->
    <component :is="currentPage" />

    <!-- 底部导航 -->
    <div class="tab-bar">
      <div
        v-for="tab in tabs"
        :key="tab.id"
        class="tab-item"
        :class="{ active: activeTab === tab.id }"
        @click="activeTab = tab.id"
      >
        <span class="icon">{{ tab.icon }}</span>
        <span>{{ tab.name }}</span>
      </div>
    </div>

    <!-- 弹窗 -->
    <Modal v-if="showModal" @close="showModal = false">
      <component :is="modalContent" />
    </Modal>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { state } from './stores/gameStore.js'
import HomePage from './pages/HomePage.vue'
import ExercisePage from './pages/ExercisePage.vue'
import StorePage from './pages/StorePage.vue'
import WarehousePage from './pages/WarehousePage.vue'
import SocialPage from './pages/SocialPage.vue'
import AchievementPage from './pages/AchievementPage.vue'
import Modal from './components/Modal.vue'

const activeTab = ref('home')
const showModal = ref(false)
const modalContent = ref(null)

const tabs = [
  { id: 'home', name: '农场', icon: '🏠' },
  { id: 'exercise', name: '运动', icon: '🏃' },
  { id: 'store', name: '商店', icon: '🏪' },
  { id: 'warehouse', name: '仓库', icon: '📦' },
  { id: 'social', name: '社交', icon: '👥' },
  { id: 'achievement', name: '成就', icon: '🏆' }
]

const currentPage = computed(() => {
  const pages = {
    home: HomePage,
    exercise: ExercisePage,
    store: StorePage,
    warehouse: WarehousePage,
    social: SocialPage,
    achievement: AchievementPage
  }
  return pages[activeTab.value]
})
</script>