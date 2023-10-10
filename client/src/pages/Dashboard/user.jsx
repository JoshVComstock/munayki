import React, { useEffect, useState } from "react";
import useStoreUser from "../../components/zustand/stores/storeUser";
import { ContainerUbicacion } from "./organizaciones";
const User = () => {
  const { fetchedUser, datos, deleteUsuario } = useStoreUser();
  const [datosFetched, setDatosFetched] = useState(false);
  useEffect(() => {
    if (!datosFetched) {
      fetchedUser();
      setDatosFetched(true);
    }
  }, []);
  if (!datos.length) {
    return <span className="loader"></span>;
  }
  const eliminarUser = async (id) => {
    try {
      await deleteUsuario(id);
      await fetchedUser();
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
    }
  };

  const renderDatos = () => {
    if (datos && datos.length)
      return datos.map((datos) => (
        <tr key={datos.id}>
          <td>{datos.id}</td>
          <td>{datos.nombre}</td>
          <td>{datos.apellido}</td>
          <td>{datos.edad}</td>
          <td>{datos.telefono}</td>
          <td>{datos.carnet}</td>
          <td>{datos.correo}</td>
          <td>{datos.password}</td>
          <td>{datos.rol}</td>
          <td>{datos.genero}</td>
          <td>
            <button onClick={() => eliminarUser(datos.id)}>Eliminar</button>
          </td>
        </tr>
      ));

  };

  return (
    <ContainerUbicacion>
      <div>
        <h1>Usuarios</h1>
        <button>Nuevo User</button>
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
            <th>password</th>
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
