import React from "react";

import Alert from "../assets/icons/alert.svg";
import Location from "../assets/icons/location.svg";
import Users from "../assets/icons/users.svg";
import logaut from "../assets/icons/logout.svg";
import { Linkes } from "../style/navStyle";
import { useUser } from "../context/userContextProvider";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import UserComun from "./userComun";
const Admin = () => {
  const navegate = useNavigate();
  const { user, logout } = useUser();
  const salir = () => {
    logout();
    navegate("/");
  };
  if (!user) {
    return <Navigate to={"/"}></Navigate>;
  }
  return (
    <>
      {user.rol == "admin" ? (
        <div>
          <Linkes to="/dashboard/organizacion">
            <img src={Location} alt="" />
            Organizacion
          </Linkes>
          <Linkes to="/dashboard/alertasAdmin">
            <img src={Alert} alt="" /> Alertas
          </Linkes>
          <Linkes to="/dashboard/user">
            <img src={Users} alt="" /> Usuarios
          </Linkes>
          <Linkes to="/dashboard/Quizz">
            <img src={Users} alt="" /> Examinar Resultados
          </Linkes>
          <Linkes to="/dashboard/Quizz">
          Reportes de ayuda
          </Linkes>
        </div>
      ) : (
        <>
          <UserComun />
        </>
      )}
      <section>
        <button onClick={salir}>
          <img src={logaut} alt="" /> Salir
        </button>
      </section>
    </>
  );
};

export default Admin;
