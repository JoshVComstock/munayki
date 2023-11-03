import React, { useState, useEffect } from "react";
import storeUno from "../../components/zustand/stores/storeUno";
const Datauser = () => {

  const { datos, fetchedBody } = storeUno();

  const [ubicacion, setUbicacion] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;
        setUbicacion({ latitude, longitude });
        fetchedBody();
      });
    } else {
      console.log("Geolocalización no está disponible en este navegador.");
    }
  }, []);
  console.log(datos)

  const handleVerComoLlegar = () => {
    if (ubicacion) {
      const startPoint = `${ubicacion.latitude},${ubicacion.longitude}`;
      const destination = "Unifranz+Cochabamba";
      const googleMapsURL = `https://www.google.com/maps/dir/?api=1&origin=${startPoint}&destination=${destination}`;
      window.open(googleMapsURL, "_blank");
    }

  };

  return (
    <div>
      {ubicacion && (
        <div>
          Ubicación actual:
          <ul>
            <li>Latitud: {ubicacion.latitude}</li>
            <li>Longitud: {ubicacion.longitude}</li>
          </ul>
          <button onClick={handleVerComoLlegar}>Ver cómo llegar a Unifranz Cochabamba</button>
        </div>
      )}
    </div>
  );
};

export default Datauser;
