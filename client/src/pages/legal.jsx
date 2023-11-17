import React from 'react'
import {LegalStyle} from "../style/compStyle";
import { LegalData } from '../data/legaldata';

const Legal = () => {
  return (
    <LegalStyle>
      <article>
        <p>Marco Legal</p>
        <div>
          {LegalData.puntos.map((punto, index)=>(
            <aside key={punto.index}>
              <p>{`Punto ${index+1}: ${punto.titulo}`}</p>
              <div>
                {punto.info.map((informacion, i)=>(
                  <p key={i}>{informacion}</p>
                ))}
              </div>
            </aside>
          ))}
        </div>
      </article>
    </LegalStyle>
  )
}

export default Legal