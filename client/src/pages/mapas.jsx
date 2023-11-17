import React from 'react'
import { Mapasstyle } from '../style/compStyle'
import { MapasData } from '../data/mapasdata'

const Mapas = () => {
  return (
    <Mapasstyle>
      {MapasData.entidades.map((entidad)=>(
        <div key={entidad.nombre}>
          <p>{entidad.nombre}</p>
          <iframe src={entidad.link} width="400" height="350" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      ))}
    </Mapasstyle>
  )
}

export default Mapas
