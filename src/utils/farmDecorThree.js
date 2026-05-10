/**
 * 农场装饰：Canvas 花瓣精灵 + 细分几何花草石菇（无需外链素材，可本地部署）
 */
import * as THREE from 'three'

function isBlockedSpot(x, z, petPens) {
  if (Math.abs(x + 2.15) < 6.6 && Math.abs(z + 0.65) < 6.6) return true
  if (Math.abs(x - 7.2) < 5.2 && Math.abs(z - 6.1) < 5.2) return true
  if (Math.abs(x - 7) < 6 && Math.abs(z + 5.9) < 6) return true
  if (Math.abs(x + 13.6) < 4 && Math.abs(z + 10.5) < 4) return true
  for (const key of Object.keys(petPens)) {
    const b = petPens[key]
    const pad = 0.35
    if (x >= b.minX - pad && x <= b.maxX + pad && z >= b.minZ - pad && z <= b.maxZ + pad) return true
  }
  return false
}

/** @param {{ light: string, dark: string, center: string }} scheme */
export function createFlowerSpriteTexture(scheme) {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 256
  const ctx = canvas.getContext('2d')
  if (!ctx) return null
  ctx.clearRect(0, 0, 256, 256)
  const cx = 128
  const cy = 128
  const petals = 8
  for (let i = 0; i < petals; i++) {
    ctx.save()
    ctx.translate(cx, cy)
    ctx.rotate((i / petals) * Math.PI * 2 + 0.08)
    const grd = ctx.createLinearGradient(0, 10, 0, -95)
    grd.addColorStop(0, scheme.light)
    grd.addColorStop(0.55, scheme.mid || scheme.light)
    grd.addColorStop(1, scheme.dark)
    ctx.fillStyle = grd
    ctx.beginPath()
    ctx.moveTo(0, 5)
    ctx.bezierCurveTo(42, -35, 48, -78, 0, -102)
    ctx.bezierCurveTo(-48, -78, -42, -35, 0, 5)
    ctx.closePath()
    ctx.fill()
    ctx.restore()
  }
  const cg = ctx.createRadialGradient(cx - 6, cy - 6, 4, cx, cy, 34)
  cg.addColorStop(0, scheme.centerLight || '#fff9c4')
  cg.addColorStop(0.55, scheme.center)
  cg.addColorStop(1, scheme.centerDark || scheme.dark)
  ctx.fillStyle = cg
  ctx.beginPath()
  ctx.arc(cx, cy, 30, 0, Math.PI * 2)
  ctx.fill()

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.needsUpdate = true
  return tex
}

function meshTulip(x, z, petalHex, stemH = 0.38) {
  const g = new THREE.Group()
  const stem = new THREE.Mesh(
    new THREE.CylinderGeometry(0.018, 0.026, stemH, 8),
    new THREE.MeshStandardMaterial({ color: 0x33691e, roughness: 0.82 })
  )
  stem.position.y = stemH / 2
  stem.castShadow = true
  g.add(stem)

  const leaf = new THREE.Mesh(
    new THREE.CircleGeometry(0.07, 8),
    new THREE.MeshStandardMaterial({ color: 0x558b2f, side: THREE.DoubleSide, roughness: 0.75 })
  )
  leaf.rotation.x = -Math.PI / 2
  leaf.rotation.z = 0.9
  leaf.position.set(0.06, stemH * 0.42, 0)
  g.add(leaf)

  const mat = new THREE.MeshStandardMaterial({
    color: petalHex,
    roughness: 0.28,
    metalness: 0.06
  })
  const cup = new THREE.Mesh(new THREE.SphereGeometry(0.11, 14, 10, 0, Math.PI * 2, 0, Math.PI / 2), mat)
  cup.scale.set(1.15, 1.35, 1.15)
  cup.position.y = stemH + 0.02
  cup.castShadow = true
  g.add(cup)

  g.position.set(x, 0, z)
  g.rotation.y = Math.random() * Math.PI * 2
  return g
}

