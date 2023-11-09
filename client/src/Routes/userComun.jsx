import React from 'react'
import { Linkes } from '../style/navStyle'
import Alert from '../assets/icons/alert.svg';
import Location from '../assets/icons/location.svg';
import Users from '../assets/icons/users.svg';
const UserComun = () => {
  return (
    <>
      <Linkes to="/dashboard/Quizz">
          <img src={Users} alt="" /> Realizar Quizz
        </Linkes>
        <Linkes to="/dashboard/DondeDenunciar">
          <img src={Location} alt="" /> Donde Denunciar 
        </Linkes>
        <Linkes to="/dashboard/ReportesdeUser">
          <img src={Users} alt="" /> Mis Reportes 
        </Linkes>
    </>
  )
}

export default UserComun
