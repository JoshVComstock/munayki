import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../style/StyleGlobal";

import mainStore from "../../components/zustand/stores/storeUno";
const Ubicaciones = () => {
  // como es un huck debemos instanciarlos de esta forma se puede manejar el destruring  para traer lo que quieres
  const { datos, fetchedUbicacion, eliminarUbicacion } = mainStore();
  const [datosFetched, setDatosFetched] = useState(false);
  useEffect(() => {
    if (!datosFetched) {
      fetchedUbicacion();
      setDatosFetched(true);
    }
  }, [datosFetched, fetchedUbicacion]);
  if (!datos.length) {
    return <span className="loader"></span>;
  }
  const handleEliminar = (id) => {
    eliminarUbicacion(id);
  };
  const renderDatos = () => {
    if (datos && datos.length)
      return datos.map((datos) => (
        <tr key={datos.id}>
          <td>{datos.id}</td>
          <td>Jose daniel</td>
          <td>{datos.latitud}</td> 
          <td>{datos.longitud}</td>
          <td>Ayuda a los mayores</td>
          <td>
            <button onClick={() => handleEliminar(datos.id)}>Eliminar</button>
          </td>
        </tr>
      ));
  };

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
            <th>Latitud</th>
            <th>Longitud</th>
            <th>Area vulnerable</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>{renderDatos()}</tbody>
      </table>
    </ContainerUbicacion>
  );
};

export default Ubicaciones;
export const ContainerUbicacion = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  & > div {
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    color: ${colors.gray300};
    font-size: 25px;
  }
  & > table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    & > thead {
      height: 50px;
      background: ${colors.C};
      color: ${colors.light};
    }
    & > tbody {
      height: 100%;
      text-align: center;
      tr {
        height: 50px;
        &:nth-child(even) {
          background-color: rgba(229, 214, 245, 0.907);
        }
        &:nth-child(odd) {
          background-color: #fff;
        }
        & > td {
          height: 50px;
          & > button {
            width: 100px;
            height: 35px;
            background: transparent;
            border: 1px solid ${colors.CC};
            cursor: pointer;
            &:hover {
              background: ${colors.CC};
              color: ${colors.light};
              opacity: 0.8;
            }
          }
        }
        color: ${colors.CC};
        &:hover {
          color: ${colors.CC};
          cursor: pointer;
        }
      }
    }
  }
`;
