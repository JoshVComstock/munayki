import {  useEffect } from "react";

export function useDelete(url, id) {
    const fetchData = async () => {
        const response = await fetch(url + "/" + id, {
          method: "DELETE",
        });
        if(response.ok){
            console.log("Organizacion eliminada");
        }
    };
    fetchData();
console.log(id);
}
