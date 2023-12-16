import React from 'react';
import { ImageList, ImageListItem, Typography, List, ListItem, ListItemText } from '@mui/material';

import { API_URL } from '../..';
import './style.css';

const DwellingInfo = ({ dwelling }) => {


  return (
    <div className="dwelling-info-container">
      <Typography variant="h2">{dwelling.title}</Typography>
      <Typography variant="body1">{dwelling.description}</Typography>

      <ImageList rowHeight={160} cols={3} gap={8} className="photos">
        {dwelling.photos.map((photo, index) => (
          <ImageListItem key={index} >
            <img src={API_URL + photo.image} alt='dragon' style={{ cursor: 'pointer' }} />
          </ImageListItem>
        ))}
      </ImageList>


      {/* <div className="details-container">
        <Typography variant="h3">Details</Typography>
        <Typography variant="body1">Guests: {dwelling.guests}</Typography>
        <Typography variant="body1">Area: {dwelling.area} m²</Typography>
      </div> */}

      {/* <div className="features-container">
        <Typography variant="h3">Features</Typography>
        <ul>
          {dwelling.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div> */}

        <div className="features-container">
            <Typography variant="h3">Features</Typography>
            <List>
                {dwelling.features.map((feature, index) => (
                <ListItem key={index}>
                    <ListItemText primary={feature} />
                </ListItem>
                ))}
            </List>
        </div>

    </div>
  );
};

export default DwellingInfo;
