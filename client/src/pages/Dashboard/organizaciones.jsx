import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../style/StyleGlobal";
import storeUno from "../../components/zustand/stores/storeUno";
import { usePost } from "../../hook/usePost";
const Organizaciones = () => {

  const { datos, fetchedBody } = storeUno();
  const [datosFetched, setDatosFetched] = useState(false);
  useEffect(() => {
    if (!datosFetched) {
      fetchedBody();
      setDatosFetched(true);
    }
  }, [datosFetched, fetchedBody]);
  const [form, setForm] = useState({
    nombre: "",
    ubicacion: "",
    areavul: "",
    usuario: 0
  });
  const renderDatos = () => {
    if (datos && datos.length)
      return datos.map((datos) => (
        <tr key={datos.id}>
          <td>{datos.id}</td>
          <td>{datos.nombre}</td>
          <td>{datos.ubicacion}</td>
          <td>{datos.areVulnerable}</td>
          <td>{datos.usuario.nombre}</td>
          <td>
            <button>Eliminar</button>
          </td>
        </tr>
      ));
  };

  return (
    <ContainerUbicacion>
      <div>
        <h1>Organizacion</h1>
        <button>Nueva ubicacion</button>

      </div>
      <table>
        <thead>
          <tr>
            <th>Nro</th>
            <th>Nombre</th>
            <th>Ubicacion</th>
            <th>Area vulnerable</th>
            <th>usuario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>{renderDatos()}</tbody>
      </table>
      <label htmlFor="">nombre</label>
      <input type="text" value={form.nombre} />
      <label htmlFor="">Ubicacion</label>
      <input type="text" value={form.ubicacion} onChange={(e) => setForm({
        ...form,
        [e.target.name]: e.target.value
      })} />
      <label htmlFor="Area vulnerable">Area vulnerable</label>
      <input type="text" value={form.areavul} onChange={(e) => setForm({
        ...form,
        [e.target.name]: e.target.value
      })} />
      <label htmlFor="">Usuario</label>
      <select onChange={(e) => setForm({
        ...form,
        [e.target.name]: e.target.value
      })}>
        <option>Busque usuario</option>
        {
          datos.map((v) => (
            <option key={v.usuarioId} value={v.usuarioId}>{v.usuario.nombre}</option>
          ))
        }
      </select>
      <button onClick={() => { console.log(form) }}>Agregar</button>
    </ContainerUbicacion>
  );
};

export default Organizaciones;
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
