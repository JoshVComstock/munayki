import { useEffect, useState } from "react";
import useStoreQuizz from "../../components/zustand/stores/storeQuizz";
import { ViolentimetroA } from "../../style/compStyle";
import CantidadRegistros from "../../components/Informativa/graphics/cantidadRegistros";
import Termometro from "../../components/Informativa/graphics/termometro";

const Violentimetro = () => {
  const { getQuizz, datos } = useStoreQuizz();
  const [gestionarRender, setGestionarRender] = useState(false);

  useEffect(() => {
    if (!gestionarRender) {
      getQuizz();
      setGestionarRender(true);
    }
  }, []);
  const puntuacionTotal = datos.reduce(
    (total, dato) => total + dato.puntuacion,
    0
  );
  return (
    <ViolentimetroA>
      <Termometro />
      {/* <section>
        <p>
          <strong>Puntuación Total:</strong> {puntuacionTotal}
        </p>
      </section> */}
      <div>
        <CantidadRegistros datos={datos} />
        <section>
          <h2>Registrate!</h2>
          <p>
            ¡Regístrate para nuestro cuestionario gratuito y obtén información
            valiosa sobre cómo detectar el abuso físico, emocional y sexual!
            Este cuestionario es una herramienta valiosa para cualquiera que
            quiera aprender más sobre la violencia y cómo prevenirla.
          </p>
         <div> <button>Registrate</button>
          <button>hacer el quizz de forma anonima</button></div>
        </section>
      </div>
    </ViolentimetroA>
  );
};

export default Violentimetro;
