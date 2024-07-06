"use client";
import { Card, CardBody, Col, Row } from "reactstrap";
import specialStyles from "./SpecialComponentStyles.module.css";
import guiderImage from "./guider.png";
import Image from "next/image";
import { useEffect, useState } from "react";

const guides = [
  "Welcome i will be your guide ",
  "This Portfolio is built with next js ",
  "There are also other tools involved",
  "Tools like firebase , react-toastify etc are also involved in this ",
  "Scroll down to see more ",
  "You can download cv by clicking download CV at bottom",
];

const Guider = () => {
  const [isVisible, setisVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(guides[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      let random = Math.floor(Math.random() * guides?.length);
      setCurrentMessage(guides[random]);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (window) {
      if (window?.scrollY > 100) {
        setisVisible(true);
      } else setisVisible(false);
      window?.addEventListener("scroll", () => {
        if (window?.scrollY > 30) {
          setisVisible(true);
        } else setisVisible(false);
      });
    }
  }, []);

  return (
    <div
      className={`${specialStyles?.guider}`}
      style={{ opacity: isVisible ? "1" : "0" }}
    >
      <div className="d-flex gap-1 align-items-center">
        <Image
          src={guiderImage}
          alt="guider-icon"
          className=" object-fit-contain"
        />

        <Card
          className="border-none "
          style={{ transition: "0.5s linear all", width: "200px" }}
        >
          <CardBody>
            <small className="f-6">{currentMessage}</small>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Guider;
