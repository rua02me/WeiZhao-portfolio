import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/test.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Empty" rotation={[0, -0.91, 0]} scale={2.29} />
        <group name="Empty001" />
        <mesh
          name="Circle"
          castShadow
          receiveShadow
          geometry={nodes.Circle.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          name="Roundcube"
          castShadow
          receiveShadow
          geometry={nodes.Roundcube.geometry}
          material={materials["Material.002"]}
          position={[0, 0.73, 0]}
        />
        <mesh
          name="Roundcube001"
          castShadow
          receiveShadow
          geometry={nodes.Roundcube001.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          name="Cylinder"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials["Material.004"]}
          position={[0.16, 1.59, -1.61]}
          rotation={[0, 0.64, 0]}
          scale={0.98}
        >
          <mesh
            name="Plane"
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={materials["Material.005"]}
            position={[0.03, 5, -1.31]}
            rotation={[0, -0.83, 0.44]}
            scale={0.75}
          >
            <mesh
              name="Plane001"
              castShadow
              receiveShadow
              geometry={nodes.Plane001.geometry}
              material={materials["Material.005"]}
              rotation={[0, -Math.PI / 3, 0]}
            />
            <mesh
              name="Plane002_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane002_1.geometry}
              material={materials["Material.005"]}
              rotation={[3.14, -Math.PI / 3, 3.14]}
            />
            <mesh
              name="Plane003"
              castShadow
              receiveShadow
              geometry={nodes.Plane003.geometry}
              material={materials["Material.005"]}
              rotation={[-Math.PI, 0, -Math.PI]}
            />
            <mesh
              name="Plane004"
              castShadow
              receiveShadow
              geometry={nodes.Plane004.geometry}
              material={materials["Material.005"]}
              rotation={[-Math.PI, Math.PI / 3, -Math.PI]}
            />
            <mesh
              name="Plane005"
              castShadow
              receiveShadow
              geometry={nodes.Plane005.geometry}
              material={materials["Material.005"]}
              rotation={[0, Math.PI / 3, 0]}
            />
            <mesh
              name="Plane006"
              castShadow
              receiveShadow
              geometry={nodes.Plane006.geometry}
              material={materials["Material.005"]}
              rotation={[0.36, -0.5, 0.18]}
              scale={0.74}
            />
            <mesh
              name="Plane007"
              castShadow
              receiveShadow
              geometry={nodes.Plane007.geometry}
              material={materials["Material.005"]}
              rotation={[2.78, -0.5, 2.96]}
              scale={0.74}
            />
            <mesh
              name="Plane008"
              castShadow
              receiveShadow
              geometry={nodes.Plane008.geometry}
              material={materials["Material.005"]}
              rotation={[Math.PI / 2, 1.25, -Math.PI / 2]}
              scale={0.74}
            />
          </mesh>
        </mesh>
        <mesh
          name="Cylinder001"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["Material.004"]}
          position={[0.88, 1.59, -0.79]}
          rotation={[0, -0.9, 0]}
          scale={0.89}
        >
          <mesh
            name="Plane009"
            castShadow
            receiveShadow
            geometry={nodes.Plane009.geometry}
            material={materials["Material.005"]}
            position={[0.32, 5.07, 0.08]}
            rotation={[0, 0.95, 0.12]}
            scale={0.54}
          >
            <mesh
              name="Plane010"
              castShadow
              receiveShadow
              geometry={nodes.Plane010.geometry}
              material={materials["Material.005"]}
              rotation={[0, -Math.PI / 3, 0]}
            />
            <mesh
              name="Plane011"
              castShadow
              receiveShadow
              geometry={nodes.Plane011.geometry}
              material={materials["Material.005"]}
              rotation={[Math.PI, -Math.PI / 3, Math.PI]}
            />
            <mesh
              name="Plane012"
              castShadow
              receiveShadow
              geometry={nodes.Plane012.geometry}
              material={materials["Material.005"]}
              rotation={[-Math.PI, 0, -Math.PI]}
            />
            <mesh
              name="Plane013"
              castShadow
              receiveShadow
              geometry={nodes.Plane013.geometry}
              material={materials["Material.005"]}
              rotation={[-Math.PI, Math.PI / 3, -Math.PI]}
            />
            <mesh
              name="Plane014"
              castShadow
              receiveShadow
              geometry={nodes.Plane014.geometry}
              material={materials["Material.005"]}
              rotation={[0, Math.PI / 3, 0]}
            />
            <mesh
              name="Plane015"
              castShadow
              receiveShadow
              geometry={nodes.Plane015.geometry}
              material={materials["Material.005"]}
              rotation={[0.36, -0.5, 0.18]}
              scale={0.74}
            />
            <mesh
              name="Plane016"
              castShadow
              receiveShadow
              geometry={nodes.Plane016.geometry}
              material={materials["Material.005"]}
              rotation={[2.78, -0.5, 2.96]}
              scale={0.74}
            />
            <mesh
              name="Plane017"
              castShadow
              receiveShadow
              geometry={nodes.Plane017.geometry}
              material={materials["Material.005"]}
              rotation={[Math.PI / 2, 1.25, -Math.PI / 2]}
              scale={0.74}
            />
          </mesh>
        </mesh>
        <group
          name="Vert"
          position={[-0.5, 1.64, 1.06]}
          rotation={[0, -0.42, 0]}
        >
          <mesh
            name="Vert_1"
            castShadow
            receiveShadow
            geometry={nodes.Vert_1.geometry}
            material={materials["Material.006"]}
          />
          <mesh
            name="Vert_2"
            castShadow
            receiveShadow
            geometry={nodes.Vert_2.geometry}
            material={materials["Material.007"]}
          />
          <mesh
            name="Vert001"
            castShadow
            receiveShadow
            geometry={nodes.Vert001.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            name="Vert002"
            castShadow
            receiveShadow
            geometry={nodes.Vert002.geometry}
            material={materials["Material.004"]}
          />
        </group>
        <mesh
          name="Plane018"
          castShadow
          receiveShadow
          geometry={nodes.Plane018.geometry}
          material={materials.Bg}
          scale={55.91}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/test.gltf");