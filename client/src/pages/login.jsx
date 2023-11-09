import React, { useState } from "react";
import { Section } from "../style/compStyle";
import ComRegister from "../components/Informativa/comRegister";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEnvelope,
  faKey,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../src/assets/logoChocha.png";

const url = import.meta.env.VITE_BACKEND_URL;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navegate = useNavigate();
  const [irLogin, setIrLogin] = useState(true);

  const Evaluando = () => {
    setIrLogin(!irLogin);
  };

  const ingresar = async (e) => {
    e.preventDefault();

    try {
      const data = {
        email: email,
        password: password,
      };

      const response = await fetch(`${url}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.log("Error en la solicitud de inicio de sesión");
      } else {
        const result = await response.json();
        console.log("Inicio de sesión exitoso. Respuesta del servidor:", result);

        navegate("/dashboard");
      }
    } catch (error) {
      console.error("Error en la solicitud de inicio de sesión", error);
    }
  };

  const volver = () => {
    navegate("/");
  };
  return (
    <Section>
      <div className={`login ${irLogin ? "active" : ""}`}>
        <article>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <img src={logo} alt="logo" className="logoimg" />
        </article>
        <form>
          <h1 htmlFor="Login"> Iniciar Sesión</h1>
          <label htmlFor="email"> Correo Electrónico:</label>
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <label htmlFor="password"> Contraseña:</label>
          <div>
            <FontAwesomeIcon icon={faKey} />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={ingresar}>
            <FontAwesomeIcon icon={faSignInAlt} />
            Iniciar Sesión
          </button>
          <p onClick={Evaluando}>Registrarse</p>
          <button className="volver" onClick={volver}>
            <FontAwesomeIcon icon={faArrowLeft} />
            Volver
          </button>
        </form>
      </div>
      <ComRegister
        irLogin={irLogin}
        Evaluando={Evaluando}
        ingresar={ingresar}
      />
    </Section>
  );
};

export default Login;
