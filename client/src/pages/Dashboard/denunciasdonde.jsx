import React, { useState } from "react";
import { styled } from "styled-components";
import { BackgraundQuizz, colors } from "../../style/StyleGlobal";
import { MapasDataURL } from "../../data/mapasdata";

const Denunciasdonde = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const handleGetUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;

          const userLocation = `${userLat},${userLng}`;
          setOrigin(userLocation);
          openGoogleMaps(userLocation, destination);
        },
        (error) => {
          console.error("Error al obtener la ubicación del usuario:", error);
        }
      );
    } else {
      console.error("La geolocalización no está disponible en este navegador.");
    }
  };

  const openGoogleMaps = (origin, destination) => {
    const escapedOrigin = encodeURIComponent(origin);
    const escapedDestination = encodeURIComponent(destination);
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${escapedOrigin}&destination=${escapedDestination}&travelmode=walking`;

    window.open(googleMapsUrl, "_blank");
  };

  return (
    <Denun>
      <div>
        <h2>Dirígete a los lugares de denuncias </h2>
        <section>
          <p>
            Visita el Slim más cercano a ti{" "}
            <button onClick={() => openGoogleMaps(origin, "Slim_muejeres")}>
              Trazar Mapa
            </button>
          </p>
          <p>
            Visita la Fcc más cercana a ti{" "}
            <button onClick={() => openGoogleMaps(origin, "Fcc")}>
              Trazar Mapa
            </button>
          </p>
          <p>
            Visita el Fcn más cercano a ti{" "}
            <button onClick={() => openGoogleMaps(origin, "Fcn")}>
              Trazar Mapa
            </button>
          </p>
          {MapasDataURL.entidades.map((data, index) => (
            <p key={index}>
              {data.nombre}
              <button onClick={() => openGoogleMaps(origin, data.nombre)}>
                Trazar Mapa
              </button>
            </p>
          ))}
        </section>
      </div>
    </Denun>
  );
};

export default Denunciasdonde;

const Denun = styled.section`
  height: auto;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  & div {
    width: 40rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: end;
    flex-direction: column;
gap:2em;
padding:2em;
    ${BackgraundQuizz}
  }
  & section {
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;

    & p {
      font-size: 0.9em;
      margin: 1em 3em;
      display:flex;
      width:100%;
      justify-content:space-between;
      & button {
        margin: 0em 3em;
        padding: 0.2em 2em;
        cursor: pointer;
        border: 1px solid #0005;
        align-self:flex-end;
        &:hover {
          background-color: ${colors.CC};
          color: #fff;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    width:100vw;
    overflow-x:hidden;
    & div{
      width:100%;
     & section {
      flex-direction:column;
     }
    }
  }
`;
