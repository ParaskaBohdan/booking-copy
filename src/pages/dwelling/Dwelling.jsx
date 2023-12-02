// DwellingPage.jsx
import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import ModalDwelling from '../../components/modalDwelling/ModalDwelling';
import { API_URL } from '../..';
import axios from 'axios';

const DwellingPage = () => {
    const { dwellingID } = useParams();
    const dwellingIDNumber = parseInt(dwellingID, 10);
    const [dwelling, setDwelling] = useState({});

    console.log(API_URL + '/api/dwellings/' + dwellingIDNumber)
    // Припустимо, що dwellingIDNumber - це числовий ідентифікатор вашого житла
    const fetchDwellingData = async () => {
        try {
        const response = await axios.get(`${API_URL}/api/dwellings/${dwellingIDNumber}/`);
        const dwellingData = response.data;
        console.log(dwellingData);
        setDwelling(dwellingData);
        // Тут ви можете робити що-небудь з отриманими даними dwellingData
        } catch (error) {
        console.error('Error fetching dwelling data:', error);
        }
    };
    
    fetchDwellingData();
  
    console.log(dwelling)
  // Отримайте дані dwelling за ідентифікатором dwellingId
  // Приклад:
//   const dwelling = {
//     id: dwellingId,
//     title: 'Назва dwelling',
//     description: 'Опис dwelling',
//     guests: 4,
//     area: 100,
//     dwelling_type: { type_name: 'Тип dwelling' },
//     city: { name: 'Місто' },
//     photos: [{ image: API_URL + '/media/photos/1.jpg' }, { image: '/path/to/photo2.jpg' }],
//   };

  return (
    <div>
      <h1>Деталі dwelling</h1>
      <ModalDwelling dwelling={dwelling} onClose={() => console.log('Modal closed')} />
    </div>
  );
};

export default DwellingPage;
