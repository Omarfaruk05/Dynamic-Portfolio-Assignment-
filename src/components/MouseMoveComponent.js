import React, { useState } from "react";
import Dialoag from "./Dialoag";

const MouseMoveComponent = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };
  return (
    <div onMouseMove={handleMouseMove}>
      <h3>move your mouse over me!</h3>
      <Dialoag mousePosition={mousePosition} />
    </div>
  );
};

export default MouseMoveComponent;
