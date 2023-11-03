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
}));

export default useStore;
