import React, { useEffect, useState } from "react";
import { ContainerUbicacion } from "../../style/ContainerUbicacion";
import { peticionDelete } from "../../services/deletRequest";
import { peticionGet, peticionPostPut } from "../../services/getRequest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const Informacion = () => {
  const [form, setForm] = useState({
    titulo: "",
    cuerpo: "",
    imagen: "",
    url: "",
    estado: "false",
  });
  const [data, setData] = useState("");
  const fetchData = async () => {
    try {
      const result = await peticionGet("/info");
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
      !form.titulo.trim() ||
      !form.cuerpo.trim() ||
      !form.imagen.trim() ||
      !form.url.trim()
    ) {
      return Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "Todos los campos son obligatorios",
      });
    }
    const res = await peticionPostPut(
      "/info",
      {
        titulo: form.titulo,
        cuerpo: form.cuerpo,
        imagen: form.imagen,
        url: form.url,
      },
      "POST"
    );
    res && res.message === "creado exitosamiente"
      ? (Swal.fire({
          icon: "success",
          title: "¡Post creada !",
          text: `se registrado conexito `,
        }),
        setForm({
          titulo: "",
          cuerpo: "",
          imagen: "",
          url: "",
          estado: "false",
        }),
        fetchData())
      : alert(res.message);
  };
  const deleteData = async (data) => {
    console.log(data)
    await peticionDelete("/info/"+data);
    await fetchData();
  };

  return (
    <ContainerUbicacion>
      <div>
        <h1>Informaciones </h1>
      </div>

      <aside>
        <table>
          <thead>
            <tr>
              <th>Nro</th>
              <th>titulo</th>
              <th>cuerpo</th>
              <th>imagen</th>
              <th>link recurso</th>
              <th>acciones</th>
            </tr>
          </thead>

          <tbody>
            <tr className="agregando">
              <td>Nuevo post</td>
              <td>
                <input
                  type="text"
                  value={form.titulo}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      titulo: e.target.value,
                    })
                  }
                  placeholder="Titulo"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={form.cuerpo}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      cuerpo: e.target.value,
                    })
                  }
                  placeholder="contenido"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={form.imagen}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      imagen: e.target.value,
                    })
                  }
                  placeholder="url img"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={form.url}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      url: e.target.value,
                    })
                  }
                  placeholder="url recurso"
                />
              </td>

              <td>
                <button onClick={(e) => handleSend()}>Agregar</button>
              </td>
            </tr>

            {Array.isArray(data) &&
              data.map((regis) => (
                <tr key={regis.id}>
                  <td>{regis.id}</td>
                  <td>{regis.titulo}</td>
                  <td>{regis.cuerpo}</td>
                  <td>{regis.imagen}</td>
                  <td>{regis.url}</td>

                  <td>
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

export default Informacion;
