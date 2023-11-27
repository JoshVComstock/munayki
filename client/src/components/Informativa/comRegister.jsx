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
import Swal from "sweetalert2";
import { colors } from "../../style/StyleGlobal";

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
  console.log(dataRegister);

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
      ? (Swal.fire({
          icon: "success",
          title: "Usuario agregado!",
          text: `Recuerda tu email y tu contraseña e inicia secion`,
        }),
        navigate("/"))
      : alert(res.message);
  };

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
            <label> Género</label>
            <div>
              <FontAwesomeIcon icon={faEnvelope} />

              <select
                value={dataRegister.genero}
                onChange={(event) =>
                  setDataRegister((old) => ({
                    ...old,
                    genero: event.target.value,
                  }))
                }
style={{background:colors.CC,color:"#fff", width:"90% ", padding:8 , border:"none"}}

              >
                <option value="Masculino">Masculino</option>
                <option value="Femenino ">Femenino</option>
              </select>
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
            <label htmlFor="text">Nombre (s):</label>

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
            <label htmlFor="email">Apellido (s):</label>
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
            <label htmlFor="email">Celular:</label>
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
            <label htmlFor="text">Dirección:</label>
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
          <div style={{ width: "100%", flexWrap: "wrap" }}>
            <button
              onClick={() => {
                setSeguir(!seguir);
              }}
            >
              Registro anterior
              <FontAwesomeIcon icon={faSignInAlt} />
            </button>
            <button onClick={handleSend}>
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
