"use client";

import { useScreenWidth } from "@/hooks/utilityHooks";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { AnimationAction, AnimationMixer, LoopPingPong } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Banner3DModal = ({ position }) => {
  const welcomeModel = useLoader(GLTFLoader, "./BannerModel.glb");
  welcomeModel.scene.scale.set(2.5, 2.5, 2.5);
  welcomeModel.scene.position.set(position[0], position[1], position[2]);
  welcomeModel.scene.rotation.set(0, -((Math.PI / 180) * 20), 0);

  const mixer = new AnimationMixer(welcomeModel.scene);
  const clip = welcomeModel.animations[0];
  const animation = new AnimationAction(mixer, clip);
  animation.loop=LoopPingPong
  animation.play();

  useFrame((state, delta) => {
    if (mixer) {
      mixer.update(delta);
    }
  });

  return <primitive object={welcomeModel.scene}></primitive>;
};

export default Banner3DModal;
