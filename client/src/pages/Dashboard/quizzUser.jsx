import React from 'react'
import Quizz from '../quizz'
import { preguntas } from "../../data/quizz";

const QuizzUser = () => {
    console.log(preguntas)
    return (
    <div style={{margin:" 0 auto"}}>
    <Quizz/>
 <h3 style={{fontSize:14 , fontWeight:100,whiteSpace:10,border:"solid 1px ",padding:10}}>Respuestas Realizadas</h3>
    {
        preguntas.preguntas.map((v)=>(
          <div key={v.numero}>
              <label >{v.numero} {v.pregunta} {v.riesgo}{v.puntuacion}</label>
          </div>
        ))
    }
   
   
    </div>
  )
}

export default QuizzUser
