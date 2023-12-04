import { useState, useEffect } from 'react';
import axios from 'axios';

const useDwelling = (dwellingIDNumber) => {
  const [dwelling, setDwelling] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/dwellings/${dwellingIDNumber}/`);
        console.log('Dwelling Data:', response.data);
        setDwelling(response.data);
      } catch (error) {
        console.error('Error fetching dwelling data:', error);
        setError(error);
      }
    };

    fetchData();
  }, [dwellingIDNumber]);

  return { dwelling, error };
};

export default useDwelling;
