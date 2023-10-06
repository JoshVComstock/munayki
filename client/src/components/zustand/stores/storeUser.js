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
  deleteUsuario: async (id) => {
    try {
      const response = await fetch(`${url}user/${id}`, {
        method: "DELETE",
      });

      if (response.status === 204) {
        set((state) => ({
          datos: state.datos.filter((user) => user.id !== id),
        }));
      } else {
        console.error(
          "No se pudo eliminar el usuario. Código de estado:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
    }
  },
  postUsuario: async (nuevoUser) => {
    try {
      const response = await fetch(`${url}user`, {
        method: "POST",
        headers: {
          "content-type": "application-json",
        },
        body: JSON.stringify(nuevoUser),
      });

      if (response.status === 201) {
        const responseData = await response.json();
        set((state) => ({
          datos: [...state.datos, responseData],
        }));
      } else {
        console.error(
          "No se pudo guardar el usuario. Código de estado:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error al guardar el usuario:", error);
    }
  },
}));

export default useStoreUser;
