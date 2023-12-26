import { useState, useEffect } from 'react';
import { API_URL } from '../../';
import axios from 'axios';

const useDwelling = (dwellingIDNumber) => {
  const [dwelling, setDwelling] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/dwellings/${dwellingIDNumber}/`);
        setDwelling(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [dwellingIDNumber]);

  return { dwelling, error };
};

export default useDwelling;
