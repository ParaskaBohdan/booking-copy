import React, { useState } from 'react';
import { Button, TextField, Typography, Snackbar } from '@mui/material';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handlePayment = () => {
    // Перевірка на заповненість усіх полів
    if (cardNumber && expiryDate && cvv && phoneNumber) {
      // Тут ви можете додати логіку для обробки оплати
      // Наприклад, вивести повідомлення про успішну оплату
      setOpenSnackbar(true);
    } else {
      // Якщо не всі поля заповнені, вивести повідомлення про неправильні дані
      alert('Будь ласка, заповніть всі поля коректно');
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Оплата
      </Typography>
      <form>
        <TextField
          label="Card Number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value.replace(/[^\d]/g, ''))}
          inputProps={{ maxLength: 16 }}
        />
        <TextField
          label="Date (MM/YY)"
          variant="outlined"
          fullWidth
          margin="normal"
          value={expiryDate}
          onChange={(e) => {
            const sanitizedValue = e.target.value.replace(/[^\d]/g, '');
            const maxLength = 4;
            const formattedValue =
              sanitizedValue.length > 2
                ? `${sanitizedValue.slice(0, 2)}/${sanitizedValue.slice(2, maxLength)}`
                : sanitizedValue;
            setExpiryDate(formattedValue.slice(0, maxLength));
          }}
          inputProps={{ maxLength: 4 }}
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
