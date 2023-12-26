import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, TextField, Typography, Snackbar } from '@mui/material';

const PaymentPage = (props) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const {price} = useParams();
  const pricefix = parseInt(price, 10);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handlePayment = () => {
    if (cardNumber && expiryDate && cvv && phoneNumber) {
      setOpenSnackbar(true);
    } else {
      alert('Будь ласка, заповніть всі поля коректно');
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Оплата за бронювання: {pricefix} грн
      </Typography>
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
