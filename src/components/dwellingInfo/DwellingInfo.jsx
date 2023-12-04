import React from 'react';

const DwellingInfo = ({ dwelling }) => {
  return (
    <div>
      <h2>{dwelling.title}</h2>
      <p>{dwelling.description}</p>
      
      <div>
        <h3>Details</h3>
        <p>Guests: {dwelling.guests}</p>
        <p>Area: {dwelling.area} m²</p>
        {/* Додайте інші деталі про житло */}
      </div>
      
      <div>
        <h3>Features</h3>
        <ul>
          {dwelling.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Bedroom</h3>
        <ul>
          {dwelling.bedroom.map((bed, index) => (
            <li key={index}>{bed}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Kitchen</h3>
        <ul>
          {dwelling.kitchen.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Bathroom</h3>
        <ul>
          {dwelling.bathroom.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DwellingInfo;
