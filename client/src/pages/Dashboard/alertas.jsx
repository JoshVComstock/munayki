import React, { useEffect, useState } from "react";

import GoogleMapsDirections from "../../components/dashboard/mapas";
import { ContainerUbicacion } from "../../style/ContainerUbicacion";
import { useUser } from "../../context/userContextProvider";
import useHttpGet from "../../hook/useHttpGet";
import { peticionGet } from "../../services/getRequest";
const url = import.meta.env.VITE_BACKEND_URL;

const Alertas = () => {
  const { user, logout } = useUser();
  const [data, setData] = useState([]);
  const [ver, setVer] = useState(false);
  let userId = user.id;
  console.log(userId);

  const fetchData = async () => {
    try {
      const result = await peticionGet(`/Multimedia/` + userId);
      setData(result.data);
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
                <td onClick={() => setVer(!ver)}>{paso.usuario.nombre}</td>

                <td>
                  {paso.longitud} {paso.latitud}
                </td>
                <td> <img src={paso.foto} alt="foto evidencia" /></td>
                <td>{paso.fecha}</td>
                <td>{paso.estado|| "llamado desde la app"}</td>
              </tr>
            </>
          ))}

          <tr></tr>
          {/* {renderDatos()} */}
          {/* <tr>
              <td>1</td>
              <td>hanz</td>
              <td><a href="https://www.google.com/maps/place/Unifranz+Cochabamba/@-17.3783068,-66.1554712,16.71z/data=!4m6!3m5!1s0x93e374114e60d289:0xa24c22be3cffd741!8m2!3d-17.3751642!4d-66.1586706!16s%2Fg%2F1hc1dyvd7?entry=ttu" target="_blank">Ver mapa</a></td>
              <td>
                <button>Ver</button>
              </td>
              <td>13/10/2023</td>
            <td>
              <button>Alertar</button>
            </td>
            </tr> */}
        </tbody>
      </table>

      {/* <GoogleMapsDirections/> */}
    </ContainerUbicacion>
  );
};

export default Alertas;
