import React, { useEffect, useState } from "react";

const url = import.meta.env.VITE_BACKEND_URL;

import { ContainerUbicacion } from "../../style/ContainerUbicacion";
import useHttpGet from "../../hook/useHttpGet";
import { peticionDelete } from "../../services/deletRequest";
const User = () => {
  const { data,refetch  } = useHttpGet(`${url}/user`);

  const handleDelete = async (userId) => {
    const res = await peticionDelete(`/user/`, userId);
    alert(res.message);

  };

  const renderDatos = () => {
    if (data && data.length)
      return data.map((datos) => (
        <tr key={datos.id}>
          <td>{datos.id}</td>
          <td>{datos.nombre}</td>
          <td>{datos.apellido}</td>
          <td>{datos.edad}</td>
          <td>{datos.telefono}</td>
          <td>{datos.carnet}</td>
          <td>{datos.correo}</td>
          <td>{datos.rol}</td>
          <td>{datos.genero}</td>
          <td>
            <button
              onClick={() => {
                handleDelete(datos.id);
              }}
            >
              Eliminar
            </button>
          </td>
        </tr>
      ));
  };

  useEffect(() => {
    renderDatos();
  }, [data])
  
  return (
    <ContainerUbicacion>
      <div>
        <h1>Usuarios</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>nombre</th>
            <th>apellido</th>
            <th>edad</th>
            <th>telefono</th>
            <th>carnet</th>
            <th>correo</th>
            <th>rol</th>
            <th>genero</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>{renderDatos()}</tbody>
      </table>
    </ContainerUbicacion>
  );
};

export default User;
