// useHttpPost.js
import { useState } from 'react';

function useHttpPost(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (data) => {
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setLoading(false);
      return true;
    } catch (error) {
      setError(error);
      setLoading(false);
      return false;
    }
  };

  return { postData, loading, error };
}

export default useHttpPost;
