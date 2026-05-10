<!-- 真实 3D 农场：种植区 + 鸡舍 + 畜棚 + 宠物，Three.js WebGL -->
<template>
  <div ref="containerRef" class="farm-scene-3d" role="img" aria-label="3D 农场场景">
    <div v-if="loadError" class="farm-scene-fallback">{{ loadError }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js'
import { crops } from '../data/gameConfig.js'
import { buildFarmDecorations } from '../utils/farmDecorThree.js'

const props = defineProps({
  farmGrid: { type: Array, required: true },
  unlockedPets: { type: Array, default: () => [] }
})

const emit = defineEmits(['plot-click'])

const containerRef = ref(null)
const loadError = ref('')

/** 饲养分区：与建筑组团一致——西侧院落（工具房+井）、东侧畜棚圈与家禽栏 */
const PET_PENS = {
  coop: { minX: 5.2, maxX: 9.5, minZ: 4.0, maxZ: 8.4 },
  barn: { minX: 4.8, maxX: 10.8, minZ: -9.5, maxZ: -3.4 },
  yard: { minX: -13.9, maxX: -7.5, minZ: -9.4, maxZ: -2.6 }
}

const CROP_FRUIT_COLORS = {
  carrot: 0xff9800,
  tomato: 0xe53935,
  corn: 0xffeb3b,
  strawberry: 0xec407a,
  pumpkin: 0xfb8c00,
  grape: 0x7e57c2,
  watermelon: 0x2e7d32,
  apple: 0xd32f2f
}

let renderer
let labelRenderer
let scene
let camera
let controls
let animationId = 0
let plotParent
let plotEntries = []
let petRoot
let raycaster
let pointer
let boundPointerDown
let boundResize
let disposed = false
/** @type {THREE.Clock} */
let clock
/** @type {THREE.Group | null} */
let windmillRotor
/** @type {THREE.Group | null} */
let birdRoot
/** @type {THREE.Group | null} */
let critterRoot
/** 玩家解锁宠物的漫游代理 */
let petAgents = []
/** 环境小动物（补充生机） */
let ambientAgents = []

function assetUrl(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

function makeLabel(text) {
  const div = document.createElement('div')
  div.className = 'farm-3d-label'
  div.textContent = text
  return new CSS2DObject(div)
}

function disposeObject3D(obj) {
  if (!obj) return
  obj.traverse(child => {
    if (child.geometry) child.geometry.dispose()
    if (child.material) {
      const mats = Array.isArray(child.material) ? child.material : [child.material]
      mats.forEach(m => {
        if (m.map) m.map.dispose()
        m.dispose?.()
      })
    }
  })
}

function createPlotGrid() {
  plotParent = new THREE.Group()
  plotParent.name = 'farmPlots'
  scene.add(plotParent)

  plotEntries = []
  for (let i = 0; i < 9; i++) {
    const row = Math.floor(i / 3)
    const col = i % 3
    /* 整体略向东移，避免与西侧院落、水井栏栅挤在一起 */
    const gx = -4.55 + col * 2.38
    const gz = -3.05 + row * 2.38

    const group = new THREE.Group()
    group.position.set(gx, 0, gz)
    group.userData.plotIndex = i

    const rim = new THREE.Mesh(
      new THREE.BoxGeometry(2.12, 0.08, 2.12),
      new THREE.MeshStandardMaterial({ color: 0x4e342e, roughness: 1, metalness: 0 })
    )
    rim.position.y = 0.04
    rim.receiveShadow = true
    rim.castShadow = true
    group.add(rim)

    const soil = new THREE.Mesh(
      new THREE.PlaneGeometry(1.88, 1.88),
      new THREE.MeshStandardMaterial({ color: 0x795548, roughness: 1, metalness: 0 })
    )
    soil.rotation.x = -Math.PI / 2
    soil.position.y = 0.085
    soil.receiveShadow = true
    group.add(soil)

    const cropGroup = new THREE.Group()
    cropGroup.position.y = 0.09
    group.add(cropGroup)

    plotParent.add(group)
    plotEntries.push({
      group,
      soil,
      cropGroup,
      stem: null,
      fruit: null
    })
  }

  const zoneTag = makeLabel('种植区')
  zoneTag.position.set(-2.2, 2.8, -0.65)
  scene.add(zoneTag)
}

function buildCoop() {
  const g = new THREE.Group()
  g.position.set(7.2, 0, 6.1)

  const base = new THREE.Mesh(
    new THREE.BoxGeometry(3, 1.85, 3),
    new THREE.MeshStandardMaterial({ color: 0xcbbba4, roughness: 0.85, metalness: 0 })
  )
  base.position.y = 0.925
  base.castShadow = true
  base.receiveShadow = true
  g.add(base)

  const roof = new THREE.Mesh(
    new THREE.ConeGeometry(2.35, 1.35, 4),
    new THREE.MeshStandardMaterial({ color: 0xb71c1c, roughness: 0.55, metalness: 0.05 })
  )
  roof.position.y = 2.35
  roof.rotation.y = Math.PI / 4
  roof.castShadow = true
  g.add(roof)

  const door = new THREE.Mesh(
    new THREE.PlaneGeometry(0.9, 1.1),
    new THREE.MeshStandardMaterial({ color: 0x4e342e, roughness: 1 })
  )
  door.position.set(0, 0.85, 1.51)
  g.add(door)

  const tag = makeLabel('鸡舍')
  tag.position.set(0, 3.15, 0)
  g.add(tag)

  scene.add(g)
}

function buildBarn() {
  const g = new THREE.Group()
  g.position.set(7.0, 0, -5.9)

  const body = new THREE.Mesh(
    new THREE.BoxGeometry(5.2, 3.4, 4.6),
    new THREE.MeshStandardMaterial({ color: 0x8d6e63, roughness: 0.9, metalness: 0 })
  )
  body.position.y = 1.7
  body.castShadow = true
  body.receiveShadow = true
  g.add(body)

  const roof = new THREE.Mesh(
    new THREE.BoxGeometry(5.6, 0.55, 4.9),
    new THREE.MeshStandardMaterial({ color: 0x5d4037, roughness: 0.75 })
  )
  roof.position.set(0, 3.55, 0)
  roof.rotation.z = 0.06
  roof.castShadow = true
  g.add(roof)

  const door = new THREE.Mesh(
    new THREE.PlaneGeometry(1.8, 2.4),
    new THREE.MeshStandardMaterial({ color: 0x3e2723, roughness: 1 })
  )
  door.position.set(0, 1.25, 2.31)
  g.add(door)

  const tag = makeLabel('畜棚')
  tag.position.set(0, 4.2, 0)
  g.add(tag)

  scene.add(g)
}

function addTree(x, z, scale = 1, leafHue = 0x2e7d32) {
  const s = scale
  const trunk = new THREE.Mesh(
    new THREE.CylinderGeometry(0.22 * s, 0.32 * s, 1.15 * s, 8),
    new THREE.MeshStandardMaterial({ color: 0x5d4037, roughness: 1 })
  )
  trunk.position.set(x, 0.575 * s, z)
  trunk.castShadow = true
  const leaves = new THREE.Mesh(
    new THREE.ConeGeometry(1.35 * s, 2.4 * s, 8),
    new THREE.MeshStandardMaterial({ color: leafHue, roughness: 0.75 })
  )
  leaves.position.set(x, 2.35 * s, z)
  leaves.castShadow = true
  scene.add(trunk, leaves)
}

function addBush(x, z, r = 0.55) {
  const bush = new THREE.Mesh(
    new THREE.SphereGeometry(r, 10, 8),
    new THREE.MeshStandardMaterial({ color: 0x388e3c, roughness: 0.88 })
  )
  bush.position.set(x, r * 0.65, z)
  bush.scale.y = 0.65
  bush.castShadow = true
  bush.receiveShadow = true
  scene.add(bush)
}

/** 木栅栏（场地边缘） */
function buildFence() {
  const g = new THREE.Group()
  const postMat = new THREE.MeshStandardMaterial({ color: 0x6d4c41, roughness: 0.95 })
  const railMat = new THREE.MeshStandardMaterial({ color: 0x8d6e63, roughness: 0.9 })
  const postGeo = new THREE.BoxGeometry(0.2, 0.72, 0.2)
  const railGeo = new THREE.BoxGeometry(1.85, 0.1, 0.1)

  function post(px, pz) {
    const m = new THREE.Mesh(postGeo, postMat)
    m.position.set(px, 0.36, pz)
    m.castShadow = true
    g.add(m)
  }

  const minX = -19
  const maxX = 19
  const minZ = -19
  const maxZ = 19
  const step = 1.85
  for (let x = minX; x <= maxX; x += step) {
    post(x, minZ)
    post(x, maxZ)
  }
  for (let z = minZ + step; z < maxZ; z += step) {
    post(minX, z)
    post(maxX, z)
  }

  for (let x = minX; x < maxX; x += step) {
    const rail = new THREE.Mesh(railGeo, railMat)
    rail.position.set(x + step / 2, 0.52, minZ)
    rail.castShadow = true
    g.add(rail)
    const rail2 = rail.clone()
    rail2.position.set(x + step / 2, 0.52, maxZ)
    g.add(rail2)
  }
  for (let z = minZ; z < maxZ; z += step) {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 1.85), railMat)
    rail.position.set(minX, 0.52, z + step / 2)
    rail.castShadow = true
    g.add(rail)
    const rail2 = rail.clone()
    rail2.position.set(maxX, 0.52, z + step / 2)
    g.add(rail2)
  }

  scene.add(g)
}

