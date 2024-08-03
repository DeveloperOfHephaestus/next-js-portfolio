"use client";

import { useScreenWidth } from "@/hooks/utilityHooks";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

const Group = ({ children, position, smallerDevicePosition }) => {
  const groupRef = useRef();
  const [currentPosition, setCurrentPosition] = useState(position);
  const { screenWidth } = useScreenWidth(576);

  useEffect(() => {
    if (screenWidth < 576) {
      setCurrentPosition(smallerDevicePosition);
    } else setCurrentPosition(position);
  }, [screenWidth]);

  useFrame(() => {
    if (groupRef?.current) {
      groupRef.current.rotation.y += 0.02;
    }
  });
  return (
    <group position={currentPosition} ref={groupRef}>
      {children}
    </group>
  );
};

export default Group;
