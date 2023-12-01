import { useEffect, useState } from "react";
import useStoreQuizz from "../../components/zustand/stores/storeQuizz";
import { ViolentimetroA } from "../../style/compStyle";
import CantidadRegistros from "../../components/Informativa/graphics/cantidadRegistros";
import Termometro from "../../components/Informativa/graphics/termometro";
import { useNavigate } from "react-router-dom";
import resul from "../../data/registara.json";
import { useUser } from "../../context/userContextProvider";

const Violentimetro = () => {
  const navegate = useNavigate();
  const { getQuizz, datos } = useStoreQuizz();
  const [gestionarRender, setGestionarRender] = useState(false);
  const [resultado, setResultado] = useState([]);
  const { user } = useUser();
  const getResultados = async () => {
    const response = await fetch(
      "https://munayki-serve.vercel.app/resultadosCuestionario"
    );
    const data = await response.json();
  };

  useEffect(() => {
    getResultados();
  }, []);

  const puntuacionTotal = resul.reduce(
    (valorActual, item) => {
      if (item.usuarioNombre == "Anónimo") {
        valorActual.anonimos++;
      } else {
        valorActual.registradas++;
      }
      return valorActual;
    },
    {
      anonimos: 0,
      registradas: 0,
    }
  );
  const ingresar = (path) => {
    if (user) {
      navegate('/dashboard/Quizz');
    } else {
      navegate(`/${path}`);
    }
  };
  return (
    <ViolentimetroA>
      <Termometro />
      <div>
        <CantidadRegistros datos={[]} />
        <section>
          <h2>¡Realiza nuestra encuesta sobre la violencia!</h2>
          <p>
            ¡Regístrate para nuestro cuestionario gratuito y obtén información
            valiosa sobre cómo detectar el abuso físico, emocional y sexual!
            Este cuestionario es una herramienta valiosa, que te ayudara a saber
            si realmente estas sufriendo de algún tipo de violencia de parte de
            tu pareja. !Solo debes responder las preguntas de manera honesta!
          </p>
          <div>
            <button onClick={() => ingresar("login")}>{user ? "Atrévete a Descubrirlo" : "Registrate"}</button>
            <button onClick={() => ingresar("quizz")}>
              Hacer el quizz de forma anónima
            </button>
          </div>
        </section>
      </div>
    </ViolentimetroA>
  );
};

export default Violentimetro;
