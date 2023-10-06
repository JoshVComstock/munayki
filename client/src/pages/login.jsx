import React, { useState } from "react";
import { Section } from "../style/compStyle";
import ComRegister from "../components/Informativa/comRegister";
import { Navigate, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEnvelope,
  faKey,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../src/assets/logoChocha.png";
import { useNavContext } from "../context/navContextProvider";
import { useContextUser } from "../context/userContextProvider";
import useStoreUser from "../components/zustand/stores/storeUser";
const url = import.meta.env.VITE_BACKEND_URL;
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navegate = useNavigate();
  const { setLogged } = useNavContext();
  const { user, setUser } = useContextUser();
  const [irLogin, setIrLogin] = useState(true);

  const { postUsuario } = useStoreUser();

  const logout = async (e) => {
    e.preventDefault();
    try {
      const response = await postUsuario({ email, password });
      if (response.ok) {
        setUser(response.user[0]);
        localStorage.setItem("user", JSON.stringify(response.user[0]));
        setLogged(true);
        setUser((user) => ({ ...user, isLogged: true }));
        navegate("/");
        toast.success("¡Bienvenido al sistema!");
      } else {
        console.log("Datos incorrectos");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  const Evaluando = () => {
    setIrLogin(!irLogin);
  };
  const ingresar = () => {
    Navigate("/dashboard");
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
          <h1 htmlFor="Login"> Iniciar Secion</h1>
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
          <label htmlFor="email"> Contraseña:</label>
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
          <button onClick={logout}>
            <FontAwesomeIcon icon={faSignInAlt} />
            Iniciar Secion
          </button>
          <p onClick={Evaluando}>Registrarse</p>
          <button className="volver">
            <FontAwesomeIcon icon={faArrowLeft} />
            volver
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
