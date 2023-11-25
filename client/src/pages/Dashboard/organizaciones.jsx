import React, { useEffect, useState } from "react";
import { ContainerUbicacion } from "../../style/ContainerUbicacion";
import { peticionGet,  peticionPostPut } from "../../services/getRequest";
import Swal from "sweetalert2";
import { peticionDelete } from "../../services/deletRequest";
const Organizaciones = () => {
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=";
  const [form, setForm] = useState({
    nombre: "",
    ubicacion: "",
    areVulnerable: "",
  });
  const [data, setData] = useState("");
  const fetchData = async () => {
    try {
      const result = await peticionGet("/organizacion");
      setData(result);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSend = async (e) => {
    const res = await peticionPostPut("/organizacion", {
      nombre: form.nombre,
      ubicacion: form.ubicacion,
      areVulnerable: form.areVulnerable,
    }, "POST");
    res && res.message === "successully created"
      ? (Swal.fire({
          icon: "success",
          title: "¡ organizacion creada !",
          text: `se registrado conexito `,
        }),
        setForm({
          nombre: "",
          ubicacion: "",
          areVulnerable: "",
        }),
        fetchData())
      : alert(res.message);
  };

  const deleteData = async (data) => {
    await peticionDelete("/organizacion/", data);
    await fetchData();
  };
  return (
    <ContainerUbicacion>
      <div>
        <h1>Organizaciones </h1>
      </div>

      <table>
        <thead>
          <tr>
            <th>Nro</th>
            <th>Nombre</th>
            <th>Ubicacion</th>
            <th>Area vulnerable</th>
            <th>Acciones</th>
          </tr>
        </thead>

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
            {/* <select
              value={form.usuarioId}
              onChange={(e) =>
                setForm({
                  ...form,
                  usuarioId: e.target.value,
                })
              }
            >
              <option value="">Selecciona un usuario</option>
              {Array.isArray(users) &&
                users.map((usuario) => (
                  <>
                    <option key={usuario.id} value={usuario.id}>
                      {usuario.nombre}
                    </option>
                  </>
                ))}
            </select> */}
            <td>
              <button onClick={(e) => handleSend()}>Agregar</button>
            </td>
          </tr>

          {Array.isArray(data) &&
            data.map((regis) => (
              <tr key={regis.id}>
                <td>{regis.id}</td>
                <td>{regis.nombre}</td>
                <td>
                  <a
                    href={`${mapUrl}${regis.ubicacion}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>Ver Mapa</button>
                  </a>
                </td>
                <td>{regis.areVulnerable}</td>

                <td>
                  <button onClick={() => deleteData(regis.id)}>eliminar</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </ContainerUbicacion>
  );
};

export default Organizaciones;
