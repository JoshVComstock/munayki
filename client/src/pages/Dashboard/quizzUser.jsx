import React, { useEffect, useState } from "react";
import Quizz from "../quizz";
import { preguntas } from "../../data/quizz";
import Termometro from "../../components/Informativa/graphics/termometro";
import { styled } from "styled-components";
import { colors } from "../../style/StyleGlobal";
import useHttpGet from "../../hook/useHttpGet";
import { useUser } from "../../context/userContextProvider";
const url = import.meta.env.VITE_BACKEND_URL;

const QuizzUser = () => {
  const organizacionUrl = `${url}/resultadosCuestionario`;
  const [mostrar, setMostrar] = useState(false);
  const { data, loading, error } = useHttpGet(organizacionUrl);
  const { user, logout } = useUser();

  const mostrarndo = () => {
    setMostrar(!mostrar);
  };

  console.log("userData:es", data);
  console.log("user es", user);
  return (
    <Dat style={{ margin: " 0 auto" }}>
      <Quizz />
      <h3
        style={{
          fontSize: 14,
          fontWeight: 100,
          whiteSpace: 10,
          border: "solid 1px ",
          padding: 10,
        }}
      >
        Respuestas Realizadas
      </h3>
      {data &&
        data.map((v) => (
          <div className="dataa" key={v.numero}>
            <label>{v.id} </label>
            <div>
              {Object.keys(v.respuestas).map((key) => (
                <p key={key}>
                  {key}: {v.respuestas[key]}
                </p>
              ))}
            </div>
          </div>
        ))}
      <button style={{ padding: 5 }} onClick={mostrarndo}>
        ver todas las preguntas
      </button>
      <article style={{width: "80%", margin:"auto"}}>
        {mostrar ? (
          <>
            {preguntas.preguntas.map((pregunta) => (
              <div key={pregunta.numero} style={{display:"flex",flexDirection:"column" , gap:5,}}>
                <h4 style={{fontSize:".8em",width:"100%",color  :colors.CC,}}>Pregunta {pregunta.numero}:</h4>
               <div style={{display:"flex",justifyContent:"space-between"}}>
               <p>{pregunta.pregunta}</p>
                <p style={{background:colors.CC,color:"#fff",padding:5}}>Riesgo: {pregunta.riesgo}</p>
               </div>
               <p>Puntuación: {pregunta.puntuacion}</p>
              
              </div>
            ))}
          </>
        ) : (
          ""
        )}
      </article>
      <div>
        <Termometro />
        <section>
          <button> Conactate con Slim</button>
          <button> Conactate con Fcc</button>
          <button> Conactate con Fcn</button>
        </section>
      </div>
    </Dat>
  );
};

export default QuizzUser;
const Dat = styled.div`
  & div {
    display: flex;
    flex-direction: row;
    & > aside {
      width: 40%;
      margin: 0 auto;

      & div {
        display: flex;
        flex-direction: column;
      }
    }
    & > section {
      width: 40%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1em;
      & button {
        width: 70%;
        height: 2.5em;
        border: none;
        font-size: 0.8em;
        background-color: ${colors.CC};
        color: #fff;
        border-radius: 0.3em;
      }
    }
  }
  .dataa {
    padding: 0.5em 5em;
    display: flex;
    justify-content: space-between;
    & p {
      background-color: ${colors.CC};
      padding: 0.5em 1em;
      color: #fff;
      font-size: 0.8em;
    }
  }
`;