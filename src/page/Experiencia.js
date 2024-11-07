import React from "react";
import "./Experiencia.css";
import logoPrincipal from "../assets/logo-principal-trans.png";
import navegatel from "../assets/navegatel.png";
import unnamed from "../assets/unnamed.webp";

const Experiencia = () => {
  const experiencias = [
    {
      logo: logoPrincipal,
      empresa: "Gabres S.L.",
      duracion: "Enero 2020 - Diciembre 2021",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
    },
    {
      logo: navegatel,
      empresa: "Navegatel Grupo",
      duracion: "Marzo 2018 - Diciembre 2019",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
    },
    {
      logo: unnamed,
      empresa: "JD Cloud Solutions",
      duracion: "Junio 2016 - Febrero 2018",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
    },
  ];

  return (
    <div className="experiencia">
      <h1 className="experiencia-title">Mi <span>Experiencia</span></h1>
      <div className="experiencia-path">
        {experiencias.map((exp, index) => (
          <div className="experiencia-item" key={index}>
            <img src={exp.logo} alt={exp.empresa} className="experiencia-logo" />
            <div className="experiencia-info">
              <h3 className="empresa-nombre">{exp.empresa}</h3>
              <p className="empresa-duracion">{exp.duracion}</p>
              <p className="empresa-descripcion">{exp.descripcion}</p>
            </div>
          </div>
        ))}
        <svg className="experiencia-lineas">
          <path d="M 50,80 Q 200,150 150,250 T 300,400" className="linea" />
        </svg>
      </div>
    </div>
  );
};

export default Experiencia;
