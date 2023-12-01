import React from 'react';
import { Containerperfil } from '../../style/perfilStyle';
import Bell from '../../assets/icons/bell-solid.svg';
import { useUser } from '../../context/userContextProvider';
const Perfil = () => {

  const { user, logout } = useUser();




  return (
    <Containerperfil>
      <div>
     
        <h5> usuario:{user.nombre}</h5>
      </div>
      <img src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png" alt="" />
    </Containerperfil>
  )
}

export default Perfil