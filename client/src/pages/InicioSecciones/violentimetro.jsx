import { useEffect, useState } from "react";
import useStoreQuizz from "../../components/zustand/stores/storeQuizz";
import { ViolentimetroA } from "../../style/compStyle";
import CantidadRegistros from "../../components/Informativa/graphics/cantidadRegistros";
import Termometro from "../../components/Informativa/graphics/termometro";
import { useNavigate } from "react-router-dom";
import resul from "../../data/registara.json"

const Violentimetro = () => {
  const navegate = useNavigate();
  const { getQuizz, datos } = useStoreQuizz();
  const [gestionarRender, setGestionarRender] = useState(false);
  const [resultado, setResultado] = useState([]);
  const getResultados = async () => {
    const response = await fetch("https://munayki-serve.vercel.app/resultadosCuestionario");
    const data = await response.json();

  };

  useEffect(() => {
    getResultados();
  }, []);

  const puntuacionTotal = resul.reduce((valorActual, item) => {
    if (item.usuarioNombre == "anonimo") {
      valorActual.anonimos++;
    }
    else {
      valorActual.registradas++;
    }
    return valorActual;
  }, {
    anonimos: 0,
    registradas: 0
  });
  const ingresar = (path) => {
    navegate(`/${path}`);
  };
  return (
    <ViolentimetroA>
      <Termometro />
      <div>
        <CantidadRegistros datos={[]} />
        <section>
          <h2>¡Registrate!</h2>
          <p>
            ¡Regístrate para nuestro cuestionario gratuito y obtén información
            valiosa sobre cómo detectar el abuso físico, emocional y sexual!
            Este cuestionario es una herramienta valiosa para cualquiera que
            quiera aprender más sobre la violencia y cómo prevenirla.
          </p>
          <div>
            <button onClick={() => ingresar("login")}>Registrate</button>
            <button onClick={() => ingresar("quizz")}>hacer el quiz de forma anónima</button>
          </div>
        </section>
      </div>
    </ViolentimetroA>
  );
};

export default Violentimetro;
