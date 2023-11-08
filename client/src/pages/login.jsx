import React, { useState } from "react";
import { Section } from "../style/compStyle";
import ComRegister from "../components/Informativa/comRegister";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEnvelope,
  faKey,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../src/assets/logoChocha.png";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/userContextProvider";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useUser();
  const [irLogin, setIrLogin] = useState(true);
const url = import.meta.env.VITE_BACKEND_URL;

  const Evaluando = () => {
    setIrLogin(!irLogin);
  };

  const postLogin = async (e) => {
    e.preventDefault();
    const login = await fetch(`${url}login`, {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json"
      },

      body: JSON.stringify({
        correo: email,
        password: password
      })
    })
    if (login.ok) {
      const json = await login.json();
      if (json.error) {
        alert(json.error);
       
      }
      else {
        setUser(json.data);
      }
    }
  }
  const volver = () => {
    return <Navigate to="/"></Navigate> // Cambiado a navegate
  };
   if (user) {
    return <Navigate to="/dashboard/user"></Navigate>
  } 
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
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <label htmlFor="password"> Contraseña:</label>
          <div>
            <FontAwesomeIcon icon={faKey} />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button onClick={postLogin}>
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
      />
    </Section>
  );
};

export default Login;
