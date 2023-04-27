/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { animated, useSpring } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { wawaterials } from "../../utils/wawaterials";

export default function Burger(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./models/burger/model.gltf");

  const { bunBottomPos, bunTopPos, cheesePos, saladPos, tomatoPos, pattyPos } =
    useSpring({
      from: {
        bunBottomPos: [0, 0, 0],
        bunTopPos: [0, 0.17, 0],
        cheesePos: [0, 0.09, 0],
        saladPos: [0, 0.04, 0],
        tomatoPos: [0, 0.14, 0],
        pattyPos: [0, 0.07, 0],
      },
      to: [
        {
          bunTopPos: [0, 0.24, 0],
          bunBottomPos: [0, -0.07, 0],
        },
        {
          tomatoPos: [0.25, 0.08, 0.25],
          cheesePos: [0.25, 0.08, -0.25],
          pattyPos: [-0.25, 0.08, 0.25],
          saladPos: [-0.25, 0.08, -0.25],
        },
        {
          bunTopPos: [0, 0.17, 0],
          tomatoPos: [0, 0.14, 0],
          cheesePos: [0, 0.09, 0],
          pattyPos: [0, 0.07, 0],
          saladPos: [0, 0.04, 0],
          bunBottomPos: [0, 0, 0],
        },
      ],
      config: {
        mass: 1,
        tension: 800,
        friction: 20,
      },
      loop: true,
    });

  return (
    <group ref={group} {...props} dispose={null}>
      <animated.mesh
        position={bunBottomPos}
        geometry={nodes.bunBottom.geometry}
      >
        <meshStandardMaterial {...wawaterials.brown} />
      </animated.mesh>
      <animated.mesh geometry={nodes.bunTop.geometry} position={bunTopPos}>
        <meshStandardMaterial {...wawaterials.brown} />
      </animated.mesh>
      <animated.mesh
        geometry={nodes.cheese.geometry}
        position={cheesePos}
        scale={[2.79, 1, 1.43]}
      >
        <meshStandardMaterial {...wawaterials.yellow} />
      </animated.mesh>
      <animated.mesh
        geometry={nodes.salad.geometry}
        position={saladPos}
        scale={[0.92, 0.75, 0.92]}
      >
        <meshStandardMaterial {...wawaterials.green} />
      </animated.mesh>
      <animated.group position={tomatoPos} scale={[1.56, 0.7, 1.56]}>
        <mesh geometry={nodes.Mesh_tomato.geometry}>
          <meshStandardMaterial {...wawaterials.red} />
        </mesh>
        <mesh geometry={nodes.Mesh_tomato_1.geometry}>
          <meshStandardMaterial {...wawaterials.red} />
        </mesh>
      </animated.group>

      <animated.mesh
        geometry={nodes.patty.geometry}
        position={pattyPos}
        scale={[1, 1.14, 1]}
      >
        <meshStandardMaterial {...wawaterials.brownDark} />
      </animated.mesh>
    </group>
  );
}

useGLTF.preload("./models/burger/model.gltf");
