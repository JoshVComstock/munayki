import { create } from "zustand";
const url = "https://jsonplaceholder.typicode.com/photos";
// set nos permite actualizar la key en este caso es el estado photos que creamos
// slice nos permite mostrar la cantidad que querramos en este caso de 0 a 10 registros
const useStore = create((set) => ({
  photos: [],
  fetchPhotos: () => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        set({ photos: result.slice(0, 10) });
      });
  },
}));

export default useStore;
