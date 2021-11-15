import { Button, Rating, TextField, Typography } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Feedbacks from '../../Home/Feedbacks/Feedbacks';



const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const [value, setValue] = React.useState(0);

    const onSubmit = data => {
        console.log(data);

        axios.post('https://peaceful-sea-78260.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Review added successfully');
                    reset();
                }
            })
    };

    return (
        <>
        <Navigation></Navigation>
        <Typography variant="h6" sx={{my:3}}>
            Your Feedback matters:
        </Typography>
        <br />
        
        <Rating
        name="simple-controlled"
       
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        value={value}
      /> <br />

        <form onSubmit={handleSubmit(onSubmit)} >
        <TextField
        {...register("point")}
         sx={{width:'0.1px'}}
                  
          value={value}
        />
            <TextField {...register("review")} id="outlined-basic" label="Your honest thought" variant="outlined" /> <br />
                               
            <Button  sx={{my:2}} variant="contained" type="submit"> Submit </Button>
        </form>
        <Footer></Footer>  
        </>
    );
};

export default Review;