import React from "react";
import { Linkes } from "../style/navStyle";
import { useUser } from "../context/userContextProvider";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import UserComun from "./userComun";
import UserNiv2 from "./userNiv2";
import {
  faArrowAltCircleLeft,
  faChartBar,
  faExclamationCircle,
  faPaste,
  faSitemap,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../style/StyleGlobal";

const Admin = () => {
  const navegate = useNavigate();
  const { user, logout } = useUser();
  const salir = () => {
    logout();
    navegate("/");
  };
  if (!user) {
    return navegate("/"), logout();
  }
  let menuItems;
  if (user.rol === "Administrador") {
    menuItems = (
      <div>
        <Linkes to="/dashboard/organizacion">
          <FontAwesomeIcon icon={faSitemap} />
          Organizacion
        </Linkes>
        <Linkes to="/dashboard/alertasAdmin">
          <FontAwesomeIcon icon={faExclamationCircle} />
          Alertas
        </Linkes>
        <Linkes to="/dashboard/user">
          <FontAwesomeIcon icon={faUserTie} /> Usuarios
        </Linkes>
        <Linkes to="/dashboard/ReportesdeUser">
          <FontAwesomeIcon icon={faPaste} />
          Reportes de ayuda
        </Linkes>
        {/* <Linkes to="/dashboard/reportGraficos">
        <FontAwesomeIcon icon={faChartBar} />
          Graficos
        </Linkes> */}
      </div>
    );
  } else if (
    user.rol === "User" ||
    user.rol === "loguedApp" ||
    user.rol === "loggedWeb"
  ) {
    menuItems = <UserComun />;
  } else if (user.rol == "Encargado") {
    menuItems = <UserNiv2 />;
  }

  return (
    <>
      {menuItems ? <>{menuItems}</> : "no perteneces a esta app"}
      <section
        style={{
          backgroundColor: colors.CC,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          onClick={salir}
          style={{ color: "#fff", border: "solid 1px #fff" }}
        >
          <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Salir
        </button>
      </section>
    </>
  );
};

export default Admin;
