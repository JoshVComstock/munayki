import React from "react";
import { Sectionav } from "../../style/navStyle";
import Perfil from "./perfil";
import { Outlet } from "react-router-dom";


const NabarDash = ({ children }) => {
  return (
    <Sectionav>
      <nav>
        <h1>Munaiky</h1>
        <Perfil />
        <section>{children}</section>
      </nav>
      <div className="outline">
        <Outlet />
      </div>
    </Sectionav>
  );
};

export default NabarDash;
