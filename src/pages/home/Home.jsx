import React from 'react';
import { Typography, Container, Button, Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
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
        <Link component={RouterLink} to="/registry" underline="none">
          <Button variant="contained" color="primary">
            Start Your Journey
          </Button>
        </Link>
      </Box>
    </Container>
    </> );
}
 
export default Home;