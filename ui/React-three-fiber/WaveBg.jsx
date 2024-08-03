"use client";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Color } from "three";

const WaveBg = () => {
  const meshRef = useRef();

  // Animation function
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();
      const geometry = meshRef.current.geometry;

      // Update vertices positions based on a sine wave
      const positions = geometry.attributes.position;
      for (let i = 0; i < positions.count; i++) {
        const y = Math.sin(positions.getX(i) * 2.0 + time) * 0.1;
        positions.setY(i, y);
      }
      positions.needsUpdate = true; // Notify Three.js that vertices are updated
    }
  });

  return (
    <mesh ref={meshRef} scale={[1.5, 1.5, 1.5]}
    position={[0,-3.5,0]}
    rotation={[(Math.PI/180)*20,0,0]}>
      <boxGeometry args={[20, 20, 5, 50, 50]} />
      <meshStandardMaterial  roughness={0.5} 
      color="#068AF5"
      metalness={0.8} />
    </mesh>
  );
};
export default WaveBg;
