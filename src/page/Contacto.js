import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contacto.css";
import ubicacionImg from "../assets/ubi.png";
import emailImg from "../assets/email.png";
import telefonoImg from "../assets/telefono.png";

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aykczqu", // Tu Service ID
        "template_0b5lbbo", // Tu Template ID
        form.current,
        "qwDmPgPHzhbSHw6Sj" // Tu Public Key
      )
      .then(
        (result) => {
          console.log("Mensaje enviado:", result.text);
          alert("¡Mensaje enviado correctamente!");
        },
        (error) => {
          console.log("Error al enviar:", error.text);
          alert("Ocurrió un error al enviar el mensaje.");
        }
      );
    e.target.reset(); // Limpia el formulario después de enviarlo
  };

  return (
    <div className="contacto">
      <h1 className="contacto-title">
        Ponte <span className="contacto-text">en contacto</span>
      </h1>
      <div className="contacto-container">
        <div className="contacto-info">
          <h2>
            <span className="contacto-text-2">Información</span> de Contacto
          </h2>
          <div className="info-item">
            <img src={ubicacionImg} alt="Ubicación" />
            <p>Ciudad: Alicante, España</p>
          </div>
          <div className="info-item">
            <img src={emailImg} alt="Email" />
            <p>Email: cristian94.ia@gmail.com</p>
          </div>
          <div className="info-item">
            <img src={telefonoImg} alt="Teléfono" />
            <p>Número: +34 123 456 789</p>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contacto-form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Ingresa tu nombre"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ingresa tu email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="5"
              placeholder="Escribe tu mensaje"
              required
            ></textarea>
          </div>
          <button type="submit" className="contacto-btn">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
