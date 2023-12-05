import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DwellingInfo from '../../components/dwellingInfo/DwellingInfo';
import { API_URL } from '../../';
import axios from 'axios';
import useDwelling from './dwellingAPI';

const Dwelling = () => {
    const { dwellingID } = useParams();
    const dwellingIDNumber = parseInt(dwellingID, 10);
    const { dwelling, error } = useDwelling(dwellingIDNumber);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${API_URL}/api/dwellings/${dwellingIDNumber}/`);
          console.log('Dwelling Data:', response.data);
          setIsLoading(false); // Set isLoading to false after receiving the response
        } catch (error) {
          console.error('Error fetching dwelling data:', error);
          // Handle error or set an appropriate error state if needed
          setIsLoading(false); // Set isLoading to false after receiving the error
        }
      };
  
      fetchData();
    }, [dwellingIDNumber]);
  
    return (
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Помилка отримання даних: {error.message}</p>
        ) : (
          <DwellingInfo dwelling={dwelling} />
        )}
      </div>
    );
  };
  
  export default Dwelling;