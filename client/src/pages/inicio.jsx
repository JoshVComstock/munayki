import React, { useState } from "react";
import { Iniciodiv } from "../style/compStyle";
import imgf from "../assets/img-mujer1.png";
import term from "../assets/icons/termometro.png";
import cam from "../assets/icons/camino.png";
import ayu from "../assets/icons/ayuda.png";
import leg from "../assets/icons/legal.png";
import tel from "../assets/icons/telefono.png";
import Filtros from "./InicioSecciones/filtros";
import Footer from "../components/Informativa/footer";
import { Link, useNavigate } from "react-router-dom";
const Inicio = () => {
  const navegate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    window.scrollTo({
      top: scrollPosition + window.innerHeight * 0.65,
      behavior: "smooth",
    });
  };

  const ingresar = (path) => {
    setScrollPosition(window.scrollY);
    navegate(`/${path}`);
    handleScroll();
  };

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
          <div id="mover" onClick={() => ingresar("appmovil")}>
            <img src={tel} alt="" />
            <p>Aplicación móvil</p>
          </div>
          <div onClick={() => ingresar("")}>
            <img src={term} />
            <p> Violentometro</p>
          </div>
          <div onClick={() => ingresar("rutadenuncias")}>
            <img src={cam} />
            <p> Ruta de Denuncias</p>
          </div>
          <div onClick={() => ingresar("slim")}>
            <img src={ayu} />
            <p>¿Comó ayuda Slim?</p>
          </div>
          <div onClick={() => ingresar("legal")}>
            <img src={leg} />
            <p> Ámbito legal </p>
          </div>
        </aside>
      </Iniciodiv>
      <Filtros />
      <Footer />
    </>
  );
};

export default Inicio;
