import React, { useEffect, useState, useCallback } from 'react';
import { API_URL } from '../../index';
import ListDwellings from '../../components/listDwellings/ListDwellings';
import axios from 'axios';
import './style.css';
import SearchBar from '../../components/searchBar/SearchBar';

const Dwellings = () => {
    const [Dwellings, setDwellings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [Filters, setFilters] = useState({searchValue:'', dates:{entryDate: '', exitDate: ''}, adults:1, children:0,
     rooms:1});
  
    const getDwellings = useCallback(async () => {
      try {
        const response = await axios.get(`${API_URL}/api/dwellings`);
        setDwellings(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }, []);
  
    useEffect(() => {
      getDwellings();
    }, [getDwellings]);
  
    useEffect(() => {
      setFilters(Filters);
    }, [Filters]);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="list-dwellings">
              <SearchBar onChange={setFilters} />
              <ListDwellings Dwellings={Dwellings} filters={Filters}/>
            </div>
          </div>
        </div>
        <div className="row"></div>
      </div>
    );
  };
  
  export default Dwellings;
  
