import { Paper, Rating, Typography } from '@mui/material';
import React from 'react';

const Feedback = ({rating,data}) => {
    
    return (
        <Paper sx={{p:3}}>

            <Typography variant="caption">
                {data}
            </Typography> <br />
            <Rating name="read-only" value={rating} readOnly />
        </Paper>
    );
};

export default Feedback;