/** 饲养区矮栅栏（与外墙风格区分，略矮一点） */
function buildRectPen(bounds, labelText) {
  const { minX, maxX, minZ, maxZ } = bounds
  const g = new THREE.Group()
  const postMat = new THREE.MeshStandardMaterial({ color: 0x6d4c41, roughness: 0.93 })
  const railMat = new THREE.MeshStandardMaterial({ color: 0xbcaaa4, roughness: 0.88 })
  const postGeo = new THREE.BoxGeometry(0.13, 0.48, 0.13)
  const step = 1.15

  function addPost(px, pz) {
    const m = new THREE.Mesh(postGeo, postMat)
    m.position.set(px, 0.24, pz)
    m.castShadow = true
    g.add(m)
  }

  for (let x = minX; x <= maxX + 0.01; x += step) {
    addPost(Math.min(x, maxX), minZ)
    addPost(Math.min(x, maxX), maxZ)
  }
  for (let z = minZ + step; z < maxZ; z += step) {
    addPost(minX, z)
    addPost(maxX, z)
  }

  for (let x = minX; x < maxX - 0.05; x += step) {
    const seg = Math.min(step, maxX - x)
    const rail = new THREE.Mesh(new THREE.BoxGeometry(seg, 0.06, 0.06), railMat)
    rail.position.set(x + seg / 2, 0.4, minZ)
    rail.castShadow = true
    g.add(rail)
    const r2 = rail.clone()
    r2.position.set(x + seg / 2, 0.4, maxZ)
    g.add(r2)
  }
  for (let z = minZ; z < maxZ - 0.05; z += step) {
    const seg = Math.min(step, maxZ - z)
    const rail = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, seg), railMat)
    rail.position.set(minX, 0.4, z + seg / 2)
    rail.castShadow = true
    g.add(rail)
    const r2 = rail.clone()
    r2.position.set(maxX, 0.4, z + seg / 2)
    g.add(r2)
  }

  if (labelText) {
    const lab = makeLabel(labelText)
    lab.position.set((minX + maxX) / 2, 0.82, (minZ + maxZ) / 2)
    g.add(lab)
  }
  scene.add(g)
}

