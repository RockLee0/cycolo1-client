import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AddCycle from '../../Dashboard/AddCycle/AddCycle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Explore from '../../Explore/Explore';

const Navigation = () => {
  const {user,logOut,admin}=useAuth();

  //dashboard
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Link to="/" > < DirectionsBikeIcon style={{textDecoration:'none',color:'white'}}  /> </Link>
              

            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Cycolo 
            </Typography>
            <Link to="/explore" style={{textDecoration:'none'}}> <Button style={{color:'white'}} color="inherit">Explore</Button> </Link>
            
            

{/* pore use korbone */}

            {
              user?.email?
              <>
              <div>
              <Button style={{textDecoration:'none',color:'white'}}
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to="/payment" style={{textDecoration:'none' ,color:'black'}}> <MenuItem onClick={handleClose}>Payment</MenuItem> </Link>
        <Link to="/myorders" style={{textDecoration:'none' ,color:'black'}}> <MenuItem onClick={handleClose}>My Orders</MenuItem>  </Link>
        <Link to="/review" style={{textDecoration:'none' ,color:'black'}}> <MenuItem onClick={handleClose}>Review</MenuItem> </Link>
        <Link to="/makeAdmin" style={{textDecoration:'none' ,color:'black'}}> <MenuItem onClick={handleClose}>Make Admin</MenuItem> </Link>
        <Link to="/ManageOrders" style={{textDecoration:'none' ,color:'black'}}> <MenuItem onClick={handleClose}>Manage Orders</MenuItem>  </Link>
        <Link to="/ManageReviews" style={{textDecoration:'none' ,color:'black'}}> <MenuItem onClick={handleClose}>Manage Reviews</MenuItem> </Link>
        <Link to="/AddProduct" style={{textDecoration:'none' ,color:'black'}}> <MenuItem onClick={handleClose}>Add Product</MenuItem> </Link>
      </Menu>
    </div>
              <Button style={{textDecoration:'none',color:'white'}} onClick={logOut}  color="inherit">Log Out </Button>
              

              </>
              
              :
             <>
             <Link to="/Addcycle" style={{textDecoration:'none' ,color:'white'}}> <Button  color="inherit">Add cycle</Button>  </Link>
              <Link style={{textDecoration:'none' ,color:'white'}} to="/login"><Button  color="inherit">Login </Button> </Link>
             </>
              

            }

            
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Navigation;