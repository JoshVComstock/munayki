import { useEffect, useState } from "react";
import useStoreQuizz from "../../components/zustand/stores/storeQuizz";
import { ViolentimetroA } from "../../style/compStyle";

const Violentimetro = () => {
  const { getQuizz, datos } = useStoreQuizz();
  const [gestionarRender, setGestionarRender] = useState(false);

  useEffect(() => {
    if (!gestionarRender) {
      getQuizz();
      setGestionarRender(true);
    }
  }, []);
  if (!datos.length) {
    return <span className="loader"></span>;
  }
  const puntuacionTotal = datos.reduce(
    (total, dato) => total + dato.puntuacion,
    0
  );

  return (
    <ViolentimetroA>
      <div>graficas</div>

      <section>
        <ul>
          {datos.map((dato, index) => (
            <li key={index}>
              <strong>Puntuación:</strong> {dato.puntuacion}
            </li>
          ))}
        </ul>
        <p>
          <strong>Puntuación Total:</strong> {puntuacionTotal}
        </p>
      </section>
      <div></div>
    </ViolentimetroA>
  );
};

export default Violentimetro;
