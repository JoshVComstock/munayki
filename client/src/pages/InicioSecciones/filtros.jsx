import React from "react";
import { Filtro } from "../../style/compStyle";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link, Outlet } from "react-router-dom";

const Filtros = () => {
  return (
    <Filtro>
      <section>
        <article>
          <Link to="/"> Violentimetro</Link>
        </article>
        <article>
          <Link to="/mapas"> Lugares de ayuda</Link>
        </article>
        <article>
          <Link to="/quizz"> Quizz</Link>
        </article>
      </section>
      <article>
        <Outlet />
      </article>
    </Filtro>
  );
};

export default Filtros;
