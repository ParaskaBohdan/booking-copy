import React, { useEffect, useState, useCallback } from 'react';
import { API_URL } from '../../index';
import ListDwellings from '../../components/listDwellings/ListDwellings';
import axios from 'axios';
import './style.css';

const Dwellings = () => {
  const [Dwellings, setDwellings] = useState([]);
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

  return (
    <div style={{ marginTop: '20px' }}>
      <div className="row">
        <div className="col">
          <div className="list-dwellings">
            <ListDwellings Dwellings={Dwellings} resetState={resetState} newStudent={false} />
          </div>
        </div>
      </div>
      <div className="row"></div>
    </div>
  );
};

export default Dwellings;
