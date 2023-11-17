const http = import.meta.env.VITE_BACKEND_URL;

export const peticionDelete = async (url,id) => {
  const response = await fetch(http+url+id, {
    method: "DELETE",
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
