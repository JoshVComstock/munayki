import React, { useEffect, useState } from "react";
import { ContainerUbicacion } from "../../style/ContainerUbicacion";
import { useUser } from "../../context/userContextProvider";
import { peticionGet } from "../../services/getRequest";
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
                  <td>
                    <img src={paso.foto} alt="foto evidencia" />
                  </td>
                  <td>{paso.fecha}</td>
                  <td>{paso.estado }</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
    </ContainerUbicacion>
  );
};

export default Alertas;
