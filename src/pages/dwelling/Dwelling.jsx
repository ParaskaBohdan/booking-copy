import React, { useState, useEffect } from 'react';
// eslint-disable-next-line
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
import { useNavigate } from 'react-router-dom';

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
  //eslint-disable-next-line
  const [dateConfirm, setDateConfirm] = useState(true);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);

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
    try {
        const token = await axios.post(
            `${API_URL}/api/auth/jwt/refresh/`,
            { refresh: localStorage.getItem('refresh_token') },
            );
        if (token.status === 200){
            localStorage.setItem('access_token', token.data.access);
        }
    }
    catch (error) {
        console.error('Error refreshing token:', error);
    }
    const axiosConfig = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      };
    try{
        //eslint-disable-next-line
        const response = await axios.post(
        `${API_URL}/api/reviews/`,
        {
            'rating': 5,
            'comment': comment,
            'dwelling': dwelling.id
        },
        axiosConfig
        );
    }
    catch (error) {
        console.error('Error refreshing token:', error);
    }

  };

  const navigate = useNavigate();

  const calculatePrice = () => {
    if (!dates.entryDate || !dates.exitDate) {
      alert("Please, choose dates");
      setDateConfirm(false);
      return; 
    }
  
    if (dates.entryDate > dates.exitDate) {
      alert("Please, choose correct dates");
      setDateConfirm(false);
      return; 
    }
  
    const isDateOccupied = dwelling.occupied_dates.some((date) => {
        return date.check_in <= dates.exitDate && date.check_out >= dates.entryDate;
      });
      
  
    if (isDateOccupied) {
      alert("This date is already occupied");
      setDateConfirm(false);
      return; 
    }
  //eslint-disable-next-line
    if (dateConfirm === false) {
      setDateConfirm(true);
      return;
    }
  
    const params = {
      entry_date: dates.entryDate,
      exit_date: dates.exitDate,
      dwelling: dwellingIDNumber,
      price: dwelling.price,
    };
    navigate('/payment', { state: params });
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
            <Button variant="contained" color="primary" onClick={calculatePrice}>
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
