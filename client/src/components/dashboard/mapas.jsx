import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = (props) => {
  const { google, location, onLocationChange } = props;
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const handleMapClick = (mapProps, map, clickEvent) => {
    const lat = clickEvent.latLng.lat();
    const lng = clickEvent.latLng.lng();
    setLatitude(lat);
    setLongitude(lng);
    onLocationChange({ lat, lng });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Escribe un lugar"
        value={location}
        onChange={(e) => onLocationChange(e.target.value)}
      />
      <Map
        google={google}
        zoom={14}
        initialCenter={{ lat: latitude || 0, lng: longitude || 0 }}
        onClick={handleMapClick}
      >
        {latitude && longitude && <Marker position={{ lat: latitude, lng: longitude }} />}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCQHwe4ZWJyNKxbJIm51zPBmxM9DqKVUs0'
})(MapContainer);
