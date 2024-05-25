import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// Load a glTF resource
loader.load(
	// resource URL
	'./src/assets/models/Parrot.glb',
	// called when the resource is loaded
	function ( gltf ) {

		scene.add( gltf.scene );

		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object

	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);
// divDom.onClick{load}
async function load(params){
    const object=await xxx.load()
    return object
}
export default load()