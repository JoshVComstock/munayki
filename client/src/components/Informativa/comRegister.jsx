import {
  faArrowLeft,
  faEnvelope,
  faKey,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logoChocha.png";
import { useState } from "react";
import { peticionPost } from "../../services/getRequest";
const ComRegister = ({ irLogin, ingresar, Evaluando }) => {
  const navigate = useNavigate();
  const [seguir, setSeguir] = useState(false);
  const [dataRegister, setDataRegister] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    telefono: "",
    carnet: "",
    correo: "",
    password: "",
    rol: "loggedWeb",
    genero: "",
  });

  const handleSend = async (e) => {
    e.preventDefault();
    const res = await peticionPost("/user", {
      nombre: dataRegister.nombre,
      apellido: dataRegister.apellido,
      edad: +dataRegister.edad,
      telefono: +dataRegister.telefono,
      carnet: +dataRegister.carnet,
      correo: dataRegister.correo,
      password: dataRegister.password,
      rol: dataRegister.rol,
      genero: dataRegister.genero,
    });
    console.log(dataRegister);
    res && res.message === "sucessully create"
      ? (navigate("/login"), alert("Registrado"))
      : alert(res.message);
  };

  const volver = () => {};
  return (
    <div className={`Register ${irLogin ? "" : "active"}`}>
      <article>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <img src={logo} alt="logo" className="logoimg" />
      </article>
      <form>
        <h1> Formuario de inicio</h1>
        {seguir ? (
          <>
            <label > Genero</label>
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                type="text"
                name="genero"
                value={dataRegister.genero}
                onChange={(event) =>
                  setDataRegister((old) => ({
                    ...old,
                    genero: event.target.value,
                  }))
                }
              />
            </div>
            <label htmlFor="password"> Contraseña:</label>
            <div>
              <FontAwesomeIcon icon={faKey} />
              <input
                type="password"
                name="password"
                value={dataRegister.password}
                onChange={(event) =>
                  setDataRegister((old) => ({
                    ...old,
                    password: event.target.value,
                  }))
                }
              />
            </div>
          </>
        ) : (
          <>
            <label htmlFor="text">Nombre:</label>

            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                type="text"
                name="nombre"
                value={dataRegister.nombre}
                onChange={(event) =>
                  setDataRegister((old) => ({
                    ...old,
                    nombre: event.target.value,
                  }))
                }
              />
            </div>
            <label htmlFor="email">Apellido:</label>
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                type="text"
                name="apellido"
                value={dataRegister.apellido}
                onChange={(event) =>
                  setDataRegister((old) => ({
                    ...old,
                    apellido: event.target.value,
                  }))
                }
              />
            </div>
            <label htmlFor="text">Edad:</label>
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                type="text"
                name="edad"
                value={dataRegister.edad}
                onChange={(event) =>
                  setDataRegister((old) => ({
                    ...old,
                    edad: event.target.value,
                  }))
                }
              />
            </div>
            <label htmlFor="email"> Correo Electrónico:</label>
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                type="email"
                name="email"
                value={dataRegister.correo}
                onChange={(event) =>
                  setDataRegister((old) => ({
                    ...old,
                    correo: event.target.value,
                  }))
                }
              />
            </div>
            <label htmlFor="email">Telefono:</label>
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                type="text"
                name="telefono"
                value={dataRegister.telefono}
                onChange={(event) =>
                  setDataRegister((old) => ({
                    ...old,
                    telefono: event.target.value,
                  }))
                }
              />
            </div>
            <label htmlFor="text">carnet:</label>
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                type="text"
                name="ci"
                value={dataRegister.carnet}
                onChange={(event) =>
                  setDataRegister((old) => ({
                    ...old,
                    carnet: event.target.value,
                  }))
                }
              />
            </div>
          </>
        )}
        {!seguir ? (
          <button
            onClick={() => {
              setSeguir(!seguir);
            }}
          >
            <FontAwesomeIcon icon={faSignInAlt} />
            Contunuar con el registro
          </button>
        ) : (
          <div style={{ width: "100%" }}>
            <button
              onClick={() => {
                setSeguir(!seguir);
              }}
            >
              registro anterior
              <FontAwesomeIcon icon={faSignInAlt} />
            </button>
            <button
              
               onClick={ handleSend}
           
            >
              <FontAwesomeIcon icon={faSignInAlt} />
              Registrarse
            </button>
          </div>
        )}

        <button className="volver" onClick={Evaluando}>
          <FontAwesomeIcon icon={faArrowLeft} />
          volver
        </button>
      </form>
    </div>
  );
};

export default ComRegister;
