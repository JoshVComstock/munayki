import { create } from "zustand";

export const useUser = create((set) => {
  return {
    user: null,
    setUser: (user) => {
      set((old) => ({ ...old, user }));
    },
    logout: () => {
      set((old) => ({ ...old, user: null }));
    },
  };
});
