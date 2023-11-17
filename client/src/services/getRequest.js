const http = import.meta.env.VITE_BACKEND_URL;
export const peticionPost = async (url, contenido) => {
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
    return json;
  }
  return null;
};
export const peticionGet = async (url) => {
  const response = await fetch(http+url, {
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
