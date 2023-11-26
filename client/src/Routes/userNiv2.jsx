import React from "react";
import { Linkes } from "../style/navStyle";
import Alert from "../assets/icons/alert.svg";
import Location from "../assets/icons/location.svg";
import Users from "../assets/icons/users.svg";
const UserNiv2 = () => {
  return (
    <div>
      {" "}
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
    </div>
  );
};

export default UserNiv2;
