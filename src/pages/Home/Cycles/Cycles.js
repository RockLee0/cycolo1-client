import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Cycle from '../Cycle/Cycle';






const Cycles = () => {

    const [cycles, setCycles] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/cycles')
            .then(res => res.json())
            .then(data => setCycles(data));
    }, [])
    const limitedData=cycles.slice(0,6);
console.log(cycles);
    
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
        <Typography sx={{fontWeight:600,m:5}} variant="h4" component="div">
        Our Products  
          </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
              limitedData.map(cycle=><Cycle 
              key={cycle.name}
              cycle={cycle}
              ></Cycle>)
          }
        </Grid>
        </Container>
      </Box>
    );
};

export default Cycles;