import React from "react";
import { Filtro } from "../../style/compStyle";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Filtros = () => {
  const datos = [
    {
      titulo: "YO TE VEO",
      descripcion:
        "Porque reconozco tu valía, la importancia de tu vida y las vivencias que tienes día a día .(EVIDENCIA).",
    },
    {
      titulo: "YO TE ESCUCHO",
      descripcion:
        "Porque estoy alerta a los sucesos de tu vida. ( Llamada de emergia).",
    },
    {
      titulo: "YO TE SIENTO",
      descripcion:
        "Porque comparto y comprendo a tu alma herida.( Contención emocional)",
    },
  ];
  return (
    <Filtro>
      {datos.map((registro, index) => (
        <div key={index}>
          <h2>{registro.titulo}</h2>
          <p>{registro.descripcion} <FontAwesomeIcon icon={faHeart} /></p>
   
        </div>
      ))}
    </Filtro>
  );
};

export default Filtros;
