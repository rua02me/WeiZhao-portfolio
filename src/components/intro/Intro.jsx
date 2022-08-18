import './intro.scss'
import * as THREE from "three"
import { Canvas, useFrame} from '@react-three/fiber';
import Model from "./Guy.js"
import { Suspense } from 'react'
import { OrbitControls } from "@react-three/drei";
import Typewriter from 'typewriter-effect';

function Rig() {
  return useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, 1 + state.mouse.x / 4, 0.075)
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, 1.5 + state.mouse.y / 4, 0.075)
  })
}

export default function Intro() {

  return (
    <div className='intro' id='intro'>
      <div className='left'>
      <Canvas className="canvas">
        <OrbitControls enableZoom={true} autoRotate={true}/>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <group position={[0,-3,0]} scale={[0.65,0.65,0.65]}>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        </group>
        <Rig />
      </Canvas>
      </div>
      <div className='right'>
        <div className='wrapper'>
            <h2>Hi There...I am</h2>
            <h1>Weeei</h1>
            <h3>
              The best
              <Typewriter options={{ strings:["Eat partner", "Subscriber", "Garbage Creater"],autoStart:true,delay:75,loop:true}}/>            
            </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt='' />
        </a>
      </div>
    </div>
  );
}
