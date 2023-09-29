import React from 'react'
import styled from 'styled-components';
import { FlexComun, colors } from '../../style/StyleGlobal';

const Ubicaciones = () => {
  return (
    <ContainerUbicacion>
      <div>
        <h1>Ubicaciones</h1>
        <button>Nueva ubicacion</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nro</th>
            <th>Nombre</th>
            <th>Ubicacion</th>
            <th>Usuario</th>
            <th>Area vulnerable</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Jose daniel</td>
            <td>Serca mi casa</td>
            <td>Administrador</td>
            <td>Ayuda a los mayores</td>
            <td><button>Eliminar</button></td>
          </tr>
          <tr>
            <td>1</td>
            <td>Jose daniel</td>
            <td>Serca mi casa</td>
            <td>Administrador</td>
            <td>Ayuda a los mayores</td>
            <td><button>Eliminar</button></td>
          </tr>
          <tr>
            <td>1</td>
            <td>Jose daniel</td>
            <td>Serca mi casa</td>
            <td>Administrador</td>
            <td>Ayuda a los mayores</td>
            <td><button>Eliminar</button></td>
          </tr>
        </tbody>
      </table>
    </ContainerUbicacion>
  )
}

export default Ubicaciones;
const ContainerUbicacion = styled.div`
padding: 20px;
width: 100%;
height: 100%;
&>div{
  width: 100%;
  height: 15%;
 display: flex;
 align-items: center;
 flex-direction: row;
 justify-content: space-between;
color: ${colors.gray300};
font-size: 25px;
}
&>table{
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  &>thead{
    height: 50px;
    background: ${colors.C};
    color: ${colors.light};
  }
  &>tbody{
    height: 100%;
    text-align: center;
    tr{
    height: 50px;
    &:nth-child(even){
      background-color: rgba(229, 214, 245, 0.907);
      
    }
    &:nth-child(odd){
      background-color: #fff;
    }
    &>td{
      height: 50px;
       &>button{
         width: 100px;
         height: 35px;
         background: transparent;
         border: 1px solid ${colors.CC};
        cursor: pointer;
         &:hover{
           background: ${colors.CC};
           color: ${colors.light};
           opacity: 0.8;
           
         }
       }
     }
      color: ${colors.CC};
      &:hover{
        
        color: ${colors.CC};
        cursor: pointer;
     
      }
    }
  }

}
`;