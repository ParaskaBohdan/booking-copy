import React, { useState } from 'react';
// eslint-disable-next-line
import { Typography, TextField, Button, Grid, Paper, FormControlLabel, FormControl, Checkbox, InputLabel, Input, InputAdornment,
} from '@mui/material';
import features from './features.json';

const DwellingForm = () => {
  const [dwellingData, setDwellingData] = useState({
    title: '',
    description: '',
    guests: '',
    area: '',
    city: '',
    dwellingType: '',
    features: [],
  });

  const handleChange = (event) => {
    // eslint-disable-next-line
    const { name, value, type, checked } = event.target;

    setDwellingData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? [...prevData[name], value] : value,
    }));
  };

  const handleCheckboxChange = (feature) => {
    const updatedFeatures = dwellingData.features.includes(feature)
      ? dwellingData.features.filter((f) => f !== feature)
      : [...dwellingData.features, feature];

    setDwellingData((prevData) => ({
      ...prevData,
      features: updatedFeatures,
    }));
  };
// eslint-disable-next-line
  const handlePhotoChange = (event) => {
    const selectedPhotos = event.target.files;
    setDwellingData((prevData) => ({
      ...prevData,
      photos: selectedPhotos,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Dwelling Data:', dwellingData);
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ p: 3, mb: 2 }}>
          <Typography variant="h5" mb={2}>
            Add a Dwelling for Rent
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Title"
              fullWidth
              margin="normal"
              name="title"
              value={dwellingData.title}
              onChange={handleChange}
            />
            <TextField
              label="Description"
              fullWidth
              multiline
              rows={4}
              margin="normal"
              name="description"
              value={dwellingData.description}
              onChange={handleChange}
            />
            <TextField
              label="Number of Guests"
              fullWidth
              margin="normal"
              type="number"
              name="guests"
              value={dwellingData.guests}
              onChange={handleChange}
            />
            <TextField
              label="Area"
              fullWidth
              margin="normal"
              type="number"
              name="area"
              value={dwellingData.area}
              onChange={handleChange}
            />
            <TextField
              label="City"
              fullWidth
              margin="normal"
              name="city"
              value={dwellingData.city}
              onChange={handleChange}
            />
{/* <FormControl fullWidth margin="normal">
  <InputLabel htmlFor="photos-input">
    Select Photos
  </InputLabel>
  <Input
    id="photos-input"
    type="file"
    fullWidth
    name="photos"
    multiple
    inputProps={{ accept: 'image/*' }}
    onChange={handlePhotoChange}
    endAdornment={
      <InputAdornment position="end">
        <Button
          variant="contained"
          component="span"
          size="small"
        >
          Select Photos
        </Button>
      </InputAdornment>
    }
  />
</FormControl> */}

            <Typography variant="subtitle1" mb={1}>
              Features:
            </Typography>
            {features.features.map((feature) => (
                <FormControlLabel
                    key={feature}
                    control={
                    <Checkbox
                        name="features"
                        value={feature}
                        checked={dwellingData.features.includes(feature)}
                        onChange={() => handleCheckboxChange(feature)}
                    />
                    }
                    label={feature}
                />
                ))}
          </form>
        </Paper>
            <Button type="submit" variant="contained" color="primary">
              Post for Rent
            </Button>
      </Grid>
    </Grid>
  );
};

export default DwellingForm;
