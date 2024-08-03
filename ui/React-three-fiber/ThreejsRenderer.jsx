"use client";
import { Canvas } from "@react-three/fiber";

const ThreejsRenderer = ({ children }) => {
  return (
    <Canvas
     camera={{fov:50,position:[0,1,5]}}
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        zIndex:'5'
      }}
    >
      {children}
    </Canvas>
  );
};

export default ThreejsRenderer;
