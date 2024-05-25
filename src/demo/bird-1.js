import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three'

function setupModel(data) {
    const model = data.scene.children[0];
    const clip = data.animations[0];
    const mixer=new THREE.AnimationMixer(model);
    const action=mixer.clipAction(clip);
    action.play();
    model.tick=(delta)=>mixer.update(delta)
    return model; 
  }
const loader= new GLTFLoader();
//1.基于callback回调
//2.基于async await
// const parrotData= await loader.loadAsync('./src/assets/models/Parrot.glb');
// const flamingoData= await loader.loadAsync('./src/assets/models/Flamingo.glb');
// const storkData= await loader.loadAsync('./src/assets/models/Stork.glb');

const [parrotData, flamingoData, storkData] = await Promise.all([
    loader.loadAsync('./src/assets/models/Stork.glb'),
    loader.loadAsync('./src/assets/models/Flamingo.glb'),
    loader.loadAsync('./src/assets/models/Parrot.glb'),
  ])

// console.log('loadedData--->',loadedData,loadedData.scene.children[0]);
const parrot = setupModel(parrotData);
parrot.position.set(50, 29, 0);

const flamingo = setupModel(flamingoData);

const stork = setupModel(storkData);
stork.position.set(-166, 50, -60);


export default [stork,parrot,flamingo];