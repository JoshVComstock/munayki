import React, { useCallback, useEffect, useState } from "react";

import { ContainerUbicacion } from "../../style/ContainerUbicacion";
import { peticionGet, peticionPostPut } from "../../services/getRequest";
import { useModal } from "../../hook/useModal";
import { ControlEstados } from "./controlEstados";
import Swal from "sweetalert2";
import { useUser } from "../../context/userContextProvider";

const AlertasAdmin = () => {
  const [data, setData] = useState([]);
  const [useEspecifico, setUseEspecifico] = useState("");
  const { user, logout } = useUser();
  console.log("userloguado", user);

  const fetchData = async () => {
    try {
      const result = await peticionGet(`/multimedia`);
      console.log("resultado", result);
      setData(result);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const openMaps = useCallback((latitud, longitud) => {
    const mapsUrl = `https://www.google.com/maps?q=${latitud},${longitud}`;
    window.open(mapsUrl, "_blank");
  }, []);
  const { openModal, closeModal } = useModal(
    "Datos del usuario",
    <ControlEstados
      user={useEspecifico}
      closeModal={() => {
        closeModal();
      }}
    />
  );

  useEffect(() => {
    if (Object.keys(useEspecifico).length > 0) {
      openModal();
    }
  }, [useEspecifico]);

  const handleSend = async (multimediaId) => {
    const usuarioId = user?.id || null;
    const fechaActual = new Date().toISOString();
    const res = await peticionPostPut(
      `/modificacion/${usuarioId}/${multimediaId}`,
      {
        fechaActual,
        usuarioId,
        multimediaId,
      },
      "POST"
    );
    res && res.message === "successully created";
  };

  const handleEstadoChange = async (estado, multimediaId) => {
    const res = await peticionPostPut(`/multimedia/${multimediaId}`, {
      estado,
    });
    res && res.message === "Successfully updated"
      ? (Swal.fire({
          icon: "success",
          title: "¡Estado actualizado!",
          text: "Se ha actualizado el estado exitosamente.",
        }),
        // await fetch(`/modificacion/${usuarioId}/${multimediaId}`, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     fecha: fechaActual,
        //     usuarioId,
        //     multimediaId,
        //   }),
        // }),
        handleSend(multimediaId),
        fetchData())
      : alert(res.message);
  };

  return (
    <ContainerUbicacion>
      <div>
        <h1>Alerta</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nro</th>
            <th>Datos Usuario</th>
            <th>Ubicacion</th>
            <th>Evidencia</th>
            <th>Fecha</th>
            <th>estado</th>
          </tr>
        </thead>
        <tbody>
          {data.map((paso) => (
            <tr key={paso.id}>
              <td>{paso.id}</td>
              <td
                onClick={() => {
                  setUseEspecifico(paso.usuario);
                }}
              >
                {paso.usuario.nombre}
              </td>
              <td>
                <button onClick={() => openMaps(paso.latitud, paso.longitud)}>
                  Abrir Maps
                </button>
              </td>
              <td>
                <img src={paso.foto} alt="foto evidencia" />
              </td>
              <td>{paso.fecha}</td>
              <td>
                <select
                  value={paso.estado}
                  onChange={(e) => handleEstadoChange(e.target.value, paso.id)}
                >
                  <option value="pendiente">Pendiente</option>
                  <option value="atendido">Atendido</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ContainerUbicacion>
  );
};

export default AlertasAdmin;
