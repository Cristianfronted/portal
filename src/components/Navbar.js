import React, { useState } from "react";
import BotonImg from "../assets/react94.png"; // Imagen del botón para el perfil
import CvImage from "../assets/cv-foto.png"; // Imagen del CV
import "./Navbar.css";

const Navbar = ({ onSectionChange }) => {
  const [active, setActive] = useState("inicio");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controla el despliegue del menú
  const [isModalOpen, setIsModalOpen] = useState(false); // Controla el modal para el CV

  const handleButtonClick = (section) => {
    setActive(section); // Cambia la sección activa localmente
    onSectionChange(section); // Notifica al componente principal
    setIsMenuOpen(false); // Cierra el menú al seleccionar una sección
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Cierra el modal del CV
  };

  return (
    <div className="navbar">
      {/* Botón circular para desplegar el menú */}
      <div
        className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </div>

      {/* Opciones del menú */}
      <ul className={`nav-buttons ${isMenuOpen ? "visible" : ""}`}>
        <li>
          <div
            className="custom-button"
            style={{
              backgroundImage: `url(${BotonImg})`,
            }}
            onClick={() => setIsModalOpen(true)} // Abre el modal del CV al hacer clic
          ></div>
        </li>
        <li
          className={active === "inicio" ? "active" : ""}
          onClick={() => handleButtonClick("inicio")}
        >
          🏠 
        </li>
        <li
          className={active === "proyectos" ? "active" : ""}
          onClick={() => handleButtonClick("proyectos")}
        >
          📁 
        </li>
        <li
          className={active === "skills" ? "active" : ""}
          onClick={() => handleButtonClick("skills")}
        >
          💡 
        </li>
        <li
          className={active === "experiencia" ? "active" : ""}
          onClick={() => handleButtonClick("experiencia")}
        >
          💼 
        </li>
        <li
          className={active === "contacto" ? "active" : ""}
          onClick={() => handleButtonClick("contacto")}
        >
          📩 
        </li>
        <li
          className={active === "diplomas" ? "active" : ""}
          onClick={() => handleButtonClick("diplomas")}
        >
          🎓 
        </li>
      </ul>

      {/* Modal del CV */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={handleModalClose}>
              Cerrar
            </button>
            <img
              src={CvImage}
              alt="CV de Cristian Rodríguez"
              className="modal-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
