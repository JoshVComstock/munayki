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
    correo: "",
    telefono: "",
    ubicacion: "",
    genero: "",
    password: "",
    rol: "loggedWeb",
  });

  const handleSend = async (e) => {
    e.preventDefault();
    if (
      !dataRegister.apellido.trim() ||
      !dataRegister.nombre.trim() ||
      !dataRegister.edad.trim() ||
      !dataRegister.telefono.trim() ||
      !dataRegister.correo.trim() ||
      !dataRegister.password.trim() ||
      !dataRegister.ubicacion.trim() ||
      !dataRegister.genero.trim()
    ) {
      return Swal.fire({
        icon: "error",
        title: "Llene todos los campos",
      });
    }
    const res = await peticionPost("/user", {
      nombre: dataRegister.nombre,
      apellido: dataRegister.apellido,
      edad: +dataRegister.edad,
      telefono: +dataRegister.telefono,
      ubicacion: dataRegister.ubicacion,
      correo: dataRegister.correo,
      password: dataRegister.password,
      rol: dataRegister.rol,
      genero: dataRegister.genero,
    });
    res && res.message === "Usuario creado exitosamente"
      ? (Swal.fire({
          icon: "success",
          title: "Usuario agregado!",
          text: `Recuerda tu email y tu contraseña e inicia sesion`,
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
                style={{
                  background: colors.CC,
                  color: "#fff",
                  width: "90% ",
                  padding: 8,
                  border: "none",
                }}
              >
                <option value="">Escoga un genero</option>
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
                type="number"
                name="edad"
                value={dataRegister.edad}
                onChange={(event) =>
                  setDataRegister((old) => ({
                    ...old,
                    edad: event.target.value,
                  }))
                }
                required
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
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                required
              />
            </div>
            <label htmlFor="email">Celular:</label>
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                type="number"
                name="telefono"
                value={dataRegister.telefono}
                onChange={(event) =>
                  setDataRegister((old) => ({
                    ...old,
                    telefono: event.target.value,
                  }))
                }
                required
              />
            </div>
            <label htmlFor="text">Dirección:</label>
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                type="text"
                name="direccion"
                value={dataRegister.ubicacion}
                onChange={(event) =>
                  setDataRegister((old) => ({
                    ...old,
                    ubicacion: event.target.value,
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
            Continuar con el registro
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
          Volver
        </button>
      </form>
    </div>
  );
};

export default ComRegister;
