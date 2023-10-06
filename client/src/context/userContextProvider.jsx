import { useContext, useState, createContext, React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import GetUserFromLocalStorage from "./getUserFromLocalStorage";

export const UsersContext = createContext(null);

export const useContextUser = () => {
  const context = useContext(UsersContext);
  if (!context) {
    console.warn("debe ser contenido por el provider");
  }
  return context;
};

export const UserContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ isLogged: !!Cookies.get("token") });

  return (
    <UsersContext.Provider value={{ user, setUser }}>
      <GetUserFromLocalStorage setUser={setUser} navigate={navigate} />
      {children}
    </UsersContext.Provider>
  );
};
