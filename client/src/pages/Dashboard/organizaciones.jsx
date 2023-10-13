import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../style/StyleGlobal";
import storeUno from "../../components/zustand/stores/storeUno";
import { usePost } from "../../hook/usePost";
import { useGet } from "../../hook/useGet";
const url = import.meta.env.VITE_BACKEND_URL;
import { useDelete } from "../../hook/useDelete";
const Organizaciones = () => {
   const { datos, fetchedBody } = storeUno();
/*   const [datosFetched, setDatosFetched] = useState(false);  */
  const {data}=useGet(`https://express-vercel-one-mu.vercel.app/organizacion`);
 /*  useEffect(() => {
    if (!datosFetched) {
      fetchedBody();
      setDatosFetched(true);
    }
  }, [datosFetched, fetchedBody]); */
  const [form, setForm] = useState({
    nombre: "",
    ubicacion: "",
    areVulnerable: "",
    usuarioId: null,
  });

  const renderDatos = () => {
    if (data && data.length)
      return data.map((datos,v) => (
        <tr key={datos.id}>
          <td>{v+1}</td>
          <td>{datos.nombre}</td>
          <td>{datos.ubicacion}</td>
          <td>{datos.areVulnerable}</td>
          <td>hanz</td>
          <td>
            <button onClick={()=>{
              useDelete('https://express-vercel-one-mu.vercel.app/organizacion',datos.id)
            }}
            >Eliminar</button>
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
        <tbody>
          <tr>
            <td>
              Nueva organizacion
            </td>
            <td>
              <input type="text" value={form.nombre} onChange={(e) =>
                setForm({
                  ...form,
                  nombre: e.target.value,
                })
              } placeholder="Organizacion" />
            </td>
            <td>
              <input
                type="text"
                value={form.ubicacion}
                onChange={(e) =>
                  setForm({
                    ...form,
                    ubicacion: e.target.value,
                  })
                }
                placeholder="Ubicacion"
              />
            </td>
            <td>
              <input
                type="text"
                value={form.areVulnerable}
                onChange={(e) =>
                  setForm({
                    ...form,
                    areVulnerable: e.target.value,
                  })
                }
                placeholder="Area vulnerable"
              />
            </td>
            <td>
              <select
                onChange={(e) =>
                  setForm({
                    ...form,
                    usuarioId:null,
                  })
                }
              >
                <option>Busque usuario</option>
                {datos.map((v) => (
                  <option key={v.usuarioId} value={v.usuarioId}>
                    {v.usuario.nombre}
                    
                  </option>
                ))}
              </select>
            </td>
            <td>
              <button
                onClick={() => {
                  usePost(`${url}organizacion`,form)
                }}
              >
                Agregar
              </button>
            </td>
          </tr>
          {renderDatos()}
        </tbody>
      </table>
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
          overflow: hidden;
  text-overflow: ellipsis;
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
