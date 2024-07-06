"use client";
import { useState } from "react";
import {
  Button,
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";

const StandardSlider = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  //   const goToIndex = (newIndex) => {
  //     if (animating) return;
  //     setActiveIndex(newIndex);
  //   };  not needed yet
  return (
    <Carousel
      next={next}
      previous={previous}
      activeIndex={activeIndex}
      ride="carousel"
    >
      {items?.map((item, key) => (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={key}
        >
          {item}
        </CarouselItem>
      ))}
      <div
        className="d-flex justify-content-center mt-1"
        style={{ gap: "10px" }}
      >
        <Button
          className="standard-btn border-transparent"
          onClick={() => previous()}
        >
          Prev
        </Button>
        <Button
          className="standard-btn border-transparent"
          onClick={() => next()}
        >
          Next
        </Button>
      </div>
    </Carousel>
  );
};

export default StandardSlider;
