const vertices =new Float32Array([
    -10,-10, 10,//v0
     10,-10, 10,//v1
     10, 10, 10,//v2
    -10, 10, 10,//v3
]);

const sphere = new ThreeMFLoader.SphereGeametry(50)
const cube = new ThreeMFLoader.BoxGeometry(100,100,100,10,10,10)
console.log('sphere-->',sphere,)
console.log('cube-->',cube)

const geometry = new ThreeMFLoader.BufferGeometry()
//
geometry.setAttribute("position",cube.getAttribute('position'))

const material = new THREE.PointsMaterial({
    color:0xffffff,
    size:1,
    transparent:true,
})
const points = new THREE.Points(geometry,material)

export default points