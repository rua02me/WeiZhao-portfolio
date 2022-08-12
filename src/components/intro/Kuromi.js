/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: jiayingc (https://sketchfab.com/jiayingc)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/kuromi-a9a4883cbc2a40e89722001aa6288ba8
title: Kuromi
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/kuromi.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_3.geometry} material={materials.material_10} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.material_9} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.material_8} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.material_7} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.material_7} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.material_6} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.material_5} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.material_4} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.material_3} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.material_1} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.material_0} />
      </group>
    </group>
  )
}

useGLTF.preload('/kuromi.gltf')