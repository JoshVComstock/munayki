import React, { useState } from "react";
import { Section } from "../style/compStyle";
import ComRegister from "../components/Informativa/comRegister";

const Login = () => {
  const [irLogin, setIrLogin] = useState(true);

  const Evaluando = () => {
    setIrLogin(!irLogin);
  };
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
          <input type="email" name="email" />

          <label htmlFor="email"> Contraseña:</label>
          <input type="password" name="password" />
          <button >Iniciar Secion</button>
          <p onClick={Evaluando}>Registrarse</p>

        </form>
      </div>
      <ComRegister irLogin={irLogin} Evaluando={Evaluando} />
    </Section>
  );
};

export default Login;
