"use client";
import { Children, useEffect, useState } from "react";
import specialStyles from "./SpecialComponentStyles.module.css";

const CircularLayout = ({ children, containerClassName }) => {
  const [circleSize, setCircleSize] = useState(500); // Default diameter
  const [itemCount, setItemCount] = useState(0);
  const [childrenTobePlaced, setChildrenTobePlaced] = useState([]);
  const [childrenTobeCenter, setChildrenTobeCentered] = useState([]);

  useEffect(() => {
    const updateCircleSize = () => {
      const smallerDimension =
        window?.innerWidth < 768
          ? Math.min(window.innerWidth, window.innerHeight)
          : 500;
      const newSize = smallerDimension * 0.8; // Adjust size as needed (80% of the smaller dimension)
      if (newSize < 768) {
        setCircleSize(newSize);
      }
    };

    updateCircleSize(); // Initialize size

    window.addEventListener("resize", updateCircleSize);

    return () => {
      window.removeEventListener("resize", updateCircleSize);
    };
  }, []);

  useEffect(() => {
    if (children) {
      let centeredItems = Children.toArray(children)?.filter(
        (item) => item?.props?.centered
      );
      let childrenTobePlaced = Children.toArray(children)?.filter(
        (item) => !item?.props?.centered
      );
      setItemCount(Children.count(children) - centeredItems?.length);
      setChildrenTobePlaced(childrenTobePlaced);
      setChildrenTobeCentered(centeredItems);
    }
  }, [children]);

  const radius = circleSize / 2;

  return (
    <div
      className={`${specialStyles?.circle_layout} ${containerClassName}`}
      style={{ width: circleSize, height: circleSize }}
    >
      {childrenTobePlaced?.map((child, index) => {
        const angle = (360 / itemCount) * index; // Calculate angle for each item
        const positionX = radius + radius * Math.cos((angle * Math.PI) / 180); // X position formula
        const positionY = radius + radius * Math.sin((angle * Math.PI) / 180); // Y position formula

        return (
          <div
            className={!child?.props?.centered ? specialStyles?.item : ""}
            style={
              !child?.props?.centered
                ? {
                    zIndex: "2",
                    transform: `translate(-50%, -50%) translate(${positionX}px, ${positionY}px)`, // Position item
                  }
                : {}
            }
          >
            {child}
          </div>
        );
      })}
      {childrenTobeCenter?.map((child) => child)}
    </div>
  );
};

export default CircularLayout;
