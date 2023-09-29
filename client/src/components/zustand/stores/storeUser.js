import { create } from "zustand";
const url = import.meta.env.VITE_BACKEND_URL;
const useStoreUser = create((set) => ({
  datos: [],
  fetchedUser: () => {
    fetch(`${url}user`)
      .then((response) => response.json())
      .then((result) => {
        if (Array.isArray(result)) {
          set({ datos: result });
        } else {
          console.error("La respuesta de la API no es un array:", result);
        }
      })
      .catch((error) => {
        console.error("Error al cargar al usuario:", error);
      });
  },
  eliminarUser: (id) => {
    fetch(`${url}user/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        set((state) => ({
          datos: state.datos.filter((user) => user.id !== id),
        }));
      })
      .catch((error) => {
        console.error("Error al eliminar al user:", error);
      });
  },
}));

export default useStoreUser;
