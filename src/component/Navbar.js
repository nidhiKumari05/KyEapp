import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Navbar() {
  return (
    <AppBar 
      position="sticky" 
      
      sx={{ 
        background: 'black', 
        zIndex:"1"
      }}
    >
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          KYC Products
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/contacts">
            Contacts
          </Button>
        </Box>
        <Avatar alt="User"  component={Link} to="/profile" style={{ marginLeft: '10px' }} />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
