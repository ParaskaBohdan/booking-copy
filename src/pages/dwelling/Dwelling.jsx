import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, CircularProgress, Paper, Grid, Button, Box } from '@mui/material';
import DwellingInfo from '../../components/dwellingInfo/DwellingInfo';
import GeoMap from '../../components/geoMap/geoMap';
import ReviewForm from '../../components/reviewForm/ReviewForm';
import { API_URL } from '../..';
import axios from 'axios';
import useDwelling from './dwellingAPI';

const Dwelling = () => {
  const { dwellingID } = useParams();
  const dwellingIDNumber = parseInt(dwellingID, 10);
  const { dwelling, error } = useDwelling(dwellingIDNumber);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const token = localStorage.getItem('access_token');
  const refreshToken = localStorage.getItem('refresh_token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Перевірка токену
        const response = await axios.post(
          `${API_URL}/api/auth/jwt/verify/`,
          { token: token },
        );

        console.log('Token Verification Response:', response.data);

        setIsLoading(false);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error verifying token:', error);

        // Оновлення токену
        try {
          const refreshResponse = await axios.post(
            `${API_URL}/api/auth/jwt/refresh/`,
            { refresh: refreshToken },
          );

          const newAccessToken = refreshResponse.data.access;
          localStorage.setItem('access_token', newAccessToken);

          setIsLoading(false);
          setIsAuthenticated(true);
        } catch (refreshError) {
          console.error('Error refreshing token:', refreshError);

          setIsLoading(false);
          setIsAuthenticated(false);
        }
      }
    };

    fetchData();
  }, [dwellingIDNumber, token, refreshToken]);

  const handleShowReviewForm = () => {
    setShowReviewForm(true);
  };

  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : error ? (
        <Typography variant="body1" color="error">
          Помилка отримання даних: {error.message}
        </Typography>
      ) : (
        <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
          <DwellingInfo dwelling={dwelling} />
        </Paper>
      )}
      {showReviewForm && <ReviewForm onSaveReview={(reviewData) => console.log('Saving review:', reviewData)} />}
      {!isAuthenticated && (
        <Typography variant="body1" color="error">
          Для залишення коментарів потрібно бути зареєстрованим на сайті.
        </Typography>
      )}
      {isAuthenticated && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button variant="contained" color="primary" onClick={handleShowReviewForm}>
            Залишити відгук
          </Button>
        </Box>
      )}
      {dwelling.city && dwelling.city.name && (
        <Grid container justifyContent="center">
          <Grid item xs={12} md={6}>
            <GeoMap address={"48.618531, 22.291568"} />
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default Dwelling;
