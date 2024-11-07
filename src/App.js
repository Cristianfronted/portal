import React, { useState } from "react";
import SlidingDoors from "./components/SlidingDoors";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Proyectos from "./page/Proyectos";
import Skills from "./page/Skills";
import Experiencia from "./page/Experiencia";
import Contacto from "./page/Contacto";
import Diplomas from "./page/Diplomas";

const App = () => {
    const [currentSection, setCurrentSection] = useState("inicio");
    const [isDoorsOpen, setIsDoorsOpen] = useState(false);

    const handleDoorsAnimationEnd = () => {
        setIsDoorsOpen(true); // Abre las puertas y muestra el contenido
    };

    const renderSection = () => {
        switch (currentSection) {
            case "inicio":
                return <Home />;
            case "proyectos":
                return <Proyectos />;
            case "skills":
                return <Skills />;
            case "experiencia":
                return <Experiencia />;
            case "contacto":
                return <Contacto />;
            case "diplomas":
                return <Diplomas />;
            default:
                return <Home />;
        }
    };

    return (
        <div className="app">
            {!isDoorsOpen ? (
                <SlidingDoors onAnimationEnd={handleDoorsAnimationEnd} />
            ) : (
                <>
                    <Navbar onSectionChange={setCurrentSection} />
                    {renderSection()}
                </>
            )}
        </div>
    );
};

export default App;