function buildPetPens() {
  buildRectPen(PET_PENS.coop, '家禽栏')
  buildRectPen(PET_PENS.barn, '牧场圈')
  buildRectPen(PET_PENS.yard, '院落')
}

/** 浅色小径：主路 + 东环纵轴 + 院落出口，形成连通路网 */
function buildPath() {
  const mat = new THREE.MeshStandardMaterial({ color: 0xe6ddd4, roughness: 0.9 })
  const y = 0.036
  const seg = (x, z, w, d, rotY = 0) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), mat)
    m.rotation.x = -Math.PI / 2
    m.rotation.z = rotY
    m.position.set(x, y, z)
    m.receiveShadow = true
    scene.add(m)
  }
  /* 南侧入口向北，沿种植区东侧 */
  seg(-3.2, -8.5, 4.2, 24, 0)
  /* 东西主轴：西接院落外，东接畜棚—鸡舍纵路 */
  seg(-1.5, 2.2, 32, 3.6, 0.02)
  /* 东侧纵轴：串联畜棚、粮仓一侧与鸡舍一侧 */
  seg(8.8, -0.6, 3.6, 24, 0.02)
  /* 院落向南出口接入主轴 */
  seg(-10.5, -4.8, 3.3, 12, 0.08)
  /* 粮仓前横向短线 */
  seg(11.8, -7.2, 5.5, 3.2, 0.04)
  /* 风车脚下小坪 */
  seg(-13.5, -11.2, 5, 4.5, 0.06)
}

