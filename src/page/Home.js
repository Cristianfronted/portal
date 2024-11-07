import React, { useState, useEffect } from "react";
import "./Home.css";
import TelIcon from "../assets/tel.png";
import CvIcon from "../assets/cv.png";
import LinkedInIcon from "../assets/linkedin.png";
import EmailIcon from "../assets/email.png";

const Home = () => {
  const [displayedText, setDisplayedText] = useState(""); // Texto que se va mostrando
  const fullText = "Cristian Rodriguez"; // Texto completo que aparecerá

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval); // Detén el intervalo cuando termine
      }
    }, 300); // Tiempo entre cada letra

    return () => clearInterval(interval); // Limpia el intervalo si se desmonta el componente
  }, []);

  return (
    <div className="home">
      <div className="caja">
        <h1>
          ¡Hola! soy <span className="dynamic-text">{displayedText}</span>
        </h1>
        <h2>WEB DEVELOPER</h2>
        <hr></hr>
        <p>
          Soy Desarrollador Frontend con experiencia en la creación de aplicaciones web modernas y dinámicas. Domino tecnologías como HTML5, CSS3, JavaScript, React.js, Angular y herramientas como WordPress, Elementor y Bootstrap. Mi objetivo es ofrecer soluciones innovadoras, funcionales y de alta calidad, utilizando siempre las mejores prácticas del desarrollo web.
        </p>
        <div className="social-icons">
          <a href="tel:+34123456789">
            <img src={TelIcon} alt="Teléfono" className="social-icon" />
          </a>
          <a href="../assets/CV-2.0.pdf" download>
            <img src={CvIcon} alt="Descargar CV" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/tu-perfil-linkedin" target="_blank" rel="noreferrer">
            <img src={LinkedInIcon} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="mailto:cristian94.ia@gmail.com">
            <img src={EmailIcon} alt="Correo" className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
