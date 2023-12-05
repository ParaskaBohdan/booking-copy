import { API_URL } from '../..';
import React from 'react';
import './style.css';

const DwellingInfo = ({ dwelling }) => {
  return (
    <div className="dwelling-info-container">
      <h2>{dwelling.title}</h2>
      <p>{dwelling.description}</p>

        <div className="photos">
            {dwelling.photos.map((photo, index) => (
                <img key={index} src={API_URL + photo.image} alt='dragon' />
            ))}
        </div>

      <div className="details-container">
        <h3>Details</h3>
        <p>Guests: {dwelling.guests}</p>
        <p>Area: {dwelling.area} m²</p>
        {/* Додайте інші деталі про житло */}
      </div>

      <div className="features-container">
        <h3>Features</h3>
        <ul>
          {dwelling.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Додайте аналогічні блоки для інших розділів */}

    </div>
  );
};

export default DwellingInfo;
