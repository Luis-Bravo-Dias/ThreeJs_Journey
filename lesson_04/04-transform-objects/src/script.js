import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: false })
const mesh = new THREE.Mesh(geometry, material)

//position
/*mesh.position.x = 0.7
mesh.position.y = -0.6
mesh.position.z = 1*/

//set(x, y, z)
mesh.position.set(0.7, -0.6, 1)

scene.add(mesh)

//axes helper
// x-red y-green z-blue
const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)

//scale
/*mesh.scale.x = 2
mesh.scale.y = 0.5
mesh.scale.z = 0.5*/

//set(x, y, z)
mesh.scale.set(2, 0.5, 0.5)

//Rotation
//for half rotation Math.PI
// first y, then x
mesh.rotation.reorder('YXZ');
mesh.rotation.x = 0.5
mesh.rotation.y = 0.5



/**
 * Sizes
*/
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
*/
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 6
scene.add(camera)

//look at
camera.lookAt(mesh.position)

//group
const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: "green"})
)

group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: "blue"})
)

cube2.position.x = -2

group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: "yellow"})
)

cube3.position.x = 2

group.add(cube3)

group.rotation.z = Math.PI / 2

console.log("lenght of the object to the center: " + mesh.position.length())

console.log("distance of the object to the camera: " + mesh.position.distanceTo(camera.position))

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)