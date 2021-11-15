import React from 'react';
import  { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Typography from '@mui/material/Typography';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { Button } from '@mui/material';


const Purchase = () => {

    const { cycleId } = useParams();

    const [cycle,setCycle]=useState({});
    const {user}=useAuth();
// get the information through id 
    useEffect(()=>{
        fetch(`https://peaceful-sea-78260.herokuapp.com/cycles/${cycleId}`)
        .then(res=>res.json())
        .then(data=>setCycle(data));
    },[])
  


    // post the order using axios
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        axios.post('https://peaceful-sea-78260.herokuapp.com/purchase', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product added successfully');
                    reset();
                }
            })
    };
    console.log(user.displayName);

    return (
        <>
         
         <Typography variant="body2">
            Buyer's name: {user?.displayName}
            Email: {user?.email }

         </Typography>
         <Typography variant="caption">
            product informations: <br />
            Model name: {cycle.Model_Name} <br />
            price : {cycle.price}
         </Typography>
         <Typography variant="h6">
            Add additional information to purchase this product  :
         </Typography>

         <form onSubmit={handleSubmit(onSubmit)} >
                <TextField {...register("Email")} id="outlined-basic"  variant="outlined" value={user.email} />
                <TextField {...register("Model")} id="outlined-basic" label="Input the Model name from above " variant="outlined" />
                <TextField {...register("Number")} id="outlined-basic" label="Phone no" variant="outlined" />
                <TextField {...register("quantity")} id="outlined-basic" label="Type your quantity of product" variant="outlined" />
                <TextField {...register("preference")} id="outlined-basic" label="Which color do you want?" variant="outlined" />
                <TextField {...register("place")} id="outlined-basic" label="Your Home address" variant="outlined" />
                <Button  sx={{my:2}} variant="contained" type="submit"> Order </Button>
            </form>
         
        
        </>
    );
};

export default Purchase;