import React from "react";

const ControlEstados = ({ user }) => {
  console.log("datosUser", user);
  return (
    <div style={{display:"flex" , flexDirection:"column", flexWrap:"wrap", gap:10,padding:20,height:"300px",}}>
      <label > nombre :{user.nombre}</label>
      <label > Apellido :{user.apellido}</label>
      <label > Edad :{user.edad}</label>
      <label > Telefono :{user.telefono}</label>
      <label > Carnet :{user.carnet}</label>
      <label > Direccion : {user.direccion||"no se registro direccion"}</label>
    </div>
  );
};

export default ControlEstados;
