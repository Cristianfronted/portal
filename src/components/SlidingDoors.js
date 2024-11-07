import React, { useState } from "react";
import "./SlidingDoors.css";

const SlidingDoors = ({ onAnimationEnd }) => {
  const [isActive, setIsActive] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const handleClick = () => {
    setShowButton(false); // Oculta el botón
    setIsActive(true); // Inicia la animación de las puertas

    // Llama a la función cuando las puertas terminen de abrirse
    setTimeout(() => {
      onAnimationEnd();
    }, 2500); // Tiempo de la animación de las puertas
  };

  return (
    <div className={`sliding-doors ${isActive ? "active" : ""}`}>
      <div className="door door-left" />
      <div className="door door-right" />
      
      {/* Botón central */}
      {showButton && (
        <button className="access-button" onClick={handleClick}>
          Acceder
        </button>
      )}
    </div>
  );
};

export default SlidingDoors;
