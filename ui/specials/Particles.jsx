"use client";
import { createRef, useEffect, useRef, useState } from "react";

const Particles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    let particlesArray = [];
    for (let i = 0; i <= 20; i++) {
      particlesArray?.push({
        left: `${Math.floor(Math.random() * 100)}%`,
        top: `${Math.floor(Math.random() * 100)}%`,
        scale: `(${Math.random()},${Math.random()})`,
      });
    }
    setParticles(particlesArray);
  }, []);

  useEffect(() => {
    let interval = setInterval(() => {
      let newArray = [];
      for (let i = 0; i <= 20; i++) {
        
        newArray?.push({
          left: `${Math.floor(Math.random() * 100)}%`,
          top: `${Math.floor(Math.random() * 100)}%`,
         
        });
      }
      setParticles(newArray);
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {particles?.map((item, key) => (
        <div
          key={key}
          className="particle"
          style={{ left: item?.left, top: item?.top }}
        >
          
        </div>
      ))}
    </>
  );
};

export default Particles;
