import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faMapMarkerAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Alert from '../assets/icons/alert.svg';
import Location from '../assets/icons/location.svg';
import Logout from '../assets/icons/logout.svg';
import Users from '../assets/icons/users.svg';
import { Linkes } from "../style/navStyle";
const Admin = () => {
  const navigation = useNavigate();

  const salir = () => {
    navigation("/login");
  };
  return (
    <>
      <div>
        <Linkes to="/dashboard/ubicaciones">
         <img src={Location} alt="" />
          Ubicaciones
        </Linkes>
        <Linkes to="/dashboard/alertas">
          <img src={Alert} alt="" /> Alertas
        </Linkes>
        <Linkes to="/dashboard/user">
         <img src={Users} alt="" /> user
        </Linkes>
      </div>
      <section>
        <button onClick={salir}>
          <img src={Logout} alt="" /> Salir
        </button>
      </section>
    </>
  );
};

export default Admin;
