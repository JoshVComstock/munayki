import React from "react";
import { Filtro } from "../../style/compStyle";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link, Outlet } from "react-router-dom";

const Filtros = () => {
  // const lema = [
  //   {
  //     titulo: "YO TE VEO",
  //     descripcion:
  //       "Porque reconozco tu valía, la importancia de tu vida y las vivencias que tienes día a día .(EVIDENCIA).",
  //   },
  //   {
  //     titulo: "YO TE ESCUCHO",
  //     descripcion:
  //       "Porque estoy alerta a los sucesos de tu vida. ( Llamada de emergia).",
  //   },
  //   {
  //     titulo: "YO TE SIENTO",
  //     descripcion:
  //       "Porque comparto y comprendo a tu alma herida.( Contención emocional)",
  //   },
  // ];
  {
    /* {lema.map((registro, index) => (
        <div key={index}>
          <h2>{registro.titulo}</h2>
          <p>{registro.descripcion} <FontAwesomeIcon icon={faHeart} /></p>
   
        </div>
      ))} */
  }
  return (
    <Filtro>
      <div>
        <section>
          <Link to="/Violentimetro"> Violentimetro</Link>
          <Link to="/mapas"> Mapas</Link>
          <Link to="/Formulario"> Quizz</Link>
          <Link to="/app"> App</Link>
          <Link to="/Informate"> Informate</Link>
        </section>
      </div>
      <article>
        <Outlet />
      </article>
    </Filtro>
  );
};

export default Filtros;
