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
     {
          user.rol=="admin" ?(
      <div>
          <Linkes to="/dashboard/organizacion">
          <img src={Location} alt="" />
          Organizacion
        </Linkes>
        <Linkes to="/dashboard/alertas">
          <img src={Alert} alt="" /> Alertas
        </Linkes>
        <Linkes to="/dashboard/user">
          <img src={Users} alt="" /> Usuarios
        </Linkes>
        <Linkes to="/dashboard/user">
          <img src={Users} alt="" /> Examinar Resultados 
        </Linkes>
      <h4>Rol:{user.rol}</h4>
       
      </div>
     ):(<>
     
     <Linkes to="/dashboard/Quizz">
          <img src={Users} alt="" /> Realizar Quizz
        </Linkes>
        <Linkes to="/dashboard/DondeDenunciar">
          <img src={Location} alt="" /> Donde Denunciar 
        </Linkes>
        <Linkes to="/dashboard/ReportesdeUser">
          <img src={Users} alt="" /> Mis Reportes 
        </Linkes>
     </>)
    }
      <section>
        <button onClick={salir} >
          <img src="" alt="" /> Salir
        </button>
      </section>
    </>
  );
};

export default Admin;
