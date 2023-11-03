import React, { useState } from 'react';

const GoogleMapsDirections = () => {
  const [origin, setOrigin] = useState(''); // Ubicación de inicio
  const [destination, setDestination] = useState(''); // Destino

  const handleDirections = () => {
    // Escapa los valores de origen y destino para que se puedan usar en una URL
    const escapedOrigin = encodeURIComponent(origin);
    const escapedDestination = encodeURIComponent(destination);

    // Construye la URL de Google Maps con los valores dinámicos
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${escapedOrigin}&destination=${escapedDestination}&travelmode=walking`;

    // Abre la URL en una nueva ventana o pestaña del navegador
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div>
      <h2>Google Maps Directions</h2>
      <div>
        <label>Ubicación de inicio:</label>
        <input
          type="text"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
      </div>
      <div>
        <label>Destino:</label>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <button onClick={handleDirections}>Obtener Direcciones</button>
    </div>
  );
};

export default GoogleMapsDirections;
