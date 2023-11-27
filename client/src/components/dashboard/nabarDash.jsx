import React, { useState } from "react";
import { Sectionav } from "../../style/navStyle";
import Perfil from "./perfil";
import { Outlet } from "react-router-dom";
import Cocha from "../../assets/logoChocha.png";
import mun from "../../assets/munayki.png";
import Search from "../search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NabarDash = ({ children }) => {
  const [claseCSS, setClaseCSS] = useState("navV");

  const cambiarClase = () => {
    if (claseCSS === "navV") {
      console.log(claseCSS);
      setClaseCSS("navNoV");
    } else {
      console.log("no");
      setClaseCSS("navV");
    }
  };

  return (
    <Sectionav>
      <button onClick={cambiarClase}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <nav className={claseCSS}>
        <button onClick={cambiarClase}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div>
          <img src={mun} alt="" />
          <img src={Cocha} alt="" />
        </div>
        <section>{children}</section>
      </nav>

      <div className="outline">
        <header>
          <Perfil />
        </header>
        <Outlet />
      </div>
    </Sectionav>
  );
};

export default NabarDash;
