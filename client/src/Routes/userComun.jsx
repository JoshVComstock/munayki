import React from "react";
import { Linkes } from "../style/navStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faMap,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
const UserComun = () => {
  return (
    <div>
      <Linkes to="/dashboard/Quizz">
        <FontAwesomeIcon icon={faQuestionCircle} />
        Realizar Quizz
      </Linkes>
      <Linkes to="/dashboard/DondeDenunciar">
        <FontAwesomeIcon icon={faMap} />
        Donde Denunciar
      </Linkes>
      <Linkes to="/dashboard/alertas">
        <FontAwesomeIcon icon={faBell} /> Mis alertas
      </Linkes>
    </div>
  );
};

export default UserComun;
