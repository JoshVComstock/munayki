import React from 'react'
import { SlimData } from '../data/slimdata';
import { DocSlimStyle} from '../style/compStyle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useParams, Link} from 'react-router-dom';

const DocumentoSlim = () => {
    const {index} = useParams();
    const cartilla = SlimData.cartillas[index];
  return (
    <DocSlimStyle>
      <article>
        <p>
          {cartilla.titulo}
        </p>
        <div>
          {cartilla.informacion.map((info, i)=>(
            <p key={i}>{info}</p>
          ))}
          {cartilla.puntos.map((punto, i)=>(
            <div key={i}>• {punto}</div>
          ))}
          <button><Link to="/slim">Volver</Link></button>
        </div>
      </article>
    </DocSlimStyle>
  )
}

export default DocumentoSlim;