import React from 'react';
import { Containerperfil } from '../../style/perfilStyle';
import Bell from '../../assets/icons/bell-solid.svg';
const Perfil = () => {
  return (
    <Containerperfil>
      <div>
        <img src={Bell} alt="" />
        <p>9</p>
      </div>
      <img src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png" alt="" />
    </Containerperfil>
  )
}

export default Perfil