/** 风车（叶片旋转） */
function buildWindmill() {
  const base = new THREE.Group()
  base.position.set(-13.6, 0, -10.5)

  const tower = new THREE.Mesh(
    new THREE.CylinderGeometry(1.1, 1.45, 5.2, 10),
    new THREE.MeshStandardMaterial({ color: 0xd7ccc8, roughness: 0.85 })
  )
  tower.position.y = 2.6
  tower.castShadow = true
  base.add(tower)

  const cap = new THREE.Mesh(
    new THREE.ConeGeometry(1.25, 1.2, 8),
    new THREE.MeshStandardMaterial({ color: 0xa1887f, roughness: 0.7 })
  )
  cap.position.y = 5.7
  cap.castShadow = true
  base.add(cap)

  windmillRotor = new THREE.Group()
  windmillRotor.position.set(0, 5.9, 0)
  for (let i = 0; i < 4; i++) {
    const blade = new THREE.Mesh(
      new THREE.BoxGeometry(0.32, 0.07, 3.6),
      new THREE.MeshStandardMaterial({ color: 0xefebe9, roughness: 0.55 })
    )
    blade.position.z = 1.75
    const arm = new THREE.Group()
    arm.rotation.y = (i * Math.PI) / 2
    arm.add(blade)
    windmillRotor.add(arm)
  }
  base.add(windmillRotor)

  const tag = makeLabel('风车')
  tag.position.set(0, 7.2, 0)
  base.add(tag)

  scene.add(base)
}

/** 筒仓 */
function buildSilo() {
  const g = new THREE.Group()
  g.position.set(11.4, 0, -6.6)
  const body = new THREE.Mesh(
    new THREE.CylinderGeometry(1.35, 1.5, 5.5, 14),
    new THREE.MeshStandardMaterial({ color: 0xcfd8dc, roughness: 0.65, metalness: 0.15 })
  )
  body.position.y = 2.75
  body.castShadow = true
  g.add(body)
  const roof = new THREE.Mesh(
    new THREE.ConeGeometry(1.55, 1.1, 12),
    new THREE.MeshStandardMaterial({ color: 0xb0bec5, roughness: 0.55 })
  )
  roof.position.y = 6.05
  roof.castShadow = true
  g.add(roof)
  const tag = makeLabel('粮仓')
  tag.position.set(0, 6.8, 0)
  g.add(tag)
  scene.add(g)
}

/** 水井 */
function buildWell() {
  const g = new THREE.Group()
  g.position.set(-9.6, 0, -7.6)
  const wall = new THREE.Mesh(
    new THREE.TorusGeometry(0.62, 0.13, 12, 24),
    new THREE.MeshStandardMaterial({ color: 0x78909c, roughness: 0.75 })
  )
  wall.rotation.x = Math.PI / 2
  wall.position.y = 0.2
  wall.castShadow = true
  wall.receiveShadow = true
  g.add(wall)
  const roof = new THREE.Mesh(
    new THREE.ConeGeometry(0.78, 0.62, 4),
    new THREE.MeshStandardMaterial({ color: 0x8d6e63, roughness: 0.8 })
  )
  roof.position.y = 0.78
  roof.rotation.y = Math.PI / 4
  roof.castShadow = true
  g.add(roof)
  const pole = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.06, 1.05, 8),
    new THREE.MeshStandardMaterial({ color: 0x5d4037 })
  )
  pole.position.set(0.55, 0.72, 0)
  pole.castShadow = true
  g.add(pole)
  const tag = makeLabel('水井')
  tag.position.set(0, 1.65, 0)
  g.add(tag)
  scene.add(g)
}

/** 工具房 */
function buildToolShed() {
  const g = new THREE.Group()
  g.position.set(-11.8, 0, -5.4)
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(3.2, 2.2, 2.8),
    new THREE.MeshStandardMaterial({ color: 0xa1887f, roughness: 0.88 })
  )
  body.position.y = 1.1
  body.castShadow = true
  g.add(body)
  const roof = new THREE.Mesh(
    new THREE.CylinderGeometry(0, 1.9, 2.6, 3, 1),
    new THREE.MeshStandardMaterial({ color: 0x5d4037, roughness: 0.75 })
  )
  roof.position.y = 2.65
  roof.rotation.z = Math.PI / 2
  roof.rotation.y = Math.PI / 2
  roof.castShadow = true
  g.add(roof)
  const tag = makeLabel('工具房')
  tag.position.set(0, 3.2, 0)
  g.add(tag)
  scene.add(g)
}

function scatterExtraTreesAndBushes() {
  addTree(-16.2, -11.5, 0.78, 0x1b5e20)
  addTree(-15.5, 9.5, 0.72, 0x33691e)
  addTree(15.5, -11.2, 0.8, 0x2e7d32)
  addTree(14.8, 10.2, 0.68, 0x43a047)
  addBush(-17.5, -4, 0.48)
  addBush(16.5, 4.5, 0.52)
  addBush(-6, -16.5, 0.44)
}

