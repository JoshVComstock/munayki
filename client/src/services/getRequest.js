const http = import.meta.env.VITE_BACKEND_URL;
import Swal from "sweetalert2";

export const peticionPost = async (url, contenido) => {
  try {
    const response = await fetch(http + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(contenido),
    });

    if (response.ok) {
      const json = await response.json();
      return { data: json.data, message: json.message }; // Retornar datos y mensaje
    }

    const errorResponse = await response.json();
    Swal.fire({
      icon: "error",
      title: "Correo electrónico en uso",
    });
    console.log("Error en la solicitud:", errorResponse); // Mostrar el error en consola
    return { data: null, message: "Error en la solicitud", errorResponse };
  } catch (error) {
    console.error("Error en la solicitud:", error);
    return { data: null, message: "Error en la solicitud" };
  }
};

export const peticionGet = async (url) => {
  const response = await fetch(http + url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  if (response.ok) {
    const json = await response.json();
    return json;
  }
  return null;
};
export const peticionPostPut = async (url, contenido, metodo) => {
  const response = await fetch(http + url, {
    method: metodo ? "POST" : "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(contenido),
  });
  if (response.ok) {
    const json = await response.json();
    return json;
  }
  return null;
};
