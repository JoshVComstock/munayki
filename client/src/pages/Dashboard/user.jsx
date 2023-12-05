import React, { useEffect, useState } from "react";

const url = import.meta.env.VITE_BACKEND_URL;

import { ContainerUbicacion } from "../../style/ContainerUbicacion";
import useHttpGet from "../../hook/useHttpGet";
import { peticionDelete } from "../../services/deletRequest";
import { useModal } from "../../hook/useModal";
import AsiganarOrgUser from "./asiganarOrgUser";
import { peticionGet, peticionPostPut } from "../../services/getRequest";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const User = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const result = await peticionGet(`/user`);
      setData(result);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const [idEspecifico, setIdEspecifico] = useState(0);

  useEffect(() => {
    if (idEspecifico !== 0) {
      openModal();
    }
  }, [idEspecifico]);

  const handleDelete = async (userId) => {
    await peticionDelete(`/user/` + userId);
    await fetchData();
  };

  const handleRolChange = async (rol, id) => {
    const confirmation = await Swal.fire({
      title: "¿Está seguro?",
      text: "¿Desea actualizar el rol?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, actualizar",
      cancelButtonText: "Cancelar",
    });

    if (confirmation.isConfirmed) {
      try {
        const respusta = await peticionPostPut("/user/" + id, { rol });
        if (respusta && respusta.message === "Successfully updated") {
          Swal.fire({
            icon: "success",
            title: "Rol actualizado!",
            text: "Se ha actualizado el rol exitosamente.",
          });
          fetchData();
        } else {
          Swal.fire({
            icon: "error",
            title: "¡Rol no actualizado!",
            text: "Código de error: " + (respusta ? respusta.message : "N/A"),
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un error al actualizar el rol: " + error.message,
        });
      }
    } else {
      Swal.fire(
        "Cancelado",
        "La actualización del rol ha sido cancelada",
        "info"
      );
    }
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
          <td>{datos.correo}</td>
          <td>
            {" "}
            <select
              value={datos.rol}
              onChange={(e) => handleRolChange(e.target.value, datos.id)}
            >
              <option value={datos.rol}>{datos.rol}</option>
              <option value="Administrador">Administrador</option>
              <option value="User">User</option>
              <option value="Encargado">Encargado</option>
            </select>
          </td>
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
            <button
              onClick={() => {
                handleDelete(datos.id);
              }}
            >
              <FontAwesomeIcon icon={faTrash} />
              Eliminar
            </button>
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
        fetchData();
      }}
    />
  );

  console.log(data);
  return (
    <ContainerUbicacion>
      <h1>Usuarios</h1>

      <aside>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>nombre</th>
              <th>apellido</th>
              <th>edad</th>
              <th>telefono</th>
              <th>correo</th>
              <th>rol</th>
              <th>genero</th>
              <th>Organizacion</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>{renderDatos()}</tbody>
        </table>
      </aside>
    </ContainerUbicacion>
  );
};

export default User;
