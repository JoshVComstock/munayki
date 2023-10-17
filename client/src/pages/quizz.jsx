import React, { useState } from "react";
import { preguntas } from "../data/quizz";
import { styled } from "styled-components";
import { FlexComun, colors } from "../style/StyleGlobal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowLeft,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Quizz() {
  const [respuestas, setRespuestas] = useState({});
  const [puntuacionTotal, setPuntuacionTotal] = useState(0);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [validacion, setValidacion] = useState("");

  const handleRespuesta = (numero, respuesta, puntuacion) => {
    setRespuestas({
      ...respuestas,
      [numero]: respuesta,
    });
    if (respuesta === "si") {
      setPuntuacionTotal(puntuacionTotal + puntuacion);
    } else if (respuesta === "no") {
      setPuntuacionTotal(puntuacionTotal + 0);
    }
    setValidacion("");
  };
  const avanzarPregunta = (avanzar) => {
    if (respuestas[preguntas.preguntas[preguntaActual].numero]) {
      if (avanzar) {
        if (preguntaActual < preguntas.preguntas.length - 1) {
          setPreguntaActual(preguntaActual + 1);
        }
      } else {
        if (preguntaActual > 0) {
          setPreguntaActual(preguntaActual - 1);
        }
      }
    } else {
      setValidacion("Debes seleccionar una respuesta antes de avanzar.");
    }
  };
  

  const mostrarMensaje = () => {
    console.log("Puntuación Total:", puntuacionTotal);

    if (puntuacionTotal >= 5 && puntuacionTotal <= 20) {
      const riesgo = preguntas.preguntas.find(
        (pregunta) => pregunta.puntuacion === 1
      ).riesgo;
      console.log("Mensaje de riesgo:", riesgo);
    } else {
      console.log("No hay riesgo identificado.");
    }
  };

  return (
    <QuizzContent>
   
        {preguntas.preguntas[preguntaActual] && (
          <div key={preguntas.preguntas[preguntaActual].numero}>
            <article>
              <h2>
                ¿Cuán Tóxica es tu relación de pareja?
                <label>{preguntas.preguntas[preguntaActual].numero}</label>
              </h2>
              <p>{preguntas.preguntas[preguntaActual].pregunta}</p>
            </article>
            <section>
              <h2>Responde</h2>

              <div>
                <label>
                  <input
                    type="radio"
                    value="si"
                    name={`pregunta_${preguntas.preguntas[preguntaActual].numero}`}
                    onChange={() =>
                      handleRespuesta(
                        preguntas.preguntas[preguntaActual].numero,
                        "si",
                        preguntas.preguntas[preguntaActual].puntuacion
                      )
                    }
                    checked={
                      respuestas[preguntas.preguntas[preguntaActual].numero] ===
                      "si"
                    }
                  />
                  Sí
                </label>
                <label>
                  <input
                    type="radio"
                    value="no"
                    name={`pregunta_${preguntas.preguntas[preguntaActual].numero}`}
                    onChange={() =>
                      handleRespuesta(
                        preguntas.preguntas[preguntaActual].numero,
                        "no",
                        preguntas.preguntas[preguntaActual].puntuacion
                      )
                    }
                    checked={
                      respuestas[preguntas.preguntas[preguntaActual].numero] ===
                      "no"
                    }
                  />
                  No
                </label>
              </div>

              <div>
                <button onClick={() => avanzarPregunta(false)}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                {preguntaActual < preguntas.preguntas.length - 1 ? (
                  <button onClick={() => avanzarPregunta(true)}>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                ) : (
                  <button onClick={mostrarMensaje}>Mostrar mensaje</button>
                )}
              </div>
              {validacion && <p className="error-message">{validacion}</p>}
            </section>
          </div>
        )}
   
    </QuizzContent>
  );
}

export default Quizz;
const QuizzContent = styled.section`
  height: 60vh;
  ${FlexComun}
  flex-direction:column;
  width: 70vw;
  .error-message {
    padding-top: 3em;
    font-size: 0.7em;
    color: red;
  }

    & > div {
        width: 100%;
      ${FlexComun}
      & > article {
        width: 50%;
        ${FlexComun}
        flex-direction:column;
        height: 50vh;
        justify-content: start;

        & > h2 {
          text-align: center;
          font-size: 16px;
          font-weight: 600;
          background-color: ${colors.CC};
          color: ${colors.light};
          width: 100%;
          padding: 1em;
          position: relative;
          box-shadow: 0 5px 10px #000;
          border-radius: 0.5em 0.5em 0 0;
          & label {
            background-color: ${colors.BB};
            border-radius: 50%;
            width: 30px;
            height: 30px;
            content: "";
            position: absolute;
            bottom: -25%;
            color: #fff;
            ${FlexComun}
            z-index:5;
          }
        }
        & p {
          ${FlexComun}
          width: 100%;
          animation: slideIn 1s ease-in-out;
          height: 50vh;
          padding: 2em;
          background: rgba(155, 152, 152, 0.404);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          position: relative;
          &::after {
            position: absolute;
            content: "";
            background-color: ${colors.CC};
            width: 0px;
            height: 0px;
            bottom: 5em;
            right: 5em;
            box-shadow: 0px 10px 80px 40px ${colors.CC};
          }
          &::before {
            position: absolute;
            content: "";
            background-color: ${colors.CC};
            width: 0px;
            height: 0px;
            top: 5em;
            left: 5em;
            box-shadow: 0px 10px 80px 40px ${colors.BB};
          }
        }
      }
      & > section {
        width: 50%;
        ${FlexComun}
        flex-direction:column;
        height: 50vh;
        justify-content: start;
        padding: 2em;
        & h2 {
          font-size: 25px;
          width: 100%;
          text-align: center;
        }
        & > div:nth-child(2) {
          ${FlexComun}
          flex-direction:column;
          padding: 2em;
          & label {
            ${FlexComun}
            gap: 1em;
            width: 50%;
            justify-content: start;
          }
        }
        & > div:nth-child(3) {
          ${FlexComun}
          justify-content:space-around;
          width: 100%;
          & > button {
            padding: 1em;
            background-color: ${colors.CC};
            border: none;
            border-radius: 0.5em;
            color: ${colors.light};
          }
        }
      }
    
  }
`;
