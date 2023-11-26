import React, { useEffect, useState } from "react";

const url = import.meta.env.VITE_BACKEND_URL;

import { ContainerUbicacion } from "../../style/ContainerUbicacion";
import useHttpGet from "../../hook/useHttpGet";
import { peticionDelete } from "../../services/deletRequest";
import { useModal } from "../../hook/useModal";
import AsiganarOrgUser from "./asiganarOrgUser";

const User = () => {
  const { data, refetch } = useHttpGet(`${url}/user`);
  const [idEspecifico, setIdEspecifico] = useState(0);


  useEffect(() => {
    if (idEspecifico !== 0) {
      openModal();
    }
  }, [idEspecifico]);
  

  const handleDelete = async (userId) => {
    await peticionDelete(`/user/`, userId);
    await renderDatos();
  };

  const renderDatos = () => {
    if (data && data.length)
      return data.map((datos, i) => (
        <tr key={datos.id}>
          <td>{i + 1}</td>
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
                setIdEspecifico(datos);
              }}
            >
              Asignar
            </button>
          </td>
          <td>
            <button>Eliminar</button>
          </td>
        </tr>
      ));
  };

  const { openModal, closeModal } = useModal(
    "asiganr a el usuario la organizacion",
    <AsiganarOrgUser
      userdata={idEspecifico}
      closeModal={() => {
        closeModal();
      }}
    />
  );

  console.log(idEspecifico);
  return (
    <ContainerUbicacion>
      <h1>Usuarios</h1>

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
            <th>Organizacion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>{renderDatos()}</tbody>
      </table>
    </ContainerUbicacion>
  );
};

export default User;
