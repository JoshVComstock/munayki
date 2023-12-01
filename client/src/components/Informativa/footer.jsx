import React from "react";
import { Footerstyle } from "../../style/navStyle";
import logo from "../../assets/munayki.png";
import { Link } from "react-router-dom";
import logo1 from "../../assets/logos/iffi.png";
import logo2 from "../../assets/logos/logo_Unifranz.png";
import logo3 from "../../assets/logos/children.png";
import logo4 from "../../assets/logos/World_VIsion.jpeg";

const Footer = () => {
  return (
    <Footerstyle>
      <div className="logos">
        {/* <h3>Colaboraciones</h3> */}
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
      </div>
      <section>
        <img src={logo} alt="" />

        <div>
          <Link to="/"> Violentómetro</Link>
          <Link to="/quizz"> Quizz</Link>
          <Link to="/appmovil"> App</Link>
          <Link to="/rutadenuncias"> Rutas de Denuncias</Link>
          <Link to="/slim"> SLIM</Link>
          <Link to="/legal"> Ámbito legal</Link>
        </div>
      </section>
    </Footerstyle>
  );
};

export default Footer;
