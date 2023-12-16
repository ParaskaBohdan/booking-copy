import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, Box } from '@mui/material';

function Signout() {
  const navigate = useNavigate();

  const handleSignout = () => {
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('access_token');
    navigate('/');
    window.location.reload();
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Typography variant="h2">Signout</Typography>
      <Button variant="contained" color="primary" onClick={handleSignout}>
        Вийти
      </Button>
    </Box>
  );
}

export default Signout;