function meshLavender(x, z) {
  const g = new THREE.Group()
  const stem = new THREE.Mesh(
    new THREE.CylinderGeometry(0.012, 0.018, 0.52, 6),
    new THREE.MeshStandardMaterial({ color: 0x558b2f, roughness: 0.88 })
  )
  stem.position.y = 0.26
  stem.castShadow = true
  g.add(stem)
  const budMat = new THREE.MeshStandardMaterial({ color: 0x7e57c2, roughness: 0.45 })
  for (let i = 0; i < 9; i++) {
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 6), budMat)
    const t = i / 9
    b.position.set((Math.random() - 0.5) * 0.04, 0.42 + t * 0.14, (Math.random() - 0.5) * 0.04)
    b.scale.set(0.85, 1.1, 0.85)
    b.castShadow = true
    g.add(b)
  }
  g.position.set(x, 0, z)
  g.rotation.y = Math.random() * Math.PI * 2
  return g
}

function meshSunflowerLite(x, z) {
  const g = new THREE.Group()
  const stem = new THREE.Mesh(
    new THREE.CylinderGeometry(0.024, 0.032, 0.55, 8),
    new THREE.MeshStandardMaterial({ color: 0x558b2f, roughness: 0.85 })
  )
  stem.position.y = 0.275
  stem.castShadow = true
  g.add(stem)

  const yellow = new THREE.MeshStandardMaterial({ color: 0xffd54f, roughness: 0.38 })
  for (let i = 0; i < 14; i++) {
    const pet = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.025, 0.34), yellow)
    const ang = (i / 14) * Math.PI * 2
    pet.position.set(Math.cos(ang) * 0.1, 0.56, Math.sin(ang) * 0.1)
    pet.rotation.order = 'YXZ'
    pet.rotation.y = ang + Math.PI / 2
    pet.rotation.x = 0.42
    pet.castShadow = true
    g.add(pet)
  }
  const disk = new THREE.Mesh(
    new THREE.CircleGeometry(0.09, 18),
    new THREE.MeshStandardMaterial({ color: 0x5d4037, roughness: 0.92 })
  )
  disk.rotation.x = -Math.PI / 2
  disk.position.y = 0.56
  g.add(disk)
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(0.03, 0.088, 24),
    new THREE.MeshStandardMaterial({ color: 0x3e2723, roughness: 0.95 })
  )
  ring.rotation.x = -Math.PI / 2
  ring.position.y = 0.561
  g.add(ring)

  g.position.set(x, 0, z)
  g.rotation.y = Math.random() * Math.PI * 2
  return g
}

function meshGrassTuft(x, z) {
  const g = new THREE.Group()
  const bladeMat = new THREE.MeshStandardMaterial({
    color: 0x558b2f,
    roughness: 0.78,
    side: THREE.DoubleSide
  })
  const n = 5 + Math.floor(Math.random() * 4)
  for (let i = 0; i < n; i++) {
    const blade = new THREE.Mesh(new THREE.PlaneGeometry(0.07, 0.28 + Math.random() * 0.12), bladeMat)
    const ang = (i / n) * Math.PI * 2 + Math.random() * 0.5
    blade.position.set(Math.cos(ang) * 0.05, 0.12, Math.sin(ang) * 0.05)
    blade.rotation.y = ang + Math.PI / 2
    blade.rotation.x = -0.35 - Math.random() * 0.25
    blade.castShadow = true
    g.add(blade)
  }
  g.position.set(x, 0, z)
  return g
}

