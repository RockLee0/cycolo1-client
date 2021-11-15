import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';



const ManageReviews = () => {
    const { token } = useAuth();
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const url = `https://peaceful-sea-78260.herokuapp.com/reviews`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data));
    });
    return (
        <div>
         <Navigation></Navigation>
           {
               reviews.map(review=><>
               <li>{review.review}</li>
               <Button variant="contained"> Delete </Button>
               </>)
           } 
        </div>
    );
};

export default ManageReviews;