/** 空中飞鸟（装饰） */
function buildBirds() {
  birdRoot = new THREE.Group()
  const mat = new THREE.MeshStandardMaterial({ color: 0x5d4037, roughness: 0.8 })
  for (let i = 0; i < 6; i++) {
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.11, 8, 8), mat)
    b.userData.orbitR = 10 + i * 0.9
    b.userData.orbitSpeed = 0.12 + i * 0.02
    b.userData.orbitPhase = i * 1.1
    b.userData.alt = 6.5 + (i % 4) * 0.55
    birdRoot.add(b)
  }
  scene.add(birdRoot)
}

function setupPets() {
  petRoot = new THREE.Group()
  scene.add(petRoot)
  critterRoot = new THREE.Group()
  scene.add(critterRoot)
  syncPets()
  createAmbientCritters()
}

function centerOfPen(bounds, y = 0.38) {
  return new THREE.Vector3(
    (bounds.minX + bounds.maxX) / 2,
    y,
    (bounds.minZ + bounds.maxZ) / 2
  )
}

function penBoundsForPet(pid) {
  if (pid === 'chicken' || pid === 'rabbit') return PET_PENS.coop
  if (pid === 'horse') return PET_PENS.barn
  if (pid === 'dog' || pid === 'cat') return PET_PENS.yard
  return PET_PENS.yard
}

function maxWanderInPen(bounds) {
  const w = bounds.maxX - bounds.minX
  const d = bounds.maxZ - bounds.minZ
  return Math.min(w, d) * 0.42
}

/** 栏内起点：每个分区中心附近稍微错开，避免完全重叠 */
function homeForPet(pid, idx) {
  const b = penBoundsForPet(pid)
  const base = centerOfPen(b)
  const ox = (idx % 2) * 0.35 - 0.175
  const oz = (Math.floor(idx / 2) % 2) * 0.35 - 0.175
  base.x += ox
  base.z += oz
  return base
}

function wanderRadiusFor(pid, bounds) {
  let r = 2.2
  if (pid === 'horse') r = 2.6
  if (pid === 'dog' || pid === 'cat') r = 2.4
  if (pid === 'chicken') r = 1.9
  if (pid === 'rabbit') r = 2.0
  return Math.min(r, maxWanderInPen(bounds) * 0.92)
}

function syncPets() {
  if (!petRoot) return
  petAgents = []
  while (petRoot.children.length > 0) {
    const ch = petRoot.children[0]
    petRoot.remove(ch)
    disposeObject3D(ch)
  }

  const palette = {
    chicken: 0xffeb3b,
    dog: 0x8d6e63,
    cat: 0xff9800,
    rabbit: 0xf5f5f5,
    horse: 0x6d4c41
  }

  props.unlockedPets.forEach((pid, idx) => {
    const bounds = penBoundsForPet(pid)
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.38, 18, 14),
      new THREE.MeshStandardMaterial({
        color: palette[pid] ?? 0xcfcfcf,
        roughness: 0.45,
        metalness: 0.05
      })
    )
    const home = homeForPet(pid, idx)
    mesh.position.copy(home)
    mesh.castShadow = true
    mesh.userData.petId = pid
    petRoot.add(mesh)
    petAgents.push({
      mesh,
      petId: pid,
      home: home.clone(),
      bounds,
      phase: idx * 2.1 + Math.random() * 2.5,
      radius: wanderRadiusFor(pid, bounds),
      speed: pid === 'horse' ? 0.38 : pid === 'chicken' ? 0.62 : 0.48
    })
  })
}

