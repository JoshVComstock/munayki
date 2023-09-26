import React, { useState } from "react";
import { Section } from "../style/compStyle";
import ComRegister from "../components/Informativa/comRegister";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faAt, faEnvelope, faKey, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [irLogin, setIrLogin] = useState(true);
  const navigate = useNavigate();
  const Evaluando = () => {
    setIrLogin(!irLogin);
  };
  const ingresar =()=>{
    navigate('/dashboard');
  }
  const volver =()=>{
    navigate('/');
  }
  return (
    <Section>
      <div className={`login ${irLogin ? "active" : ""}`}>
        <article>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <img src="logo" alt="logo" />
        </article>
        <form>
          <h1 htmlFor="Login"> Iniciar Secion</h1>
          <label htmlFor="email"> Correo Electrónico:</label>
         <div>
         <FontAwesomeIcon icon={faEnvelope} />
          <input type="email" name="email" />
         </div>
          <label htmlFor="email"> Contraseña:</label>
        <div>
         <FontAwesomeIcon icon={faKey} />

        <input type="password" name="password" />
        </div>
          <button onClick={ingresar}> <FontAwesomeIcon icon={faSignInAlt} />Iniciar Secion</button>
          <p onClick={Evaluando}>Registrarse</p>
          <button className="volver" onClick={volver}> <FontAwesomeIcon icon={faArrowLeft} />volver</button>

        </form>
      </div>
      <ComRegister irLogin={irLogin} Evaluando={Evaluando} />
    </Section>
  );
};

export default Login;
