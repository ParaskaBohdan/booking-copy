import React from 'react';
import { useParams } from 'react-router-dom';
import DwellingInfo from '../../components/dwellingInfo/DwellingInfo';
import useDwelling from './dwellingAPI.js';

const Dwelling = () => {
  const { dwellingID } = useParams();
  const dwellingIDNumber = parseInt(dwellingID, 10);
  const { dwelling, error } = useDwelling(dwellingIDNumber);

  console.log(dwelling);

  return (
    <div>
      <h1>Деталі dwelling</h1>
      {error ? (
        <p>Помилка отримання даних: {error.message}</p>
      ) : (
        <DwellingInfo dwelling={dwelling} />
      )}
    </div>
  );
};

export default Dwelling;
