import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Cycles from '../Home/Cycles/Cycles';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Container} from '@mui/material';
import Cycle from '../Home/Cycle/Cycle';



const Explore = () => {
    const [cycles, setCycles] = useState([]);


    useEffect(() => {
        fetch('https://peaceful-sea-78260.herokuapp.com/cycles')
            .then(res => res.json())
            .then(data => setCycles(data));
    }, [])
    return (
        <>
            <Navigation></Navigation>
            <Box sx={{ flexGrow: 1 }}>
        <Container>
        <Typography sx={{fontWeight:600,m:5}} variant="h4" component="div">
        Our Products  
          </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
              cycles.map(cycle=><Cycle
              key={cycle.name}
              cycle={cycle}
              ></Cycle>)
          }
        </Grid>
        </Container>
      </Box>
        </>
    );
};

export default Explore;