import React from 'react'
import { Footerstyle } from '../../style/navStyle'
import logo from "../../assets/logochocha.png"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <Footerstyle>
        <img src={logo} alt="" />
        <section>
        <Link to="/Violentimetro"> Violentimetro</Link>
          <Link to="/mapas"> Mapas</Link>
          <Link to="/Formulario"> Quizz</Link>
          <Link to="/app"> App</Link>
          <Link to="/Informate"> Informate</Link>
        </section>
    </Footerstyle>
  )
}

export default Footer
