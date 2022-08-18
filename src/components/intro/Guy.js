import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/guy.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    console.log(actions);
    actions.dance.play();
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Guy" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="guy" geometry={nodes.guy.geometry} material={materials['Material.001']} 
          material-color="lightyellow" skeleton={nodes.guy.skeleton} 

          />
        </group>
      </group>
    </group>
  )
}

