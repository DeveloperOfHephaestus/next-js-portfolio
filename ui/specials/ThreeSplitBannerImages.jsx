"use client";
import Image from "next/image";
import specialStyles from "./SpecialComponentStyles.module.css";
import { useState } from "react";

/**special component that shows three images decorated */
const ThreeSplitBannerImages = ({
  centerImage,
  leftImage,
  rightImage,
  animate,
  animations,
}) => {
  const [isAnimating, setAnimating] = useState({
    leftImage: false,
    midImage: false,
    rightImage: false,
  });

  return (
    <div
      className={`d-flex flex-row gap-1 align-items-center justify-content-center ${specialStyles?.three_spliter} `}
      onMouseOver={() => {
        if (animate)
          setAnimating((prev) => ({
            ...prev,
            leftImage: true,
            midImage: true,
            rightImage: true,
          }));
      }}
    >
      <Image
        onAnimationEnd={() => {
          setAnimating((prev) => ({ ...prev, leftImage: false }));
        }}
        src={leftImage}
        alt="banner-img-1"
        height={350}
        style={{
          animation:
            isAnimating?.leftImage && Array.isArray(animations)
              ? `${animations[0]} 1s linear 1`
              : "",
        }}
        className={`${specialStyles?.three_spliter_img_left}`}
      />
      <Image
        onAnimationEnd={() => {
          setAnimating((prev) => ({ ...prev, midImage: false }));
        }}
        src={centerImage}
        height={350}
        alt="banner-img-2"
        style={{
          animation:
            isAnimating?.midImage && Array.isArray(animations)
              ? `${animations[1]} 1s linear 1`
              : "",
        }}
        className={`${specialStyles?.three_spliter_img_mid}`}
      />
      <Image
        onAnimationEnd={() => {
          setAnimating((prev) => ({ ...prev, rightImage: false }));
        }}
        src={rightImage}
        height={350}
        style={{
          animation:
            isAnimating?.rightImage && Array.isArray(animations)
              ? `${animations[2]} 1s linear 1`
              : "",
        }}
        alt="banner-img-3"
        className={`${specialStyles?.three_spliter_img_right}`}
      />
    </div>
  );
};

export default ThreeSplitBannerImages;
