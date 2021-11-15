import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Alert, AlertTitle, Button, CircularProgress, TextField, Tooltip, Typography } from '@mui/material';
import { NavLink,useLocation,useHistory, Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const [loginData,setLoginData]=useState({});

    const {user,LogIn,isLoading,authError}=useAuth();

    const location=useLocation();
    const history =useHistory();

    const handleLoginSubmit=e=>{
      LogIn(loginData.email,loginData.password,location,history );


        e.preventDefault();
    }
    const handleOnchange=e=>{

        const feild=e.target.name;
        const value=e.target.value;
        const newLoginData={...loginData};
        newLoginData[feild]=value;
        setLoginData(newLoginData);
        

        e.preventDefault();
    }  
    console.log(user);              

    return (
        <Box sx={{ flexGrow: 1 }}>
           <Tooltip title="Home" arrow>
           <Link to="/" style={{textDecoration:'none'}}><Button >Go Back </Button></Link>
</Tooltip>
        <Grid sx={{my:8}}  container spacing={2}>
          <Grid sx={{my:'auto'}} item xs={12} md={6}>
          <Typography sx={{mb:2 ,fontSize:"25px"}} variant="body1" gutterBottom>
        Login
      </Typography>
      {!isLoading && <form  onSubmit={handleLoginSubmit}>
    <TextField
        sx={{ width: '75%', m: 1 }}
        id="standard-basic"
        label="Your Email"
        name="email"  
        onChange={handleOnchange}                    
        variant ="standard" />
    <TextField
        sx={{ width: '75%', m: 1 }}
        id="standard-basic"
        label="Your Password"
        onChange={handleOnchange}                    
        name="password"
        type="password"
        variant="standard" />
        <Button  sx={{ width: '75%', m: 1 }} type="submit" variant="contained">LogIn </Button>
        
        <NavLink to="/register" style={{textDecoration:'none'}}><Button  sx={{ width: '75%', m: 1 }} variant="text">Haven't registered?Please do it first</Button></NavLink>

      </form>}

      {
        isLoading && <CircularProgress />
      }
      {
        user?.email && <Alert severity="success">Logged in successfully </Alert>
      }
      {
        authError && <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {authError}<strong>check it out!</strong>
      </Alert>
      }

          </Grid>
          <Grid item xs={12} md={6}>
            <img style={{width:'100%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJpFavgeZkzwyI1G3Ir1giwSg0ULHIegcX_CEvYKK-3KtDcDHxiwPlxR5toLzMUTZfyJQ&usqp=CAU" alt="login" />
          </Grid>
        </Grid>
      </Box>
    );
};

export default Login;