import React, { useState } from "react";
import imgen1 from "../../assets/mujerMano.png";
import baner from "../../assets/baner.jpg";
import basta from "../../assets/basta.jpg";
import doc1 from "../../assets/doc/CARTILLAS HOMBRES TAM OFICIO (2).pdf";
import { Recursos } from "../../style/compStyle";

const Carousel = () => {
  const [estado, setEstado] = useState(false);
  const resources = [
    { img: basta, pdf: doc1 },
    { img: baner, pdf: doc1 },
    { img: imgen1, pdf: doc1 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextResource = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % resources.length);
  };

  const prevResource = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? resources.length - 1 : prevIndex - 1
    );
  };

  const currentResource = resources[currentIndex];

  return (
    <Recursos>
      <div>
        <p>La violencia hacia las mujeres no es el camino </p>
        <article>
          {estado === false ? (
            <img src={currentResource.img} alt="Imagen" />
          ) : (
            <iframe title="PDF Viewer" src={currentResource.pdf} />
          )}
          <section>
            <button onClick={prevResource}>Anterior</button>
            <button className="estadoa" onClick={() => setEstado(!estado)}>
              {estado === true ? "ver portada" : "ver pdf"}
            </button>
            <button onClick={nextResource}>Siguiente</button>
          </section>
        </article>
      </div>
    </Recursos>
  );
};

export default Carousel;
