import React, { useEffect, useState } from "react";
import { colors } from "../style/StyleGlobal";

const Resultados = ({ puntuacionTotal }) => {
  const [mensajeRiesgo, setMensajeRiesgo] = useState([]);

  useEffect(() => {
    mostrarMensaje();
  }, []);

  const mostrarMensaje = () => {
    if (puntuacionTotal >= 5 && puntuacionTotal <= 20) {
      setMensajeRiesgo(
        "Estás en camino a ser víctima de agresión y maltrato psicológico. TEN CUIDADO"
      );
    } else if (puntuacionTotal >= 21 && puntuacionTotal <= 40) {
      setMensajeRiesgo(
        "Puedes ser víctima de agresión coactiva (violencia física y psicológica). REACCIONA, ¡AÚN ESTÁS A TIEMPO!" 
      );
    } else if (puntuacionTotal >= 41 && puntuacionTotal <= 60) {
      setMensajeRiesgo(
        "Eres una víctima de violencia psicológica y física. Tu integridad física y psicológica corre peligro"
      );
    } else {
      setMensajeRiesgo("No hay riesgo identificado.");
    }
  };

  console.log("el mensaje es", mensajeRiesgo);
  return (
    <>
      <section style={{ padding:"2em", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", border: "solid 1px #0005" ,width:"500px",gap:20}}>
        <p style={{background:colors.CC , borderRadius:50, height:"20px",width:"20px" , textAlign:"center", color:"#fff" ,alignItems:"center",justifyContent:"center",display:"flex"}}> {puntuacionTotal}</p>
        <div style={{width:"400px" , background:colors.CC,padding:20 ,color:"#fff" }}> {mensajeRiesgo}</div>
      </section>
    </>
  );
};

export default Resultados;
