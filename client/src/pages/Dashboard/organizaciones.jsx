import React, { useEffect, useState } from "react";
import { colors } from "../../style/StyleGlobal";
const url = import.meta.env.VITE_BACKEND_URL;
import Datauser from "../../components/dashboard/datosuser";
import useHttpGet from "../../hook/useHttpGet";
import { useDelete } from "../../hook/useDelete";
import { usePost } from "../../hook/usePost";
import { ContainerUbicacion } from "../../style/ContainerUbicacion";

const Organizaciones = () => {
  let pamatro = "organizacion";
  let userio = "user";
  const organizacionUrl = `${url}/${pamatro}`;
  const userUrl = `${url}/${userio}`;
  const { data: getOrgData, loading, error } = useHttpGet(organizacionUrl);
  const {
    data: getUserData,
    loading: loadingUser,
    error: errorUser,
  } = useHttpGet(userUrl);

  const [filterCriteria, setFilterCriteria] = useState("");
  const [form, setForm] = useState({
    nombre: "",
    ubicacion: "",
    ubicaciondata: "",
    areVulnerable: "",
    usuarioId: "",
  });
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=";

 
  const handleDelete = (id) => {
    useDelete(url, id, pamatro);
  };
  useEffect(() => {
    renderDatos();
  }, [getOrgData]);
  
  const renderDatos = () => {
    if (loading) {
      return (
        <section className="contenedor">
          <div className="loader"></div>
        </section>
      );
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (getOrgData && getOrgData.length) {
      const filteredData = getOrgData.filter((dato) => {
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
          {/* <td>{dato.usuario.nombre}</td> */}
          <td>
            <button onClick={() => handleDelete(dato.id)}>Eliminar</button>
          </td>
        </tr>
     
        
      ));
    } else {
      return (
        <tr>
          <td colSpan="6">
            <section className="contenedor">
              <div className="loader"></div>
            </section>
          </td>
        </tr>
      );
    }
  };
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
        {loading ? (
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
              {/* <td>
                <select
                  onChange={(e) =>
                    setForm({
                      ...form,
                      usuarioId: parseInt(e.target.value),
                    })
                  }
                >
                  <option>Busque usuario</option>
                  {getUserData.map((v, i) => (
                    <option key={v.id} value={v.id}>
                      {v.nombre ? v.nombre : "Nombre no disponible"}
                    </option>
                  ))}
                </select>
              </td> */}
              <td>
                <button
                  onClick={() => {
                    usePost(`${url}/organizacion`, {
                      ...form,
                      ubicacion: mapUrl + form.ubicacion,
                    });
                  }}
                >
                  Agregar
                </button>
              </td>
            </tr>
            {/* {renderDatos()} */}
            <tr >
          <td>1</td>
          <td>Slim</td>
          <td>
            <a
              href="https://www.google.com/maps/search/?api=1&query=slim"
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
          <td>Muejers</td>
          <td>hanz</td>
          <td>
            <button >Eliminar</button>
          </td>
        </tr>
          </tbody>
        )}
      </table>

      {/* <Datauser /> */}
    </ContainerUbicacion>
  );
};

export default Organizaciones;
