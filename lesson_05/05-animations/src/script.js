import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'green'})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

/*//time
let time = Date.now()*/

/*//clock
const clock = new THREE.Clock()*/

//gsap
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2})
gsap.to(mesh.position, { duration: 1, delay: 2, y: 2})
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0})
gsap.to(mesh.position, { duration: 1, delay: 3, y: 0})

//animations
const loop = () =>
{
    /*//time
    const currentTime = Date.now()
    const deltaTIme = currentTime - time
    time = currentTime */

    /*//clock
    const elapsedTime = clock.getElapsedTime()*/

    //update objects
    /*mesh.rotation.x += 0.001 * deltaTIme
    mesh.rotation.y += 0.002 * deltaTIme
    mesh.rotation.z += 0.003 * deltaTIme*/

    /*mesh.rotation.x = elapsedTime
    mesh.rotation.y = elapsedTime * Math.PI * 2
    mesh.rotation.z = elapsedTime * 3

    mesh.position.y = Math.sin(elapsedTime)
    mesh.position.x = -1 * Math.cos(elapsedTime)
    mesh.position.z = Math.sin(elapsedTime/2)

    //camera.lookAt(mesh.position)*/


    //render
    renderer.render(scene, camera)

    window.requestAnimationFrame(loop)
}

loop()