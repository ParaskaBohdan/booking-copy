import React from 'react';
import './style.css'; // Підключення CSS-файлу
// import { API_URL } from '../../index';

const ModalDwelling = (props) => {
  const { dwelling } = props.dwelling;


  
        return (
            <div className="modal">
            <div className="modal-content">
                <h2>{dwelling.title}</h2>
                <p>{dwelling.description}</p>
                <p>Гостей: {dwelling.guests}</p>
                <p>Площа: {dwelling.area} кв. м.</p>
                <h3>Фотографії:</h3>
                {/* <div className="photo-gallery">
                {dwelling.photos.map((image) => (
                    <img key={image.id} src={API_URL+image.image} alt={`dragooooon `} />
                ))}
                </div> */}
            </div>
            </div>
        );
    

    
};

export default ModalDwelling;
