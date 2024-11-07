import React, { useState } from "react";
import "./Skills.css";
import elementor from "../assets/elementor.png";
import wordpress from "../assets/wordpress.png";
import javascript from "../assets/javascript.png";
import css from "../assets/cs.png";
import html from "../assets/html.png";
import react from "../assets/react.png";
import mysql from "../assets/mysql.png";
import php from "../assets/php.png";

const Skills = () => {
  const skills = [
    { name: "Elementor", img: elementor, desc: "Diseño profesional y personalización de páginas web." },
    { name: "WordPress", img: wordpress, desc: "Gestión de contenido web con soluciones rápidas." },
    { name: "JavaScript", img: javascript, desc: "Creación de interactividad y funcionalidad web." },
    { name: "CSS", img: css, desc: "Estilización avanzada y diseño responsivo." },
    { name: "HTML", img: html, desc: "Estructuración semántica para aplicaciones web." },
    { name: "React", img: react, desc: "Desarrollo de aplicaciones dinámicas y modernas." },
    { name: "MySQL", img: mysql, desc: "Gestión eficiente de bases de datos relacionales." },
    { name: "PHP", img: php, desc: "Desarrollo backend y creación de APIs robustas." },
  ];

  const [flippedCards, setFlippedCards] = useState(new Array(skills.length).fill(false));

  const handleFlip = (index) => {
    const updatedFlippedCards = [...flippedCards];
    updatedFlippedCards[index] = !updatedFlippedCards[index];
    setFlippedCards(updatedFlippedCards);
  };

  return (
    <div className="skills">
      <h1 className="skills-title">Mis <span className="skill">Poderes</span></h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`skill-card ${flippedCards[index] ? "flipped" : ""}`}
            onClick={() => handleFlip(index)}
          >
            <div className="skill-card-inner">
              {/* Lado frontal */}
              <div className="skill-card-front"></div>
              {/* Lado trasero */}
              <div className="skill-card-back">
                <img src={skill.img} alt={skill.name} />
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-description">{skill.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
