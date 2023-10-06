import React from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useContextUser } from "../context/userContextProvider";

const Routing = ({ children }) => {
  const [autorizado, setAutorizado] = useState(false);
  const navegate = useNavigate();
  const { user } = useContextUser();
  return children;
};

export default Routing;