/** 环境小动物：不依赖解锁，让农场始终有点生气 */
function createAmbientCritters() {
  if (!critterRoot) return
  ambientAgents = []
  while (critterRoot.children.length > 0) {
    const ch = critterRoot.children[0]
    critterRoot.remove(ch)
    disposeObject3D(ch)
  }

  const specs = [
    { kind: 'chick', color: 0xffeb3b, scale: 0.22, pen: 'coop' },
    { kind: 'chick', color: 0xfff176, scale: 0.2, pen: 'coop' },
    { kind: 'duck', color: 0xffd54f, scale: 0.28, pen: 'yard' },
    { kind: 'sheep', color: 0xeeeeee, scale: 0.42, pen: 'barn' },
    { kind: 'frog', color: 0x66bb6a, scale: 0.18, pen: 'yard' }
  ]

  specs.forEach((sp, i) => {
    let mesh
    if (sp.kind === 'duck') {
      const g = new THREE.Group()
      const body = new THREE.Mesh(
        new THREE.SphereGeometry(sp.scale, 10, 8),
        new THREE.MeshStandardMaterial({ color: sp.color, roughness: 0.5 })
      )
      const head = new THREE.Mesh(
        new THREE.SphereGeometry(sp.scale * 0.55, 8, 8),
        new THREE.MeshStandardMaterial({ color: 0xffb74d, roughness: 0.45 })
      )
      head.position.set(sp.scale * 0.9, sp.scale * 0.2, 0)
      g.add(body, head)
      mesh = g
    } else {
      mesh = new THREE.Mesh(
        new THREE.SphereGeometry(sp.scale, 12, 10),
        new THREE.MeshStandardMaterial({ color: sp.color, roughness: 0.5 })
      )
    }
    const y = sp.kind === 'frog' ? 0.15 : 0.38
    const bounds = PET_PENS[sp.pen]
    const hx = (bounds.minX + bounds.maxX) / 2 + (i % 3) * 0.25 - 0.25
    const hz = (bounds.minZ + bounds.maxZ) / 2 + Math.floor(i / 3) * 0.2 - 0.1
    mesh.position.set(hx, y, hz)
    mesh.castShadow = true
    critterRoot.add(mesh)
    ambientAgents.push({
      mesh,
      home: new THREE.Vector3(hx, y, hz),
      bounds,
      phase: i * 1.4 + Math.random(),
      radius: Math.min(sp.kind === 'sheep' ? 2.2 : 1.5, maxWanderInPen(bounds) * 0.88),
      speed: 0.35 + Math.random() * 0.15,
      hop: sp.kind === 'frog' || sp.kind === 'chick'
    })
  })
}

function clampPasture(x, z) {
  const margin = 1.2
  return {
    x: THREE.MathUtils.clamp(x, -18 + margin, 18 - margin),
    z: THREE.MathUtils.clamp(z, -18 + margin, 18 - margin)
  }
}

function clampToPen(x, z, bounds) {
  const margin = 0.32
  return {
    x: THREE.MathUtils.clamp(x, bounds.minX + margin, bounds.maxX - margin),
    z: THREE.MathUtils.clamp(z, bounds.minZ + margin, bounds.maxZ - margin)
  }
}

/** 栏内漫游：轨迹限制在对应栅栏矩形中 */
function updateAgentRoaming(t, agents, dt) {
  agents.forEach(a => {
    const { mesh, home, phase, radius, speed } = a
    const hop = a.hop
    const bounds = a.bounds
    const r =
      radius *
      (0.72 +
        0.28 * Math.sin(t * 0.17 + phase))
    const ang = t * speed + phase
    let x =
      home.x +
      Math.cos(ang) * r +
      Math.sin(ang * 2.4 + phase * 0.7) * (r * 0.28)
    let z =
      home.z +
      Math.sin(ang * 0.92) * r * 0.85 +
      Math.cos(ang * 1.9 + phase) * (r * 0.22)
    const c = bounds ? clampToPen(x, z, bounds) : clampPasture(x, z)
    x = c.x
    z = c.z

    const baseY = home.y
    const bob = hop
      ? Math.abs(Math.sin(t * 5 + phase)) * 0.12
      : Math.sin(t * 3.2 + phase) * 0.04
    mesh.position.set(x, baseY + bob, z)

    const nextAng = ang + speed * dt * 12
    const tx =
      home.x +
      Math.cos(nextAng) * r +
      Math.sin(nextAng * 2.4 + phase * 0.7) * (r * 0.28)
    const tz =
      home.z +
      Math.sin(nextAng * 0.92) * r * 0.85 +
      Math.cos(nextAng * 1.9 + phase) * (r * 0.22)
    const dx = tx - x
    const dz = tz - z
    mesh.rotation.y = Math.atan2(dx, dz)
  })
}

function updateBirds(t) {
  if (!birdRoot) return
  birdRoot.children.forEach((b, i) => {
    const ang = t * b.userData.orbitSpeed + b.userData.orbitPhase
    const r = b.userData.orbitR
    b.position.set(
      Math.cos(ang) * r + 1.5,
      b.userData.alt + Math.sin(t * 2.2 + i) * 0.35,
      Math.sin(ang) * r * 0.85 - 5
    )
  })
}

