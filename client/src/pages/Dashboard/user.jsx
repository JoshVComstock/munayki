import React, { useEffect, useState } from "react";


const url = import.meta.env.VITE_BACKEND_URL;

import { ContainerUbicacion } from "../../style/ContainerUbicacion";
import useHttpGet from "../../hook/useHttpGet";
const User = () => {
  // como es un huck debemos instanciarlos de esta forma se puede manejar el destruring  para traer lo que quieres

 /*  const { fetchedUser, datos,eliminarUser} = useStoreUser(); */
/*   const [datosFetched, setDatosFetched] = useState(false); */
  /* useEffect(() => {
    if (!datosFetched) {
      fetchedUser();
      setDatosFetched(true);
    }
  }, []);
  if (!datos.length) {
    return <span className="loader"></span>;
  } */
  const {data}=useHttpGet(`${url}user`);
  // const elimianruser =(id)=>{
  //   eliminarUser(id)
  //   }
 console.log(data);
  
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
            <button>Eliminar</button>
            
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
