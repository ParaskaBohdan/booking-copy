import React, { useEffect, useState, useCallback } from 'react';
import { API_URL } from '../../index';
import ListDwellings from '../../components/listDwellings/ListDwellings';
import axios from 'axios';
import './style.css';

const Dwellings = () => {
  const [Dwellings, setDwellings] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDwellings = useCallback(async () => {
    try {
      console.log('Fetching data...');
      const response = await axios.get(`${API_URL}/api/dwellings`);
      console.log('Data fetched successfully:', response.data);
      setDwellings(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getDwellings();
      } catch (error) {
        console.error('Error in fetchData:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [getDwellings]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <div className="row">
        <div className="col">
          <div className="list-dwellings">
            <ListDwellings Dwellings={Dwellings} />
          </div>
        </div>
      </div>
      <img src={API_URL + '/media/photos/1.jpg'} alt="ads" />
      <div className="row"></div>
    </div>
  );
};

export default Dwellings;
