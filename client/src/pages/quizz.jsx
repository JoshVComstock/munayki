import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Resultados from "../components/resultados";
import { useModal } from "../hook/useModal";
import { QuizzContent } from "../style/quizzStyle";
import useHttpPost from "../hook/useHttpPost";
import { preguntas } from "../data/quizz";
import { peticionPostPut } from "../services/getRequest";

const url = import.meta.env.VITE_BACKEND_URL;
function Quizz({ user }) {
  const [respuestas, setRespuestas] = useState({});
  const [puntuacionTotal, setPuntuacionTotal] = useState(0);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [validacion, setValidacion] = useState("");

  const nombreUsuarioGlobal = "Nombre del Usuario";
  const [idUser, setIdUser] = useState("");

  useEffect(() => {
    if (user) {
      setIdUser(user.id);
    }
  }, [user]);
  console.log(idUser);

  const { openModal, closeModal } = useModal(
    "Tu puntuacion es :",
    <Resultados
      puntuacionTotal={puntuacionTotal}
      respuestas={respuestas}
      closeModal={() => {
        closeModal();
      }}
    />
  );

  const enviarRegistrado = async () => {
    console.log("pmu", idUser);
    const res = await peticionPostPut(
      "/resultadosCuestionario",
      {
        puntuacion: +puntuacionTotal,
        respuestas: respuestas,
        usuarioId: +idUser,
        usuarioNombre: "registrados",
      },
      "POST"
    );
  };

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
  const abrirventana = (puntuacionTotal) => {
    <Resultados puntuacionTotal={puntuacionTotal} />;
  };
  const { postData, loading, error } = useHttpPost(
    `${url}resultadosCuestionario`
  );
  const guardarPuntos = async () => {
    const data = {
      puntuacion: puntuacionTotal,
      respuestas,
    };

    fetch(`${url}/resultadosCuestionario`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Resultado del backend:", result);
      })
      .catch((error) => {
        console.error("Error al enviar datos al backend:", error);
      });
  };

  const enviarData = async () => {
    if (idUser.length > 0) {
      await guardarPuntos();
    } else {
      await enviarRegistrado();
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
            <div>
              <p>{preguntas.preguntas[preguntaActual].pregunta}</p>
              <section>
                <article>
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
                        respuestas[
                          preguntas.preguntas[preguntaActual].numero
                        ] === "si"
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
                        respuestas[
                          preguntas.preguntas[preguntaActual].numero
                        ] === "no"
                      }
                    />
                    No
                  </label>
                </article>

                <div>
                  <button onClick={() => avanzarPregunta(false)}>
                    <FontAwesomeIcon icon={faChevronLeft} /> Atras
                  </button>
                  {preguntaActual < preguntas.preguntas.length - 1 ? (
                    <button onClick={() => avanzarPregunta(true)}>
                      Siguiente
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        enviarData();
                        openModal();
                      }}
                    >
                      Ver Resultados
                    </button>
                  )}
                </div>
                {validacion && (
                  <label className="error-message">{validacion}</label>
                )}
              </section>
            </div>
          </article>
        </div>
      )}
    </QuizzContent>
  );
}

export default Quizz;
