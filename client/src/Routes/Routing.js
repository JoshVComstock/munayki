import React from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useUser } from "../context/userContextProvider";

const Routing = ({ children }) => {
  
  const { user } = useUser();
  return children;
};

export default Routing;
