import { Typography } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const Payment = () => {
    return (
        <>
        <Navigation></Navigation>
          <Typography variant="body2" sx={{my:8,color:'red'}}>
              Payment system is coming soon . 
          </Typography>  
          <Footer> </Footer>
        </>
    );
};

export default Payment;