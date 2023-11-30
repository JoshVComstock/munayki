import React from 'react'
import { Mapasstyle } from '../style/compStyle'
import { MapasData } from '../data/mapasdata'

const Mapas = () => {
  return (
    <Mapasstyle style={{padding:10 ,width:"90vw",flexWrap:"wrap"}}>
      {MapasData.entidades.map((entidad)=>(
        <div key={entidad.nombre} >
          <p>{entidad.nombre}</p>
          <iframe src={entidad.link}  style={{ border: '0' ,flexWrap:"wrap", height:"300px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      ))}
    </Mapasstyle>
  )
}

export default Mapas
