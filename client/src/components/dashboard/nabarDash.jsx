import React from "react";
import { Sectionav } from "../../style/navStyle";
import Perfil from "./perfil";
import { Outlet } from "react-router-dom";
import Cocha from '../../assets/logoChocha.png';
import mun from '../../assets/munayki.png';
import Search from "../search";


const NabarDash = ({ children }) => {
  return (
    <Sectionav>
      <nav>
        <div>
          <img src={mun} alt="" />
          <img src={Cocha} alt="" />
        </div>
        <section>{children}</section>
      
      </nav>
      
      <div className="outline">
        <header>
          <Perfil/>
        </header>
        <Outlet />
      </div>
    </Sectionav>
  );
};

export default NabarDash;
