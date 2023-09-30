
import React from "react";
import { Iniciodiv } from "../style/compStyle";
import imgf from "../assets/img-mujer1.png";
import imgh from "../assets/img-hombre01.png";
import imgn from "../assets/img-niño.png";
import imgv from "../assets/violencia-sf.png";
import imgh0 from "../assets/hombre-sf.png";
import Filtros from "./InicioSecciones/filtros";
import Slider from "../components/Informativa/slider";
import { colorsSlider } from "../style/StyleGlobal";
import Violentimetro from "./InicioSecciones/violentimetro";

const Inicio = () => {
  const images = [
    imgf,
    imgv,
  ];

  return (
    <>
      <Iniciodiv>
        <p>MUNAYKI</p>
        <section>
          <h1>
            No +<br />
            <strong>Violencia.</strong>
          </h1>
          <div>
            <p>Plataforma de concientización contra la violencia</p>
            <button>Descargar App</button>
          </div>
        </section>

        <div>
          <Slider images={images} colors={colorsSlider} />
        </div>
      </Iniciodiv>
      <Filtros />
      <Violentimetro/>

    </>
  );
};

export default Inicio;