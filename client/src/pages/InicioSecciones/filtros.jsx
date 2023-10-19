import React from "react";
import { Filtro } from "../../style/compStyle";
import { Link, Outlet } from "react-router-dom";
import { useScroll } from "../../context/ScrollContext";

const Filtros = () => {
  const { scrollPosition, setScrollPosition, handleScroll } = useScroll();

  const mover = () => {
    setScrollPosition(window.scrollY);
    handleScroll();
  };
  return (
    <Filtro>
      <section>
        <article>
          <Link to="/" onClick={mover}>
            Violentimetro
          </Link>
        </article>
        <article>
          <Link to="/mapas" onClick={mover}>
            Lugares de ayuda
          </Link>
        </article>
        <article>
          <Link to="/quizz" onClick={mover}>
            Quizz
          </Link>
        </article>
        {/* <article>
          <Link to="/rutas" onClick={mover}>
          Ruta critica MUJERES
          </Link>
        </article> */}
      </section>
      <article>
        <Outlet />
      </article>
    </Filtro>
  );
};

export default Filtros;
