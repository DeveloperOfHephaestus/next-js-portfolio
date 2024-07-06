"use client";
import { useEffect, useState } from "react";
import specialStyles from "./SpecialComponentStyles.module.css";
import { IoArrowBack } from "react-icons/io5";
import { Button } from "reactstrap";

/**A special component for app based landing pages . Can be used to mimic some basic app screens  */
const MobileAppSimulator = ({
  activeScreen,
  flowAt,
  setFlowAt,
  onBackClick,
  screenShiftAnimation,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
  }, [flowAt]);

  return (
    <div className={specialStyles?.mobile_app_simulator}>
      <div
        className={specialStyles?.mobile_app_simulator_app_content}
        onAnimationEnd={() => setIsAnimating(false)}
      >
          <Button
          onClick={() => onBackClick()}
          className="bg-transparent border-transparent full-width text-start text-white"
        >
          <IoArrowBack size={20}/>
        </Button>
        <div
          onAnimationEnd={() => setIsAnimating(false)}
          style={{
            animation: isAnimating
              ? `${screenShiftAnimation} 0.5s linear 1`
              : "",
          }}
        >
          {activeScreen}
        </div>
      
      </div>
    </div>
  );
};

export default MobileAppSimulator;
