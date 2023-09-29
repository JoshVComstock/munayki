import React from "react";
import { Iniciodiv } from "../style/compStyle";
import imgf from "../assets/img-mujer1.png";
import imgh from "../assets/img-hombre01.png";
import imgv from "../assets/violencia-sf.png";

import img0 from "../assets/adulto-mayor.png";
import img1 from "../assets/adultomayorMujer-transformed.png";
import img2 from "../assets/hombre-boca-transformed.png";
import img3 from "../assets/hombre-mano-transformed.png";
import img4 from "../assets/mujerMano.png";
import Filtros from "./InicioSecciones/filtros";
import Slider from "../components/Informativa/slider";
import { colorsSlider } from "../style/StyleGlobal";
import Violentometro from "./InicioSecciones/violentometro";

const Inicio = () => {
  const images = [imgf, img2,imgh, imgv, img0, img1, img3, img4];
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
      <Violentometro />

    </>
  );
};

export default Inicio;
