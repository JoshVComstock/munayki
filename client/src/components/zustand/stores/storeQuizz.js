import { create } from "zustand";
const url = "http://localhost:3000/resultadosCuestionario";

const useStoreQuizz = create((set) => ({
  datos: [],
  getQuizz: () => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        if (Array.isArray(result)) {
          set({ datos: result });
        } else {
          console.error("La respuesta de la API no es un array:", result);
        }
      })
      .catch((error) => {
        console.error("Error al cargar datos del quizz:", error);
      });
  },
}));

export default useStoreQuizz;
