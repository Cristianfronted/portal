import React from "react";
import "./Diplomas.css";
import diploma2 from "../assets/ooo.jpg";
import diploma1 from "../assets/ooooo.jpg";
import diploma3 from "../assets/oo.jpg";
import diploma4 from "../assets/oooooooooooo.jpg";
import diploma5 from "../assets/ceac.jpg";

const Diplomas = () => {
  const diplomas = [diploma1 ,diploma2, diploma3, diploma4, diploma5];

  return (
    <div className="diplomas-container">
      <h1 className="diplomas-title">Formaciones</h1>
      <section className="diplomas-section">
        {diplomas.map((diploma, index) => (
          <img
            key={index}
            src={diploma}
            alt={`Diploma ${index + 1}`}
            className="diploma-image"
          />
        ))}
      </section>
    </div>
  );
};

export default Diplomas;
