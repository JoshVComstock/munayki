import React, { useEffect, useState } from "react";
import { peticionGet } from "../../services/getRequest";
import { ContainerUbicacion } from "../../style/ContainerUbicacion";

const InfoUserAlert = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const result = await peticionGet(`/modificacionuncluye`);
      setData(result.data || []);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  return (
    <div>
      <ContainerUbicacion>
        <div>
          <h1>Reporte de modificaciones</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>fecha-cambio</th>
              <th>id Alerta</th>
              <th>Estado</th>
              <th>Fecha-Alerta</th>
              <th>ubicacion</th>
              <th>id-usuario</th>
              <th>personal</th>
              <th>area</th>
              <th>organizacion</th>
              <th>rol</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map((dat) => (
                <tr key={dat.id}>
                  <td>{dat.fecha}</td>
                  <td> {dat.multimedia.id}</td>
                  <td>{dat.multimedia.estado}</td>
                  <td>{dat.multimedia.fecha}</td>
                  <td>
                    {dat.multimedia.latitud}
                    {dat.multimedia.longitud}
                  </td>
                  <td>{dat.multimedia.usuarioId}</td>
                  <td>{dat.usuario.nombre}</td>
                  <td>{dat.usuario.areVulnerable}</td>
                  <td>{dat.usuario.nombreOrganizacion}</td>
                  <td>{dat.usuario.rol}</td>
                </tr>
              ))
            ) : (
              <tr>No hay datos disponibles.</tr>
            )}
          </tbody>
        </table>
      </ContainerUbicacion>
    </div>
  );
};

export default InfoUserAlert;
