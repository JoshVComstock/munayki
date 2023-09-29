import React from "react";
import { Sectionav } from "../../style/navStyle";
import Perfil from "./perfil";
import { Outlet } from "react-router-dom";
import Cocha from '../../assets/logoChocha.png';
import Search from "../search";


const NabarDash = ({ children }) => {
  return (
    <Sectionav>
      <nav>
        <div>
          <img src={Cocha} alt="" />
          <h1>Munaiky</h1>
        </div>
        <section>{children}</section>
      </nav>
      <div className="outline">
        <header>
          <Search/>
          <Perfil/>
        </header>
        <Outlet />
      </div>
    </Sectionav>
  );
};

export default NabarDash;
