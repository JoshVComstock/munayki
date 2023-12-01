import React, { useEffect, useState } from "react";
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
import { useScroll } from "../context/ScrollContext";
import {
  faBars,
  faLongArrowAltRight,
  faThLarge,
  faThList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Inicio = () => {
  const navegate = useNavigate();
  const { scrollPosition, setScrollPosition, handleScroll } = useScroll();

  const ingresar = (path) => {
    setScrollPosition(window.scrollY);
    navegate(`/${path}`);
    handleScroll();
  };
  const [claseCSS, setClaseCSS] = useState('clase-inicial'); 

  const cambiarClase = () => {
    if (claseCSS === 'clase-inicial') {
      setClaseCSS('clase-alternativa');
    } else {
      setClaseCSS('clase-inicial');
    }
  };
  return (
    <>
      <Iniciodiv>
        <p>MUNAYKI</p>
        <section>
          <h1>
            No <strong>+</strong><br />
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
        <aside className={claseCSS} >

        <button><FontAwesomeIcon icon={faBars} onClick={cambiarClase}/></button>
          <div id="mover" onClick={() => ingresar("appmovil")}>
            <img src={tel} alt="" />
            <p>Aplicación móvil</p>
          </div>
          <div onClick={() => ingresar("")}>
            <img src={term} />
            <p> Violentómetro</p>
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