function meshMushroom(x, z) {
  const g = new THREE.Group()
  const stem = new THREE.Mesh(
    new THREE.CylinderGeometry(0.06, 0.09, 0.22, 10),
    new THREE.MeshStandardMaterial({ color: 0xf5f5f5, roughness: 0.65 })
  )
  stem.position.y = 0.11
  stem.castShadow = true
  g.add(stem)
  const cap = new THREE.Mesh(
    new THREE.SphereGeometry(0.18, 14, 12, 0, Math.PI * 2, 0, Math.PI / 2),
    new THREE.MeshStandardMaterial({
      color: Math.random() > 0.45 ? 0xd32f2f : 0xffab91,
      roughness: 0.35,
      metalness: 0.05
    })
  )
  cap.scale.set(1.15, 0.65, 1.15)
  cap.position.y = 0.26
  cap.castShadow = true
  g.add(cap)
  const dots = Math.random() > 0.5 ? 5 : 0
  for (let i = 0; i < dots; i++) {
    const dot = new THREE.Mesh(
      new THREE.SphereGeometry(0.025, 8, 8),
      new THREE.MeshStandardMaterial({ color: 0xfffde7, roughness: 0.3 })
    )
    const a = (i / dots) * Math.PI * 2
    dot.position.set(Math.cos(a) * 0.08, 0.28 + Math.random() * 0.04, Math.sin(a) * 0.08)
    g.add(dot)
  }
  g.position.set(x, 0, z)
  g.rotation.y = Math.random() * Math.PI * 2
  return g
}

function meshRock(x, z, s = 1) {
  const geo = new THREE.IcosahedronGeometry(0.22 * s, 1)
  const pos = geo.attributes.position
  for (let i = 0; i < pos.count; i++) {
    const ix = i * 3
    pos.array[ix] *= 0.85 + Math.random() * 0.45
    pos.array[ix + 1] *= 0.55 + Math.random() * 0.35
    pos.array[ix + 2] *= 0.85 + Math.random() * 0.45
  }
  geo.computeVertexNormals()
  const mat = new THREE.MeshStandardMaterial({
    color: new THREE.Color().setHSL(0.08, 0.08, 0.45 + Math.random() * 0.12),
    roughness: 0.92,
    metalness: 0.02,
    flatShading: true
  })
  const m = new THREE.Mesh(geo, mat)
  m.position.set(x, 0.12 * s, z)
  m.rotation.set(Math.random() * 0.5, Math.random() * Math.PI, Math.random() * 0.4)
  m.castShadow = true
  m.receiveShadow = true
  return m
}

function meshHayBaleImproved(x, z) {
  const g = new THREE.Group()
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(1.05, 0.72, 0.88),
    new THREE.MeshStandardMaterial({ color: 0xc9b89a, roughness: 0.94 })
  )
  body.position.y = 0.36
  body.castShadow = true
  body.receiveShadow = true
  g.add(body)
  const ropeMat = new THREE.MeshStandardMaterial({ color: 0x5d4037, roughness: 0.85 })
  const r1 = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.035, 8, 20), ropeMat)
  r1.rotation.x = Math.PI / 2
  r1.position.set(0, 0.28, 0)
  g.add(r1)
  const r2 = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.03, 8, 20), ropeMat)
  r2.rotation.x = Math.PI / 2
  r2.position.set(0, 0.52, 0)
  g.add(r2)
  g.position.set(x, 0, z)
  g.rotation.y = Math.random() * Math.PI
  return g
}

function meshGardenStone(x, z) {
  const g = new THREE.Group()
  const base = new THREE.Mesh(
    new THREE.CylinderGeometry(0.55, 0.62, 0.14, 12),
    new THREE.MeshStandardMaterial({ color: 0x9e9e9e, roughness: 0.88 })
  )
  base.position.y = 0.07
  base.receiveShadow = true
  base.castShadow = true
  g.add(base)
  const rocks = 4 + Math.floor(Math.random() * 4)
  for (let i = 0; i < rocks; i++) {
    const sm = meshRock((Math.random() - 0.5) * 0.35, (Math.random() - 0.5) * 0.28, 0.45 + Math.random() * 0.35)
    sm.position.x += (Math.random() - 0.5) * 0.2
    sm.position.z += (Math.random() - 0.5) * 0.2
    sm.position.y += 0.06
    g.add(sm)
  }
  g.position.set(x, 0, z)
  return g
}

