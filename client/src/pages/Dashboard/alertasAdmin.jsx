import React, { useCallback, useEffect, useState } from "react";

import { ContainerUbicacion } from "../../style/ContainerUbicacion";
import { peticionGet } from "../../services/getRequest";
import { useModal } from "../../hook/useModal";
import {ControlEstados} from "./controlEstados";
const url = import.meta.env.VITE_BACKEND_URL;

const AlertasAdmin = () => {
  const [data, setData] = useState([]);
  const [useEspecifico, setUseEspecifico] = useState([]);

  const fetchData = async () => {
    try {
      const result = await peticionGet(`/multimedia`);
      console.log("resultado",result)
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

  const { openModal, closeModal } = useModal("Datos del usuario", 
    <ControlEstados
      user={useEspecifico}
      closeModal={() => {
        closeModal();
      }}
    />
  );
  console.log(data.estado)
  const handleEstadoChange = (estado, multimediaId) => {
  
    console.log(`Actualizar estado ${estado} para multimedia ID ${multimediaId}`);
  };
  const EstadoSelect = ({ estado, multimediaId }) => (
    <select
      value={estado}
      onChange={(e) => handleEstadoChange(e.target.value, multimediaId)}
    >
      <option value="pendiente">Pendiente</option>
      <option value="atendido">Atendido</option>
    </select>
  );
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
                  setUseEspecifico(paso.usuario)
                  openModal()

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
                {" "}
                <img src={paso.foto} alt="foto evidencia" />
              </td>
              <td>{paso.fecha}</td>
              <td>
              <EstadoSelect estado={paso.estado} multimediaId={paso.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ContainerUbicacion>
  );
};

export default AlertasAdmin;
