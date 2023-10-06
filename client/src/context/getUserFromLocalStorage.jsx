import { useEffect } from "react";

const GetUserFromLocalStorage = ({ setUser, navigate }) => {
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      const { id, email, nombre, telefono, rol } = userData;
      const userObj = {
        id,
        email,
        nombre,
        telefono,
        rol,
        isLogged: true,
      };
      setUser(userObj);
    } else {
      navigate("/login");
    }
  }, [setUser, navigate]);

  return null;
};

export default GetUserFromLocalStorage;
