// context/userContextProvider.js
import { create } from "zustand";

export const useUser = create((set) => {
  return {
    user: JSON.parse(localStorage.getItem("user")) || null,
    setUser: (user) => {
      set((old) => {
        localStorage.setItem("user", JSON.stringify(user));
        return { ...old, user };
      });
    },
    logout: () => {
      localStorage.removeItem("user");
      set((old) => ({ ...old, user: null }));
    },
  };
});
