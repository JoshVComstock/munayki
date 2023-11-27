import React from "react";
import { Linkes } from "../style/navStyle";
import {
  faExclamationCircle,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const UserNiv2 = () => {
  return (
    <div>
      <Linkes to="/dashboard/alertasAdmin">
        <FontAwesomeIcon icon={faExclamationCircle} />
        Alertas
      </Linkes>

      <Linkes to="/dashboard/Quizz">
        <FontAwesomeIcon icon={faQuestionCircle} />
        Examinar Resultados
      </Linkes>
    </div>
  );
};

export default UserNiv2;
