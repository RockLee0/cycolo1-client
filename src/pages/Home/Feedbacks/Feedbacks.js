import { Container, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import Feedback from '../Feedback/Feedback';

const Feedbacks = () => {

  const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch('https://peaceful-sea-78260.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])


    return (
        <Container>
            <Typography sx={{color:'blue'}} variant="h6">
                Clients Oppinions About Us
            </Typography>
            <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
          mb:3
        }, 
      }}
    >

{
      reviews.map(review=><Feedback rating={review.point} data={review.review}></Feedback>)
    }




   
    </Box>

        </Container>
    );
};

export default Feedbacks;