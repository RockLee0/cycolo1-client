import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Grid from '@mui/material/Grid';


const Footer = () => {
    return (
        <>
    <Box sx={{ width: '100%' }}>
      <Grid   sx={{ bgcolor: 'info.main' }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={4}>
          <Typography sx={{fontWeight:'bold',my:2}} variant="body2">
            CUSTOMER CARE
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
        Contact Us 
      </Typography>
          <Typography variant="caption" display="block" gutterBottom>
        Delivery
      </Typography>
          <Typography variant="caption" display="block" gutterBottom>
        Returns & Refunds 
      </Typography>
          <Typography variant="caption" display="block" gutterBottom>
        Payment Options 
      </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
        <Typography sx={{fontWeight:'bold',my:2}} variant="body2">
            SURVICES & REPAIRS
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
        Cycle Services 
      </Typography>
          <Typography variant="caption" display="block" gutterBottom>
        Sell Your Cycle 
      </Typography>
          <Typography variant="caption" display="block" gutterBottom>
       Book An Appointment 
      </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
        <Typography sx={{fontWeight:'bold',my:2}} variant="body2">
            YOURS SRCURITY 
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
        Terms & Conditions 
      </Typography>
          <Typography variant="caption" display="block" gutterBottom>
        Privacy Policy 
      </Typography>
          <Typography variant="caption" display="block" gutterBottom>
       Cookie Policy 
      </Typography>
        </Grid>
        </Grid>
    </Box>
        </>
    );
};

export default Footer;