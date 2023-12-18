import React, { useState, useEffect } from 'react';
import { Typography, Paper, List, ListItem, ListItemText, CircularProgress } from '@mui/material';
import axios from 'axios';
import { API_URL } from '../..';

const UserPage = () => {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem('access_token');
  const refreshToken = localStorage.getItem('refresh_token');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.post(
          `${API_URL}/api/auth/jwt/verify/`,
          { token: token },
        );

        // console.log('Token Verification Response:', response.data);

        const userResponse = await axios.get(`${API_URL}/api/auth/users/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(userResponse.data[0]);

        // Отримання інформації про бронювання
        // Ваш метод fetchBookings() тут

      } catch (error) {
        console.error('Error fetching user data:', error);

        try {
          const refreshResponse = await axios.post(
            `${API_URL}/api/auth/jwt/refresh/`,
            { refresh: refreshToken },
          );

          const newAccessToken = refreshResponse.data.access;
          localStorage.setItem('access_token', newAccessToken);
        } catch (refreshError) {
          console.error('Error refreshing token:', refreshError);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [token, refreshToken]);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <div>
      {user && (
        <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
          <Typography variant="h4">{user.username}</Typography>
          <Typography variant="subtitle1">{user.email}</Typography>

          {bookings.length > 0 ? (
            <List>
              <Typography variant="h5">Bookings:</Typography>
              {bookings.map((booking, index) => (
                <ListItem key={index}>
                  <ListItemText primary={booking.property} secondary={`Check-in: ${booking.checkIn}, Check-out: ${booking.checkOut}`} />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography variant="body1">No bookings available.</Typography>
          )}
        </Paper>
      )}
    </div>
  );
};

export default UserPage;
