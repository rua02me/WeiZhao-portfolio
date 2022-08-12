import './intro.scss'
import { Canvas } from '@react-three/fiber';
import Model from "./Kuromi"
import { Suspense } from 'react'
import { OrbitControls } from "@react-three/drei";
// import {init} from 'ityped'
// import { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';


export default function Intro() {

  return (
    <div className='intro' id='intro'>
      <div className='left'>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
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
