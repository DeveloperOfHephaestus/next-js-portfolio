"use client";

import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { DoubleSide, TextureLoader } from "three";

const Box = ({ position,texturePath }) => {
  const texture = useLoader(TextureLoader, texturePath);
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 0.1]} />
      <meshBasicMaterial map={texture} side={DoubleSide} />
    </mesh>
  );
};

export default Box;
