import { useEffect } from "react";

export const usePost = (url, data) => {
    const fetchData = async () => {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        
      });
      if (response.ok) {
        console.log("Agregado");
      } else {
        console.log("error al enviar datos");
      }
      
    };
    fetchData();
 console.log(data);

};
