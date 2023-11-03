import { useEffect } from "react";

export function useDelete(url, id, parametro) {
  const fetchData = async () => {
    const response = await fetch(url + parametro + "/" + id, {
      method: "DELETE",
    });
    if (response.ok) {
      console.log("Organizacion eliminada");
    }
  };
  fetchData();
}
