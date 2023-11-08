import { useState } from 'react';

export function useGet(url) {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null,
  });

  async function fetchData() {
     
      const data = await response.json();
      setState({
        loading: false,
        data,
        error: null,
      });
  }
  fetchData();

  return state;
}
