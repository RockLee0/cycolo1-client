import { Typography } from '@mui/material';
import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';

const GiftPage = () => {
    return (
        <div>
            <Navigation></Navigation>
            <img style={{width:"100%"}} src="https://www.evanscycles.com/images/marketing/gg-header-1920x574.jpg" alt=" a gift pagee" />
            <Typography variant="body1" sx={{color:'red '}}>
                You have missed the current offer. Please, wait the next offer !!
            </Typography>
        </div>
    );
};

export default GiftPage;