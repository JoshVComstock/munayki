import React from "react";
import { Iniciodiv } from "../style/compStyle";
import imgf from "../assets/img-mujer1.png";
import term from "../assets/icons/termometro.png";
import cam from "../assets/icons/camino.png";
import ayu from "../assets/icons/ayuda.png";
import leg from "../assets/icons/legal.png";
import tel from "../assets/icons/telefono.png";
import Filtros from "./InicioSecciones/filtros";
const Inicio = () => {
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
        <article>
          <img src={imgf} />
        </article>
        <aside>
          <div>
            <img src={tel} alt="" />
            <p> Aplicación móvil </p>
          </div>
          <div>
            <img src={term} />
            <p> Violentometro</p>
          </div>
          <div>
            <img src={cam} />
            <p> Ruta de Denuncias</p>
          </div>
          <div>
            <img src={ayu} />
            <p>¿Comó ayuda Slim?</p>
          </div>
          <div>
            <img src={leg} />
            <p> Ámbito legal </p>
          </div>
        </aside>
      </Iniciodiv>
      <Filtros />
    </>
  );
};

export default Inicio;
