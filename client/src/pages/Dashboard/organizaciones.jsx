import React, { useEffect, useState } from "react";
import { ContainerUbicacion } from "../../style/ContainerUbicacion";
import { peticionGet, peticionPostPut } from "../../services/getRequest";
import Swal from "sweetalert2";
import { peticionDelete } from "../../services/deletRequest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSitemap, faTrash } from "@fortawesome/free-solid-svg-icons";
const Organizaciones = () => {
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=";
  const [form, setForm] = useState({
    nombre: "",
    ubicacion: "",
    areVulnerable: "",
  });
  const [ediatar, setEdiatar] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    if (ediatar) {
      setForm({
        nombre: ediatar.nombre,
        ubicacion: ediatar.ubicacion,
        areVulnerable: ediatar.areVulnerable,
      });
    }
  }, [ediatar]);

  const editarData = async () => {
    const ediatando = await peticionPostPut("/organizacion", form);
    ediatando
      ? (Swal.fire({
          icon: "success",
          title: "¡Informacion Actualizada !",
          text: `a actulizado conexito `,
        }),
        await fetchData(),
        setForm({
          titulo: "",
          cuerpo: "",
          imagen: "",
          url: "",
          estado: "false",
        }))
      : console.log("error");
  };

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
    if (
      !form.nombre.trim() ||
      !form.ubicacion.trim() ||
      !form.areVulnerable.trim()
    ) {
      return Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "Todos los campos son obligatorios",
      });
    }
    const res = await peticionPostPut(
      "/organizacion",
      {
        nombre: form.nombre,
        ubicacion: form.ubicacion,
        areVulnerable: form.areVulnerable,
      },
      "POST"
    );
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

      <aside>
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
              <td>
                <button
                  onClick={(e) => (ediatar ? handleSend() : editarData())}
                >
                  {ediatar ? "Actualizar" : "Agregar"}{" "}
                </button>
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
                  <td >
                    <button onClick={() => setEdiatar(regis)}>
                      <FontAwesomeIcon icon={faTrash} />
                      Editar
                    </button>
                    <button onClick={() => deleteData(regis.id)}>
                      <FontAwesomeIcon icon={faTrash} />
                      eliminar
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </aside>
    </ContainerUbicacion>
  );
};

export default Organizaciones;
