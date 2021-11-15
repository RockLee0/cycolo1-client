import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';


const Cycle = (props) => {
    const {_id,Model_Name,description,img,price}=props.cycle;

    return (
        <Grid item xs={4} sm={4} md={4}>

        <Card sx={{ minWidth: 275,boxShadow: 0 , height:'100%'  }}>
        <CardMedia
                component="img"
                style={{width:'100%',height:'200px',margin:'0 auto'}}
                image={img}
                alt="green iguana"
        />
              <CardContent sx={{height:1}}>
                
                <Typography variant="h5" component="div">
              {Model_Name}
                </Typography>
                <Typography variant="h6" component="div">
              $ {price}
                </Typography>
                <Typography variant="body2">
                 {description}
                </Typography>
                <Link to={`/purchase/${_id}`} style={{textDecoration:'none'}}>  <Button  variant="contained" sx={{textDecoration:'none'}}>Buy Now</Button> </Link>
              
              </CardContent>
              
            </Card>
        
        </Grid>
    );
};

export default Cycle;