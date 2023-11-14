import { useState } from "react";
const url = import.meta.env.VITE_BACKEND_URL;

function useHttpPost() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (data) => {
    console.log("data es:", data);
    try {
      setLoading(true);
      const response = await fetch(`${url}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setLoading(false);
      return true;
    } catch (err) {
      setError(err);
      setLoading(false);
      return false;
    }
  };

  return { postData, loading, error };
}

export default useHttpPost;
