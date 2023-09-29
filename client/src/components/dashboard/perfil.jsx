import React from 'react';
import { Containerperfil } from '../../style/perfilStyle';
import Bell from '../../assets/icons/bell-solid.svg';
const Perfil = () => {
  return (
    <Containerperfil>
      <div>
        <img src={Bell} alt="" />
        <p>3</p>
      </div>
      <img src="https://static.nationalgeographic.es/files/styles/image_3200/public/01-leonardo-da-vinci-book-talk.jpg?w=1900&h=2279" alt="" />
    </Containerperfil>
  )
}

export default Perfil