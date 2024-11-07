import React, { useState } from "react";
import "./Proyectos.css";

const Proyectos = () => {
  const projects = [
    {
      title: "Gym App",
      video: require("../assets/gym.mp4"),
      description:
        "Aplicación de gimnasio desarrollada con tecnologías modernas como React, CSS y JavaScript. El objetivo principal de esta aplicación es permitir a los usuarios gestionar sus rutinas y entrenamientos personalizados. Incluye funcionalidades como inicio de sesión, tablas de ejercicios dinámicas y una interfaz responsiva para dispositivos móviles.",
    },
    {
      title: "Peluquero App",
      video: require("../assets/peluquero.mp4"),
      description:
        "Plataforma creada para la gestión de citas en salones de peluquería. Utilizando PHP, HTML, CSS y bases de datos relacionales, esta aplicación permite a los usuarios agendar citas y a los administradores gestionar horarios y servicios. La interfaz está diseñada para ser intuitiva y eficiente, adaptándose a diferentes dispositivos.",
    },
    {
      title: "La Fariña App",
      video: require("../assets/farinia.mp4"),
      description:
        "Proyecto temático inspirado en la serie de televisión. Desarrollado con una combinación de tecnologías de backend y frontend modernas, este proyecto explora cómo integrar contenido multimedia, gestión de usuarios y una experiencia inmersiva. Ideal para aprender sobre integración de APIs y diseño avanzado.",
    },
    {
      title: "Mares",
      video: require("../assets/Mares de popa.mp4"),
      description:
        "Sitio web diseñado y desarrollado utilizando WordPress y Elementor, con una combinación de HTML y CSS para personalizar y optimizar cada detalle. Ofrece una interfaz profesional, intuitiva y moderna, adaptada para proporcionar una experiencia de usuario fluida y visualmente atractiva en cualquier dispositivo.",
    },
    {
      title: "Ten-cajas",
      video: require("../assets/Ten.mp4"),
      description:
        "Tienda en línea creada con WordPress, Elementor y WooCommerce, combinando HTML y CSS para lograr un diseño único y funcional. Esta plataforma ofrece una experiencia de compra optimizada, con un diseño responsivo que se adapta a cualquier dispositivo. Integra pasarelas de pago seguras y personalizaciones avanzadas para mejorar la gestión de productos, inventario",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <div className="carousel-container">
      <h1 className="proyectos-title">
        Mis <span className="pro">Proyectos</span>
      </h1>

      <div className="carousel-wrapper">
        <button className="nav-button left" onClick={handlePrev}>
          ❮
        </button>

        <div className="carousel-track" >
          {projects
            .slice(currentIndex, currentIndex + 3)
            .concat(
              projects.slice(0, (currentIndex + 3) % projects.length)
            )
            .slice(0, 3)
            .map((project, index) => (
              <div className="proyecto-card" key={index}>
                <video
                  className="proyecto-video"
                  controls
                  src={project.video}
                  type="video/mp4"
                ></video>
                <h2 className="proyecto-title">{project.title}</h2>
                <p className="proyecto-description">{project.description}</p>
              </div>
            ))}
        </div>

        <button className="nav-button right" onClick={handleNext}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default Proyectos;
