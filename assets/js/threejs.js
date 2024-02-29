
import * as THREE from 'three';
    import { OrbitControls } from 'three/addons/controls/OrbitControls.js'; // Import OrbitControls
    import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'; // Import GLTFLoader
  
   
    const scene = new THREE.Scene();


      const sizes={
        width: window.innerWidth,
        height: window.innerHeight,
      }
      //create a new camera with positions and angles
      const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height );

scene.add(camera)



const textureLoader = new THREE.TextureLoader();
const backgroundTexture = textureLoader.load('./assets/img/bg.png', (texture) => {
  scene.background = texture;
}, undefined, (err) => {
  console.error('Error loading background texture', err);
});

//Keep the 3D heart on a global variable so we can access it later
let heart;





//Instantiate a loader for the .gltf file
const loader = new GLTFLoader();

//Load the file
loader.load(
  `assets/img/crystal_heart/scene.gltf`,
  function (gltf) {
    //If the file is loaded, add it to the scene
    heart = gltf.scene;
    scene.add(heart);
    animate();
  },

);

const boxGeometry = new THREE.BoxGeometry(0.9,0.9,0.9);
const boxMaterial =[
new THREE.MeshBasicMaterial({map : textureLoader.load('./assets/img/1yr.PNG')}),
new THREE.MeshBasicMaterial({map : textureLoader.load('./assets/img/2nyrs.PNG')}),
new THREE.MeshBasicMaterial({map : textureLoader.load('./assets/img/2yrs.PNG')}),
new THREE.MeshBasicMaterial({map : textureLoader.load('./assets/img/3yrs.PNG')}),
new THREE.MeshBasicMaterial({map : textureLoader.load('./assets/img/4yrs.PNG')}),
new THREE.MeshBasicMaterial({map : textureLoader.load('./assets/img/first.PNG')}),
];
const box =new THREE.Mesh(boxGeometry,boxMaterial);
scene.add(box);
box.position.set(0,-0.3,0);


//Instantiate a new renderer and set its size
const canvas =document.querySelector(".container3D");
const renderer = new THREE.WebGLRenderer({ canvas }); 
renderer.setSize(sizes.width , sizes.height );

//Set how far the camera will be from the 3D model

camera.position.z = 5 ;
//Add lights to the scene, so we can actually see the 3D model
const topLight = new THREE.DirectionalLight(0xffffff, 1,100); // (color, intensity)
topLight.position.set(0, 10, 100) //top-left-ish
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333,  1);
scene.add(ambientLight);

//This adds controls to the camera, so we can rotate / zoom it with the mouse

 const controls = new OrbitControls(camera, canvas);
 controls.enableDamping=true;
  controls.enableZoom=false;
  controls.autoRotate=true;

window.addEventListener('resize',()=>{

  sizes.width = innerWidth;
   sizes.height= innerHeight;
   
   camera.aspect =  sizes.width / sizes.height;
    camera.updateProjectionMatrix();
   renderer.setSize(sizes.width , sizes.height);
   
})
let clock = new THREE.Clock();

const loop =()=>{
   controls.update();
  renderer.render(scene, camera);
   requestAnimationFrame(loop);
  

}
loop()

function animate() {
  controls.update();
  requestAnimationFrame(animate);

  // heart beat effect
  const elapsedTime = clock.getElapsedTime();
  const scale = 0.5 * Math.sin(elapsedTime * Math.PI) + 1; 
  heart.scale.set(scale, 1, scale);

  renderer.render(scene, camera);
}