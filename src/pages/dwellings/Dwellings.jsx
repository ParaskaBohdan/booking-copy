import React, { useEffect, useState, useCallback } from 'react';
import { API_URL } from '../../index';
import ListDwellings from '../../components/listDwellings/ListDwellings';
import axios from 'axios';
import './style.css';
import SearchBar from '../../components/searchBar/SearchBar';

const Dwellings = () => {
  const [Dwellings, setDwellings] = useState([]);
  const [filters, setFilters] = useState({});
  
  const URL = API_URL + '/api/dwellings';
  console.log(URL);
  const getDwellings = useCallback(() => {
    axios.get(URL).then((data) => setDwellings(data.data));
  }, [URL]);

  useEffect(() => {
    getDwellings();
  }, [getDwellings]);

  const resetState = () => {
    getDwellings();
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="container"style={{ marginTop: '20px', display:'flex', flexDirection:'column' }}>
      <div className="row">
        <div className="col">
            
          <div className="list-dwellings">
            <SearchBar onFilterChange={handleFilterChange} />
            <ListDwellings Dwellings={Dwellings} resetState={resetState} newStudent={false} />
          </div>
        </div>
      </div>
      <img src={API_URL + '/api/media/photos/1.jpg'}  alt="ads" />
      <div className="row"></div>
    </div>
  );
};

export default Dwellings;
