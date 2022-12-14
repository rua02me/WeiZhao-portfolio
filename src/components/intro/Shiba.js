/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Bernardo  Lucas (https://sketchfab.com/BernardoLucas)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/shiba-free-fire-b8fe9b3387d2486aa1291265438cf2f3
title: Shiba free fire
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/shiba.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Default_OBJ.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/shiba.gltf')
