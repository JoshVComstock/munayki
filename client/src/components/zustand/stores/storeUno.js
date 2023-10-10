import { create } from "zustand";

const url = import.meta.env.VITE_BACKEND_URL;

const useStore = create((set) => ({
  datos: [],
  fetchedBody: () => {
    fetch(`${url}organizacion`)
      .then((response) => response.json())
      .then((result) => {
        if (Array.isArray(result)) {
          set({ datos: result });
        } else {
          console.error("La respuesta de la API no es un array:", result);
        }
      })
      .catch((error) => {
        console.error("Error al cargar la ubicación:", error);
      });
  },
  // crearUbicacion: (nuevaUbicacion) => {
  //   fetch(`${url}ubicacion`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(nuevaUbicacion),
  //   })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       set((state) => ({ datos: [...state.datos, result] }));
  //     })
  //     .catch((error) => {
  //       console.error("Error al crear la ubicación:", error);
  //     });
  // },
  // actualizarUbicacion: (id, ubicacionActualizada) => {
  //   fetch(`${url}ubicacion/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(ubicacionActualizada),
  //   })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       // Actualiza el estado con los datos actualizados
  //       set((state) => ({
  //         datos: state.datos.map((ubicacion) =>
  //           ubicacion.id === id ? result : ubicacion
  //         ),
  //       }));
  //     })
  //     .catch((error) => {
  //       console.error("Error al actualizar la ubicación:", error);
  //     });
  // },
  // eliminarUbicacion: (id) => {
  //   // Realiza una solicitud DELETE para eliminar una ubicación
  //   fetch(`${url}ubicacion/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then(() => {
  //       // Actualiza el estado eliminando la ubicación con el ID correspondiente
  //       set((state) => ({
  //         datos: state.datos.filter((ubicacion) => ubicacion.id !== id),
  //       }));
  //     })
  //     .catch((error) => {
  //       console.error("Error al eliminar la ubicación:", error);
  //     });
  // },
}));

export default useStore;
