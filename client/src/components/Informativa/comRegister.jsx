import {
  faArrowLeft,
  faEnvelope,
  faKey,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const ComRegister = ({ irLogin, ingresar,Evaluando }) => {
    const navigate = useNavigate();
    const volver =()=>{
        navigate('/login');
      }

  return (
    <div className={`Register ${irLogin ? "" : "active"}`}>
      <article>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <img src="logo" alt="logo" />
      </article>
      <form>
      <h1> Formuario de inicio</h1>
      <label htmlFor="text">Nombre:</label>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          <input type="text" name="nombre" />
        </div>
        <label htmlFor="email">Apellido:</label>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          <input type="text" name="apellido" />
        </div>
        <label htmlFor="text">Edad:</label>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          <input type="text" name="edad" />
        </div>
        <label htmlFor="email"> Correo Electrónico:</label>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          <input type="email" name="email" />
        </div>
        <label htmlFor="password"> Contraseña:</label>
        <div>
          <FontAwesomeIcon icon={faKey} />
          <input type="password" name="password" />
        </div>
        <label htmlFor="password">Confirmar Contraseña:</label>
        <div>
          <FontAwesomeIcon icon={faKey} />
          <input type="password" name="password" />
        </div>
        <button onClick={ingresar}>
          <FontAwesomeIcon icon={faSignInAlt} />
          Registrarse
        </button>
        <button className="volver" onClick={Evaluando}>
          <FontAwesomeIcon icon={faArrowLeft} />
          volver
        </button>
      </form>
    </div>
  );
};

export default ComRegister;
