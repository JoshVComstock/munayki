import { create } from "zustand";
const url = import.meta.env.VITE_BACKEND_URL;
const useStoreQuizz = create((set) => ({
  datos: [],
  getQuizz: async () => {
    try {
      const response = await fetch(`${url}resultadosCuestionario`);
      const result = await response.json();
      if (Array.isArray(result)) {
        set({ datos: result });
      } else {
        console.error("La respuesta de la API no es un array:", result);
      }
    } catch (error) {
      console.error("Error al cargar datos del quizz:", error);
    }
  },
}));

export default useStoreQuizz;
