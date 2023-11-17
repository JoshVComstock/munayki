import React, { useEffect, useState } from "react";

import GoogleMapsDirections from "../../components/dashboard/mapas";
import { ContainerUbicacion } from "../../style/ContainerUbicacion";
import { useUser } from "../../context/userContextProvider";
import useHttpGet from "../../hook/useHttpGet";
import { peticionGet } from "../../services/getRequest";
const url = import.meta.env.VITE_BACKEND_URL;

const AlertasAdmin = () => {
  const { user, logout } = useUser();
  const [data, setData] = useState([]);
  const [ver, setVer] = useState(false);
  let userId = user.id;
  console.log(userId);

  const fetchData = async () => {
    try {
      const result = await peticionGet(`/multimedia`);
      setData(result);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
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
            <>
              <tr key={paso.id}>
                <td>{paso.id}</td>
                <td >{paso.usuario.nombre}</td>
                <td>
                <button
                  onClick={() => {
                    const mapsUrl = `https://www.google.com/maps?q=${paso.latitud},${paso.longitud}`;
                    window.open(mapsUrl, "_blank");
                  }}
                >
                  Abrir Maps
                </button>
                </td>
                <td> <img src={paso.foto} alt="foto evidencia" /></td>
                <td>{paso.fecha}</td>
                <td>{paso.estado|| "llamado desde la app"}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </ContainerUbicacion>
  );
};

export default AlertasAdmin;