function clearCropMeshes(entry) {
  if (entry.stem) {
    entry.cropGroup.remove(entry.stem)
    entry.stem.geometry.dispose()
    entry.stem.material.dispose()
    entry.stem = null
  }
  if (entry.fruit) {
    entry.cropGroup.remove(entry.fruit)
    entry.fruit.geometry.dispose()
    entry.fruit.material.dispose()
    entry.fruit = null
  }
}

function syncPlotsFromProps() {
  props.farmGrid.forEach((plot, i) => {
    const entry = plotEntries[i]
    if (!entry) return

    if (!plot.crop) {
      clearCropMeshes(entry)
      entry.soil.material.color.setHex(0x795548)
      return
    }

    const cropDef = crops[plot.crop]
    if (!cropDef || !plot.plantedAt) {
      clearCropMeshes(entry)
      return
    }

    const elapsed = Date.now() - plot.plantedAt
    const total = cropDef.growTime * 60 * 60 * 1000
    const progress = Math.min(1, elapsed / total)
    const scale = 0.22 + 0.78 * Math.pow(progress, 0.55)

    const fruitColor = CROP_FRUIT_COLORS[plot.crop] ?? 0xff9800

    if (!entry.stem) {
      entry.stem = new THREE.Mesh(
        new THREE.CylinderGeometry(0.07, 0.09, 0.5, 10),
        new THREE.MeshStandardMaterial({ color: 0x43a047, roughness: 0.65 })
      )
      entry.stem.castShadow = true
      entry.cropGroup.add(entry.stem)
    }
    if (!entry.fruit) {
      entry.fruit = new THREE.Mesh(
        new THREE.SphereGeometry(0.24, 14, 12),
        new THREE.MeshStandardMaterial({
          color: fruitColor,
          roughness: 0.35,
          metalness: 0.05,
          emissive: 0x000000
        })
      )
      entry.fruit.castShadow = true
      entry.cropGroup.add(entry.fruit)
    }

    entry.stem.scale.set(1, scale, 1)
    entry.stem.position.y = 0.25 * scale

    entry.fruit.material.color.setHex(fruitColor)
    entry.fruit.scale.setScalar(scale)
    entry.fruit.position.y = 0.52 * scale
    const ripe = progress >= 1
    entry.fruit.material.emissive.setHex(ripe ? 0x331a00 : 0x000000)

    entry.soil.material.color.setHex(progress >= 1 ? 0x6d4c41 : 0x795548)
  })
}

function onPointerDown(event) {
  if (!renderer || !plotParent) return
  const rect = renderer.domElement.getBoundingClientRect()
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
  raycaster.setFromCamera(pointer, camera)
  const hits = raycaster.intersectObjects(plotParent.children, true)
  for (const h of hits) {
    let cur = h.object
    while (cur) {
      if (typeof cur.userData.plotIndex === 'number') {
        emit('plot-click', cur.userData.plotIndex)
        return
      }
      cur = cur.parent
    }
  }
}

function onResize() {
  if (!containerRef.value || !camera || !renderer) return
  const w = containerRef.value.clientWidth
  const h = containerRef.value.clientHeight || 320
  camera.aspect = w / h
  camera.updateProjectionMatrix()
  renderer.setSize(w, h)
  labelRenderer.setSize(w, h)
}

function animate() {
  animationId = requestAnimationFrame(animate)
  const dt = clock.getDelta()
  const t = clock.elapsedTime

  syncPlotsFromProps()

  if (windmillRotor) {
    windmillRotor.rotation.y += dt * 0.95
  }
  updateBirds(t)
  updateAgentRoaming(t, petAgents, dt)
  updateAgentRoaming(t, ambientAgents, dt)

  controls.update()
  renderer.render(scene, camera)
  labelRenderer.render(scene, camera)
}

