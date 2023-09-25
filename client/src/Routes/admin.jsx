import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faMapMarkerAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const Admin = () => {
  const navigation = useNavigate();

  const salir = () => {
    navigation("/login");
  };
  return (
    <>
      <Link to="/dashboard/ubicaciones">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        Ubicaciones
      </Link>
      <Link to="/dashboard/alertas">
        <FontAwesomeIcon icon={faExclamationTriangle} /> Alertas
      </Link>
      <Link to="/dashboard/user">
        <FontAwesomeIcon icon={faUser} /> user
      </Link>
      <button onClick={salir}>
        <FontAwesomeIcon icon={faUser} /> Salir
      </button>
    </>
  );
};

export default Admin;
