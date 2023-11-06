import React from 'react';
import {API_URL} from '../../index';
import ListDwellings from '../../components/listDwellings/ListDwellings';
import axios from 'axios';
import {useEffect, useState} from "react";
import './style.css'

const Dwellings = () => {
    const [Dwellings, setDwellings] = useState([]);

    useEffect(()=>{
        getDwellings(setDwellings)
    },[]);

    const URL = API_URL + '/api/dwellings/'
    console.log(URL)
    const getDwellings = (data)=>{
        axios.get(URL).then(data => setDwellings(data.data))
    }

    const resetState = () => {
        getDwellings();
    };
    return ( 
        <div style={{ marginTop: '20px' }}>
      <div className="row">
        <div className="col">
          {/* Перший блок */}
          <div className="list-dwellings">
            <ListDwellings Dwellings={Dwellings} resetState={resetState} newStudent={false} />
          </div>
        </div>
      </div>
      <div className="row">
        
      </div>
    </div>
    );
}
 
export default Dwellings;