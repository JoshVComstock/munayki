import React from "react";
import { Link, Outlet } from "react-router-dom";
import { SectionNav } from "../../style/navStyle";
import logo from "../../assets/munayki.png";
import logo1 from "../../assets/logoChocha.png";
import {
  faLongArrowAltRight,
  faThLarge,
  faThList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NavBar = () => {
  return (
    <SectionNav>
      <nav>
        <div>
          <img src={logo} alt="logo" />
          <img src={logo1} alt="logo" />
        </div>
        <section>
          {/* <Link to="/">home</Link>
          <Link to="/ubicaciones">Ubicaciones</Link> */}
          <Link to="/login" className="login">
            Login
            <FontAwesomeIcon icon={faLongArrowAltRight} />
          </Link>
        </section>
      </nav>
      <Outlet />
    </SectionNav>
  );
};

export default NavBar;
