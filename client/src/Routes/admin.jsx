import React from "react";

import Alert from '../assets/icons/alert.svg';
import Location from '../assets/icons/location.svg';
import Users from '../assets/icons/users.svg';
import { Linkes } from "../style/navStyle";
import { useUser } from "../context/userContextProvider";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
const Admin = () => {
  const navegate = useNavigate();
  const {user,logout } = useUser();
  const salir = () => {
    logout();
    navegate("/");
  };
  if (!user) {
    return <Navigate to={"/"}></Navigate>
  }
  return (
    <>
      <div>
        <Linkes to="/dashboard/organizacion">
          <img src={Location} alt="" />
          Organizacion
        </Linkes>
        {
          user.rol=="admin" ? "hola admin":"no eres admin"
        }
        <Linkes to="/dashboard/alertas">
          <img src={Alert} alt="" /> Alertas
        </Linkes>
        <Linkes to="/dashboard/user">
          <img src={Users} alt="" /> Usuarios
        </Linkes>
      </div>
      <section>
        <button onClick={salir} >
          <img src="" alt="" /> Salir
        </button>
      </section>
    </>
  );
};

export default Admin;
