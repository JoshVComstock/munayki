import React from 'react'

import GoogleMapsDirections from '../../components/dashboard/mapas'
import { ContainerUbicacion } from '../../style/ContainerUbicacion'

const Alertas = () => {
  return (
    <ContainerUbicacion>
    <div>
      <h1>Alerta</h1>
    </div>
    <table>
      <thead>
        <tr>
          <th>Nro</th>
          <th>Nombre</th>
          <th>Ubicacion</th>
          <th>Evidencia</th>
          <th>Fecha</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
            <tr>
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
            </tr>
      </tbody>
    </table>

    <GoogleMapsDirections/>
  </ContainerUbicacion>
  )
}

export default Alertas
