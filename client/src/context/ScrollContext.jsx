import React, { createContext, useContext, useState } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    window.scrollTo({
      top: scrollPosition + window.innerHeight * 0.65,
      behavior: "smooth",
    });
  };

  return (
    <ScrollContext.Provider value={{ scrollPosition, setScrollPosition, handleScroll }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  return useContext(ScrollContext);
};
