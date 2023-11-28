import React, { useEffect, useState, useCallback } from 'react';
import { API_URL } from '../../index';
import ListDwellings from '../../components/listDwellings/ListDwellings';
import axios from 'axios';
import './style.css';
import SearchBar from '../../components/searchBar/SearchBar';

const Dwellings = () => {
  const [Dwellings, setDwellings] = useState([]);
  const [Filters, setFilters] = useState({}); //{searchValue, dates, adults, children, rooms}
  const URL = API_URL + '/api/dwellings';
  
  const getDwellings = useCallback(() => {
    axios.get(URL).then((data) => setDwellings(data.data));
    console.log('alfa');
  }, [URL]);

  useEffect(() => {
    getDwellings();
  }, [getDwellings]);

  const resetState = () => {
    getDwellings();
  };

  const handleFilterChanges = () => {
    console.log('beta');
    // Add logic for handling filter changes
  };

  useEffect(() => {
    handleFilterChanges();
  }, [Filters]);

  return (
    <div style={{ marginTop: '20px' }}>
      <div className="row">
        <div className="col">
          <div className="list-dwellings">
            <SearchBar onChange={handleFilterChanges} />
            <ListDwellings Dwellings={Dwellings} resetState={resetState} filters={Filters} />
          </div>
        </div>
      </div>
      <img src={API_URL + '/api/media/photos/1.jpg'} alt="ads" />
      <div className="row"></div>
    </div>
  );
};

export default Dwellings;
