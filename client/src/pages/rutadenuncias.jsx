import React from "react";
import Carousel from "../components/Informativa/carrosel";
import { Rutas } from "../data/rutas";
import { RutasStyle } from "../style/compStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
const Rutadenuncias = () => {
  return (
    <RutasStyle>
      <article>
        <p>
          Ruta Crítica para la Atención a Mujeres en Casos de Violencia Familiar
          o Doméstica <div><FontAwesomeIcon icon={faDownload} /></div>
        </p>
         <div>
         {Rutas.pasos.map((paso) => (
            <aside key={paso.numero}>
              <p>{`Paso ${paso.numero}: ${paso.descripcion}`}</p>
              <ul>
                {paso.problemas.map((problema, index) => (
                  <li key={index}>{problema}</li>
                ))}
              </ul>
            </aside>
          ))}   
         </div>
      </article>
      <Carousel />
    </RutasStyle>
  );
};

export default Rutadenuncias;
