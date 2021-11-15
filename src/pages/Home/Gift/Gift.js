import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Gift = () => {
    return (
        <div>
            <Typography variant="h6" sx={{color:'blue'}}> Crismas is coming.We have some offer for you. </Typography>
          <Link to="/giftpage"><img style={{width:'100%'}} src="https://www.evanscycles.com/images/marketing/gg-header-1920x574.jpg" alt=" a gift pagee" /></Link> 
        </div>
    );
};

export default Gift;