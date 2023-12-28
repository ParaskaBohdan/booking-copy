import React, { useState } from 'react';
import { Button, TextField, Typography, Snackbar } from '@mui/material';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../index';
import { useNavigate } from 'react-router-dom';

const PaymentPage = (props) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [operationStatus, setOperationStatus] = useState('');
    const navigate = useNavigate();
  const location = useLocation();
  const { entry_date, exit_date, price, dwelling } = location.state;

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handlePayment = async () => {
    if (cardNumber && expiryDate && cvv && phoneNumber) {
      setOpenSnackbar(true);
      console.log('data', cardNumber, expiryDate, cvv, phoneNumber, dwelling, entry_date, exit_date);
      try {
        const tokenResponse = await axios.post(
          `${API_URL}/api/auth/jwt/refresh/`,
          { refresh: localStorage.getItem('refresh_token') },
        );
      
        if (tokenResponse.status === 200 && tokenResponse.data && tokenResponse.data.access) {
          localStorage.setItem('access_token', tokenResponse.data.access);
          const axiosConfig = {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
          };
      
          try {
            const dwellingsResponse = await axios.post(
              `${API_URL}/api/payment/`,
              {
                'card_number': cardNumber,
                'expiration_date': expiryDate,
                'cvv': cvv,
                'dwelling': dwelling,
                'check_in': entry_date,
                'check_out': exit_date,
              },
              axiosConfig
            );
            console.log('dwellingsResponse', dwellingsResponse);

            if (dwellingsResponse.status === 200) {
                navigate(`/dwelling/${dwelling}`);
            } else {
                console.error('Payment failed:', dwellingsResponse.data);
                setOperationStatus(false);
            }
      
          } catch (dwellingsError) {
            console.error('Error in dwellings request:', dwellingsError);
            setOperationStatus(false);

          }
        } else {
          console.error('Failed to get access token:', tokenResponse.data);
            setOperationStatus(false);
        }
      } catch (refreshError) {
        console.error('Error refreshing token:', refreshError);
        setOperationStatus(false);
      };
    } else {
      alert('Будь ласка, заповніть всі поля коректно');
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Оплата за бронювання: {price} грн
      </Typography>
      {operationStatus === false && (
        <Typography variant="h6" gutterBottom>
          Оплата не вдалась
        </Typography>
      )}
      <form>
        <TextField
          label="Card Number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value.replace(/[^\d]/g, ''))}
          inputProps={{ maxLength: 16, minLength: 16}}
        />
        <TextField
          label="Date (MM/YY)"
          variant="outlined"
          fullWidth
          margin="normal"
          value={expiryDate}
          onChange={(e) => {
            const sanitizedValue = e.target.value.replace(/[^\d]/g, '');
            const maxLength = 5;
            const formattedValue =
              sanitizedValue.length > 2
                ? `${sanitizedValue.slice(0, 2)}/${sanitizedValue.slice(2, maxLength)}`
                : sanitizedValue;
            setExpiryDate(formattedValue.slice(0, maxLength));
          }}
          inputProps={{ maxLength: 5 }}
        />
        <TextField
          label="CVV"
          variant="outlined"
          fullWidth
          margin="normal"
          value={cvv}
          onChange={(e) => setCvv(e.target.value.replace(/[^\d]/g, ''))}
          inputProps={{ maxLength: 3 }}
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={phoneNumber}
          onChange={(e) => {
            const sanitizedValue = e.target.value.replace(/[^\d+]/g, '');
            setPhoneNumber(sanitizedValue);
          }}
          inputProps={{ maxLength: 15 }}
        />
        <Button variant="contained" color="primary" onClick={handlePayment}>
          Оплатити
        </Button>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Оплата успішна"
      />
    </div>
  );
};

export default PaymentPage;