function initThree() {
  const container = containerRef.value
  if (!container) return

  const w = container.clientWidth || container.offsetWidth || 320
  const h = Math.max(280, container.clientHeight || 360)

  raycaster = new THREE.Raycaster()
  pointer = new THREE.Vector2()
  clock = new THREE.Clock()

  scene = new THREE.Scene()
  scene.background = new THREE.Color(0xaedff7)
  scene.fog = new THREE.Fog(0xc5e1a5, 38, 88)

  camera = new THREE.PerspectiveCamera(40, w / h, 0.12, 220)
  camera.position.set(16, 12, 15)
  camera.lookAt(-2.5, 0.6, -2)

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(w, h)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.05
  container.appendChild(renderer.domElement)

  labelRenderer = new CSS2DRenderer()
  labelRenderer.setSize(w, h)
  labelRenderer.domElement.style.position = 'absolute'
  labelRenderer.domElement.style.top = '0'
  labelRenderer.domElement.style.left = '0'
  labelRenderer.domElement.style.pointerEvents = 'none'
  container.appendChild(labelRenderer.domElement)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.07
  controls.target.set(-2.5, 0.55, -2.2)
  controls.maxPolarAngle = Math.PI / 2 - 0.09
  controls.minDistance = 11
  controls.maxDistance = 44

  const hemi = new THREE.HemisphereLight(0xffffff, 0x6d8c5e, 0.62)
  scene.add(hemi)
  const sun = new THREE.DirectionalLight(0xfff4e0, 1.08)
  sun.position.set(20, 32, 14)
  sun.castShadow = true
  sun.shadow.mapSize.set(2048, 2048)
  sun.shadow.bias = -0.00025
  sun.shadow.camera.near = 4
  sun.shadow.camera.far = 90
  sun.shadow.camera.left = -28
  sun.shadow.camera.right = 28
  sun.shadow.camera.top = 28
  sun.shadow.camera.bottom = -28
  scene.add(sun)

  const groundGeo = new THREE.PlaneGeometry(60, 60)
  const groundMat = new THREE.MeshStandardMaterial({
    color: 0x7cb342,
    roughness: 0.95,
    metalness: 0
  })
  const ground = new THREE.Mesh(groundGeo, groundMat)
  ground.rotation.x = -Math.PI / 2
  ground.receiveShadow = true
  scene.add(ground)

  const loader = new THREE.TextureLoader()
  loader.load(
    assetUrl('assets/farm/grass.jpg'),
    tex => {
      if (disposed) {
        tex.dispose()
        return
      }
      tex.wrapS = tex.wrapT = THREE.RepeatWrapping
      tex.repeat.set(12, 12)
      tex.colorSpace = THREE.SRGBColorSpace
      groundMat.map = tex
      groundMat.needsUpdate = true
    },
    undefined,
    () => {
      loadError.value = ''
    }
  )

  createPlotGrid()
  buildFence()
  buildCoop()
  buildBarn()
  buildWindmill()
  buildSilo()
  buildWell()
  buildToolShed()
  buildPath()
  buildPetPens()
  buildFarmDecorations(scene, PET_PENS)
  scatterExtraTreesAndBushes()
  addTree(-12.5, 5.5, 0.92, 0x2e7d32)
  addTree(-10.5, -12, 0.88, 0x388e3c)
  addTree(12.5, -5.5, 0.9, 0x33691e)
  buildBirds()
  setupPets()

  boundPointerDown = onPointerDown
  renderer.domElement.addEventListener('pointerdown', boundPointerDown)

  boundResize = onResize
  window.addEventListener('resize', boundResize)

  animate()
}

watch(
  () => props.unlockedPets,
  () => syncPets(),
  { deep: true }
)

onMounted(() => {
  disposed = false
  try {
    initThree()
  } catch (e) {
    console.error(e)
    loadError.value = '3D 场景初始化失败，请刷新重试'
  }
})

onUnmounted(() => {
  disposed = true
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', boundResize)
  if (renderer?.domElement && boundPointerDown) {
    renderer.domElement.removeEventListener('pointerdown', boundPointerDown)
  }
  controls?.dispose?.()
  if (scene) {
    scene.traverse(obj => {
      if (obj.geometry) obj.geometry.dispose()
      if (obj.material) {
        const mats = Array.isArray(obj.material) ? obj.material : [obj.material]
        mats.forEach(m => {
          if (m.map) m.map.dispose()
          m.dispose?.()
        })
      }
    })
  }
  renderer?.dispose?.()
})
</script>

<style scoped>
.farm-scene-3d {
  position: relative;
  width: 100%;
  min-height: min(58vh, 480px);
  height: 400px;
  border-radius: 16px;
  overflow: hidden;
  border: 4px solid #5d4037;
  box-shadow:
    inset 0 2px 16px rgba(0, 0, 0, 0.18),
    0 12px 28px rgba(0, 0, 0, 0.22);
  background: #90caf9;
}

.farm-scene-3d :deep(canvas) {
  display: block;
  width: 100% !important;
  height: 100% !important;
  touch-action: none;
}

.farm-scene-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 280px;
  padding: 16px;
  font-size: 14px;
  color: #4e342e;
  background: #fff8e1;
}

.farm-scene-3d :deep(.farm-3d-label) {
  padding: 5px 12px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 800;
  color: #1b5e20;
  background: rgba(255, 255, 255, 0.92);
  border: 2px solid #6d4c41;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.18);
  pointer-events: none;
  white-space: nowrap;
}
</style>
