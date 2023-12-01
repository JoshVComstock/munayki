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
  return (
    <Dat style={{ margin: " 0 auto" }}>
      {/* <Quizz />
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
      <article style={{width: "80%", margin:"auto",marginBottom:100}}>
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
      </article> */}
    </Dat>
  );
};

export default QuizzUser;
const Dat = styled.div`
  
`;
