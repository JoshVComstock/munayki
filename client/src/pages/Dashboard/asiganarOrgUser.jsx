import React, { useEffect, useState } from "react";
import { peticionGet, peticionPostPut } from "../../services/getRequest";
import Swal from "sweetalert2";

const AsignarOrgUser = ({ userdata }) => {
  const [idOrg, setIdOrg] = useState("");
  const [data, setData] = useState([]);
  const [selectedOrg, setSelectedOrg] = useState(null);
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

  useEffect(() => {
    if (idOrg) {
      const foundOrg = data.find((org) => org.id === parseInt(idOrg));
      setSelectedOrg(foundOrg);
    } else {
      setSelectedOrg(null);
    }
  }, [idOrg, data]);

  const handleUpdate = async () => {
    const res = await peticionPostPut(`/user/` + userdata.id, {
      nombreOrganizacion: selectedOrg.nombre,
      areVulnerable: selectedOrg.areVulnerable,
      ubicacion: selectedOrg.ubicacion,
    });
    res && res.message === "Successfully updated"
      ? Swal.fire({
          icon: "success",
          title: "¡ organizacion asignada !",
          text: `se registrado modificado con exito ahora el usuario pertenece a una organizacion `,
        })
      : Swal.fire({
          icon: "error",
          title: "¡ Ocurrio un error !",
          text: `error al realizar la asiganacion revice la informacion que asigna `,
        });
  };
  return (
    <div className="cambioorganizacion">
      <label htmlFor="organizacion">Seleccionar organización:</label>
      <select value={idOrg} onChange={(e) => setIdOrg(e.target.value)}>
        <option value="">Seleccionar</option>
        {data.map((item) => (
          <option key={item.id} value={item.id}>
            {item.nombre}
          </option>
        ))}
      </select>

      <section>
        {selectedOrg && (
          <>
     <div className="inputs">
     <input type="text" value={selectedOrg.nombre} readOnly />
            <input type="text" value={selectedOrg.ubicacion} readOnly />
            <input type="text" value={selectedOrg.areVulnerable} readOnly />
     </div>
            <button onClick={() => handleUpdate()}>Asignar</button>
          </>
        )}
      </section>
      <p>Datos Actuales de este registro</p>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>nombre</th>
            <th>apellido</th>
            <th>edad</th>
            <th>telefono</th>
            <th>carnet</th>
            <th>correo</th>
            <th>rol</th>
            <th>genero</th>
            <th className="a">Organizacion</th>
            <th className="a"> area Vulnerable</th>
            <th className="a">ubicacion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{userdata.id}</th>
            <th>{userdata.nombre}</th>
            <th>{userdata.apellido}</th>
            <th>{userdata.edad}</th>
            <th>{userdata.telefono}</th>
            <th>{userdata.carnet}</th>
            <th>{userdata.correo}</th>
            <th>{userdata.rol}</th>
            <th>{userdata.genero}</th>
            <th>{userdata.nombreOrganizacion}</th>
            <th>{userdata.areVulnerable}</th>
            <th>{userdata.ubicacion}</th>
          </tr>
          ;
        </tbody>
      </table>
    </div>
  );
};

export default AsignarOrgUser;
