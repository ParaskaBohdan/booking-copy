import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, CircularProgress, Paper, Grid, Button, Box } from '@mui/material';
import DwellingInfo from '../../components/dwellingInfo/DwellingInfo';
import GeoMap from '../../components/geoMap/GeoMap';
import ReviewForm from '../../components/reviewForm/ReviewForm';
import { API_URL } from '../..';
import axios from 'axios';
import useDwelling from './dwellingAPI';
import Comments from '../../components/comments/Comments';
import DatePicker from '../../components/datePicker/DatePicker';

const Dwelling = () => {
  const { dwellingID } = useParams();
  const dwellingIDNumber = parseInt(dwellingID, 10);
  const { dwelling, error: dwellingError } = useDwelling(dwellingIDNumber);
  const [isLoadingDwelling, setIsLoadingDwelling] = useState(true);
  //eslint-disable-next-line
  const [dates, setDates] = useState({entryDate: '', exitDate: ''});
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const token = localStorage.getItem('access_token');
  const refreshToken = localStorage.getItem('refresh_token');
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const fetchAuthData = async () => {
      try {
        // eslint-disable-next-line
        const response = await axios.post(
          `${API_URL}/api/auth/jwt/verify/`,
          { token: token },
        );

        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error verifying token:', error);

        try {
          const refreshResponse = await axios.post(
            `${API_URL}/api/auth/jwt/refresh/`,
            { refresh: refreshToken },
          );

          const newAccessToken = refreshResponse.data.access;
          localStorage.setItem('access_token', newAccessToken);

          setIsAuthenticated(true);
        } catch (refreshError) {
          console.error('Error refreshing token:', refreshError);
          setIsAuthenticated(false);
        }
      } finally {
        setIsLoadingAuth(false);
      }
    };

    const fetchDwellingData = async () => {
      try {

        setIsLoadingDwelling(false);
      } catch (error) {
        console.error('Error fetching dwelling data:', error);

      }
    };

    Promise.all([fetchAuthData(), fetchDwellingData()]);
  }, [dwellingIDNumber, token, refreshToken]);

  const handleShowReviewForm = () => {
    setShowReviewForm(true);
  };

  const handleDateChange = (date) => {
    setDates(date);
  };

  const handleSaveReview = async (reviewData) => {
    const comment = reviewData.comment;
    const postdata = {
        rating: 5,
        comment: comment,
        dwelling: dwellingIDNumber,
    }
    const axiosConfig = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };
    try {
    
      if (!dwelling.reviews) {
        dwelling.reviews = [];
      }
    
      dwelling.reviews.push({ comment })
      //eslint-disable-next-line
      const response = await axios.post(
        `${API_URL}/api/reviews/`,
        axiosConfig,
        postdata,
      );
    
    } catch (error) {
      console.error('Error updating dwelling:', error);
    }
  };

  const calculatePrice = async () => {
    const term = dates.exitDate - dates.entryDate;
    console.log(term);
    const term1 = Math.floor(term / (1000 * 60 * 60 * 24));
    console.log(term1);
    setPrice(term * dwelling.price);
};

  return (
    <div>
      {(isLoadingAuth || isLoadingDwelling) ? (
        <CircularProgress />
      ) : dwellingError ? (
        <Typography variant="body1" color="error">
          Помилка отримання даних: {dwellingError.message}
        </Typography>
      ) : (
        <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
          <DwellingInfo dwelling={dwelling} />
        </Paper>
      )}

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <DatePicker onChange={handleDateChange}/>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button component={Link}  to={"/payment/"+price} variant="contained" color="primary" onClick={calculatePrice}>
              Book
            </Button>
        </Box>

<Comments id={dwellingIDNumber} />

    {showReviewForm && <ReviewForm onSaveReview={handleSaveReview} />}
      {!isAuthenticated && (
        <Typography variant="body1" color="error">
          To leave comments, you need to be registered on the site.
        </Typography>
      )}

      {isAuthenticated && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button variant="contained" color="primary" onClick={handleShowReviewForm}>
            Leave Review
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
