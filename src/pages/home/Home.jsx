import React from 'react';
import { Typography, Container, Button, Box } from '@mui/material';
import './style.css'


const Home = () => {
    return ( 
    <>
    <Container>
      
        <Typography variant="h3" align="center" mt={4}>
          Welcome to Booking-copy.com
        </Typography>
        <Typography variant="body1" align="center" mt={2}>
          Your Ultimate Travel Companion!
        </Typography>
        <Typography variant="body2" align="center" mt={2}>
          Discover a world of seamless bookings and unbeatable deals. Book with confidence, travel with ease – only at Booking-copy.com.
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Button variant="contained" color="primary" mt={4}>
          Start Your Journey
        </Button>
      </Box>
    </Container>
    </> );
}
 
export default Home;