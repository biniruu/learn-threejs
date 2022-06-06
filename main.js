import * as THREE from './node_modules/three'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000)
camera.position.z = 5

const renderer = new THREE.WebGLRenderer({ antialias: true })
document.getElementById('app').appendChild(renderer.domElement)
renderer.setSize(innerWidth, innerHeight)
renderer.setPixelRatio(devicePixelRatio)

const geometry = new THREE.PlaneGeometry(5, 5, 10, 10)
const material = new THREE.MeshPhongMaterial({
  color: 0xff0000,
  side: THREE.DoubleSide,
  flatShading: THREE.FlatShading,
})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const { array } = mesh.geometry.attributes.position
for (let i = 0; i < array.length; i++) {
  const x = array[i]
  const y = array[i + 1]
  const z = array[i + 2]
  array[i + 2] = z + Math.random()
}

const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(0, 0, 1)
scene.add(light)

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}
animate()
