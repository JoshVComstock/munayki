import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../style/StyleGlobal";
import storeUno from "../../components/zustand/stores/storeUno";
import { usePost } from "../../hook/usePost";
const url = import.meta.env.VITE_BACKEND_URL;
import { useDelete } from "../../hook/useDelete";
import useStoreUser from "../../components/zustand/stores/storeUser";

const Organizaciones = () => {
  const { datos, fetchedBody } = storeUno();
  const { user, fetchedUser } = useStoreUser();
  const [filterCriteria, setFilterCriteria] = useState(''); 

  const handleFilterChange = (e) => {
    setFilterCriteria(e.target.value);
  };
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=";

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  const [form, setForm] = useState({
    nombre: "",
    ubicacion: "",
    areVulnerable: "",
    usuarioId: "",
  });
  const handleDelete = (id) => {
    useDelete(url, id);
  };


  const renderDatos = () => {
    if (datos && datos.length) {
      const filteredData = datos.filter((dato) => {
        // Aplica el filtrado por nombre o usuario según el criterio
        return (
          dato.nombre.toLowerCase().includes(filterCriteria.toLowerCase()) ||
          dato.usuario.nombre
            .toLowerCase()
            .includes(filterCriteria.toLowerCase())
        );
      });

      if (filteredData.length === 0) {
        return (
          <tr>
            <td colSpan="6">No se encontraron resultados</td>
          </tr>
        );
      }

      return filteredData.map((dato, v) => (
        <tr key={dato.id}>
          {/* Renderizar los datos filtrados */}
          <td>{v + 1}</td>
          <td>{dato.nombre}</td>
          <td>
            <a
              href={dato.ubicacion}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "#fff",
                background: colors.C,
                padding: "0.5em 2em",
                borderRadius: 2,
              }}
            >
              Ver Ubicación
            </a>
          </td>
          <td>{dato.areVulnerable}</td>
          <td>{dato.usuario.nombre}</td>
          <td>
            <button onClick={() => handleDelete(dato.id)}>Eliminar</button>
          </td>
        </tr>
      ));
    } else {
      return (
        <tr>
          <td colSpan="6">Cargando datos...</td>
        </tr>
      );
    }
  };

  useEffect(() => {
    fetchedBody();
    fetchedUser();
  }, [datos]);

  return (
    <ContainerUbicacion>
      <div>
        <h1>Organizaciones </h1>
        <input
          type="text"
          value={filterCriteria}
          onChange={(e) => setFilterCriteria(e.target.value)}
          placeholder="Filtrar por nombre o usuario"
        />
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
        {loader ? (
          <section className="contenedor">
            {" "}
            <div className="loader"></div>
          </section>
        ) : (
          <tbody>
            <tr className="agregando">
              <td>Nueva organizacion</td>
              <td>
                <input
                  type="text"
                  value={form.nombre}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      nombre: e.target.value,
                    })
                  }
                  placeholder="Organizacion"
                />
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
                      usuarioId: parseInt(e.target.value),
                    })
                  }
                >
                  <option>Busque usuario</option>
                  {user.map((v, i) => (
                    <option key={v.id} value={v.id}>
                      {v.nombre ? v.nombre : "Nombre no disponible"}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <button
                  onClick={() => {
                    usePost(`${url}organizacion`, {
                      ...form,
                      ubicacion: mapUrl + form.ubicacion,
                    });
                  }}
                >
                  Agregar
                </button>
              </td>
            </tr>
            {renderDatos()}
          </tbody>
        )}
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
    color: ${colors.DD};
    font-size: 22px;
    gap:2em;
    & input{
      outline:none;
      width: 70%;
      margin:0 auto;
      border:solid 1px #0005;
      padding:0.2em .5em;
    }
  }
  & > table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    font-size: 0.8em;

    & > thead {
      height: 40px;
      background: ${colors.CC};
      color: ${colors.light};
      box-shadow: 0 5px 10px #000;
      font-weight: lighter;
      font-size: 0.8em;

      text-transform: uppercase;
    }
    & > tbody {
      height: 100%;
      text-align: center;
      & input {
        border: solid 1px #0004;
        padding: 0.2em 1em;
        outline: none;
      }
      & select {
        background-color: ${colors.CC};
        color: ${colors.light};
        padding: 0.2em 1em;
      }
      tr {
        height: 50px;
        font-weight: lighter;

        &:nth-child(even) {
          background-color: rgba(53, 19, 90, 0.219);
        }
        &:nth-child(odd) {
          background-color: #fff;
        }
        .agregando {
          background-color: ${colors.FF};
        }

        & > td {
          height: 50px;
          overflow: hidden;
          text-overflow: ellipsis;

          & > button {
            width: 100px;
            height: 30px;
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
