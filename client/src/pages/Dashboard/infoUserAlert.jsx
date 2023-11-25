import React, { useEffect, useState } from "react";
import { peticionGet } from "../../services/getRequest";

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
      {data && data.length > 0 ? (
        data.map((dat) => (
          <div key={dat.id}>
            fecha - {dat.fecha}
            alerta - {dat.multimedia.id}
            alerta - {dat.multimedia.estado}
            alerta fecha alerta  - {dat.multimedia.fecha}
            alerta - {dat.multimedia.estado}
            alerta - {dat.multimedia.estado}
            usuarioCambio - {dat.usuario.nombre}
            sectorResponzable - {dat.usuario.nombre}
          </div>
        ))
      ) : (
        <p>No hay datos disponibles.</p>
      )}
    </div>
  );
};

export default InfoUserAlert;