function randomSpot(petPens) {
  for (let attempt = 0; attempt < 90; attempt++) {
    const x = -17.5 + Math.random() * 35
    const z = -17.5 + Math.random() * 35
    if (!isBlockedSpot(x, z, petPens)) return [x, z]
  }
  return null
}

/**
 * @param {THREE.Scene} scene
 * @param {Record<string, {minX:number,maxX:number,minZ:number,maxZ:number}>} petPens
 * @returns {THREE.Group}
 */
export function buildFarmDecorations(scene, petPens) {
  const decorRoot = new THREE.Group()
  decorRoot.name = 'farmDecor'
  scene.add(decorRoot)

  const spriteSchemes = [
    { light: '#f8bbd9', mid: '#ec407a', dark: '#ad1457', center: '#fff176', centerLight: '#fffde7', centerDark: '#f57f17' },
    { light: '#e1bee7', mid: '#ba68c8', dark: '#6a1b9a', center: '#ffd54f', centerLight: '#fff9c4', centerDark: '#f57f17' },
    { light: '#ffe0b2', mid: '#ffb74d', dark: '#e65100', center: '#d84315', centerLight: '#ffccbc', centerDark: '#bf360c' },
    { light: '#c8e6c9', mid: '#81c784', dark: '#2e7d32', center: '#ffeb3b', centerLight: '#fffde7', centerDark: '#f9a825' },
    { light: '#bbdefb', mid: '#64b5f6', dark: '#1565c0', center: '#eceff1', centerLight: '#ffffff', centerDark: '#546e7a' }
  ]

  const textures = spriteSchemes.map(s => createFlowerSpriteTexture(s)).filter(Boolean)

  for (let i = 0; i < 8; i++) {
    const spot = randomSpot(petPens)
    if (!spot) continue
    const [x, z] = spot
    const tex = textures[i % textures.length]
    if (!tex) continue
    const mat = new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      depthWrite: false,
      alphaTest: 0.12,
      opacity: 0.94
    })
    const sprite = new THREE.Sprite(mat)
    const sc = 0.28 + Math.random() * 0.26
    sprite.scale.set(sc, sc, sc)
    sprite.position.set(x, 0.22 + Math.random() * 0.05, z)
    sprite.rotation.y = Math.random() * Math.PI * 2
    decorRoot.add(sprite)
  }

  const tulipCols = [0xe91e63, 0xff7043, 0xffca28, 0xab47bc, 0x42a5f5]
  for (let i = 0; i < 6; i++) {
    const spot = randomSpot(petPens)
    if (!spot) continue
    const [x, z] = spot
    const mod = i % 5
    const flower =
      mod <= 2
        ? meshTulip(x, z, tulipCols[mod])
        : mod === 3
          ? meshLavender(x, z)
          : meshSunflowerLite(x, z)
    decorRoot.add(flower)
  }

  for (let i = 0; i < 9; i++) {
    const spot = randomSpot(petPens)
    if (!spot) continue
    const [x, z] = spot
    decorRoot.add(meshGrassTuft(x, z))
  }

  for (let i = 0; i < 3; i++) {
    const spot = randomSpot(petPens)
    if (!spot) continue
    const [x, z] = spot
    decorRoot.add(meshMushroom(x, z))
  }

  for (let i = 0; i < 4; i++) {
    const spot = randomSpot(petPens)
    if (!spot) continue
    const [x, z] = spot
    decorRoot.add(meshRock(x, z, 0.75 + Math.random() * 1.1))
  }

  const hayPlaces = [
    [-13.5, -11],
    [11.5, -7]
  ]
  hayPlaces.forEach(([hx, hz]) => {
    if (isBlockedSpot(hx, hz, petPens)) return
    decorRoot.add(meshHayBaleImproved(hx, hz))
  })

  const stonePlaces = [[-14, 3]]
  stonePlaces.forEach(([sx, sz]) => {
    if (isBlockedSpot(sx, sz, petPens)) return
    decorRoot.add(meshGardenStone(sx, sz))
  })

  return decorRoot
}
