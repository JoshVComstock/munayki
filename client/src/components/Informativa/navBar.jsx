import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { SectionNav } from "../../style/navStyle";
import logo from "../../assets/munayki.png";
import logo1 from "../../assets/logoChocha.png";
import {
  faBars,
  faLongArrowAltRight,
  faThLarge,
  faThList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useScroll } from "../../context/ScrollContext";
import imgf from "../../assets/img-mujer1.png";
import term from"../../assets/icons/termometro.png";
import cam from "../../assets/icons/camino.png";
import ayu from "../../assets/icons/ayuda.png";
import leg from "../../assets/icons/legal.png";
import tel from "../../assets/icons/telefono.png";
const NavBar = () => {

  const navegate = useNavigate();
  const { scrollPosition, setScrollPosition, handleScroll } = useScroll();

  const ingresar = (path) => {
    setScrollPosition(window.scrollY);
    navegate(`/${path}`);
    handleScroll();
  };
  const [claseCSS, setClaseCSS] = useState('navVisible'); 

  const cambiarClase = () => {
    if (claseCSS === 'navVisible') {
      setClaseCSS('navNoVisible');
    } else {
      setClaseCSS('navVisible');
    }
  };
  return (
    <SectionNav>
          <button onClick={cambiarClase} >
          <FontAwesomeIcon icon={faBars} />
        </button>
      <nav>
        <div>
          <img src={logo} alt="logo" />
          <img src={logo1} alt="logo" />
        </div>
        <section>
          {/* <Link to="/">home</Link>
          <Link to="/ubicaciones">Ubicaciones</Link> */}
          <Link to="/login" className="login">
            Login
            <FontAwesomeIcon icon={faLongArrowAltRight} />
          </Link>
        </section>
      </nav>
      <aside className={claseCSS}>
        <button onClick={cambiarClase}>
          <FontAwesomeIcon icon={faBars}  />
        </button>
       <article>
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
       </article>
      </aside>
      <Outlet />
    </SectionNav>
  );
};

export default NavBar;
