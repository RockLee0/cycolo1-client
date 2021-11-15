import { Button, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';

const AddCycle = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://peaceful-sea-78260.herokuapp.com/cycles', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product added successfully');
                    reset();
                }
            })
    };


    return (
        <>
            <Typography variant="h6" sx={{my:2 ,color:'blue'}}>
            To add product you need to fill the form properly
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} >
                <TextField {...register("Model_Name")} id="outlined-basic" label="Model Name" variant="outlined" />
                <TextField {...register("price")} id="outlined-basic" label="Price" variant="outlined" />
                <TextField {...register("description")} id="outlined-basic" label="Description" variant="outlined" />
                <TextField {...register("img")} id="outlined-basic" label="url" variant="outlined" />
                <Button  sx={{my:2}} variant="contained" type="submit"> Add Product</Button>
            </form>
            
        </>
    )
};

export default AddCycle;