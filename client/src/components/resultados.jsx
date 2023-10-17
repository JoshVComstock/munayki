import React, { useEffect, useState } from "react";

const Resultados = ({ puntuacionTotal }) => {
  const [mensajeRiesgo, setMensajeRiesgo] = useState("");

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
        "Puedes ser víctima de agresión coactiva (violencia física y psicológica). REACCIONA, AÚN ESTÁS A TIEMPO DE DARTE CUENTA"
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
      <section>
        <p> {puntuacionTotal}</p>
        <div> {mensajeRiesgo}</div>
      </section>
    </>
  );
};

export default Resultados;
