import React, { useState } from "react";
import { preguntas } from "../data/quizz";
import { styled } from "styled-components";


function Quizz() {
  const [respuestas, setRespuestas] = useState({});
  const [puntuacionTotal, setPuntuacionTotal] = useState(0);
  const [preguntaActual, setPreguntaActual] = useState(0);

  const handleRespuesta = (numero, respuesta, puntuacion) => {
    setRespuestas({
      ...respuestas,
      [numero]: respuesta,
    });
    if (respuesta === "si") {
      setPuntuacionTotal(puntuacionTotal + puntuacion);
    } else if (respuesta === "no") {
      setPuntuacionTotal(puntuacionTotal - puntuacion);
    }
  };
  const avanzarPregunta = (avanzar) => {
    if (avanzar) {
      if (preguntaActual < preguntas.preguntas.length - 1) {
        setPreguntaActual(preguntaActual + 1);
      }
    } else {
      if (preguntaActual > 0) {
        setPreguntaActual(preguntaActual - 1);
      }
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
      <h1>¿Cuán Tóxica es tu relación de pareja?</h1>
      <form>
        {preguntas.preguntas[preguntaActual] && (
          <div key={preguntas.preguntas[preguntaActual].numero}>
            <p>{preguntas.preguntas[preguntaActual].pregunta}</p>
            <label>
              Sí
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
            </label>
            <label>
              No
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
            </label>
          </div>
        )}
      </form>
      <div>
        <button onClick={() => avanzarPregunta(false)}>Atras</button>
        {preguntaActual < preguntas.preguntas.length - 1 ? (
          <button onClick={() => avanzarPregunta(true)}>Siguiente</button>
        ) : (
          <button onClick={mostrarMensaje}>Mostrar mensaje</button>
        )}
      </div>
    </QuizzContent>
  );
}

export default Quizz;
const QuizzContent = styled.section``;
