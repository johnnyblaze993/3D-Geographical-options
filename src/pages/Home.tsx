// src/pages/Home.tsx
import { Link } from 'react-router-dom';
import { Container, Box, Button, AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { WidthFull } from '@mui/icons-material';

function Home() {
    const buttonStyle = {
        borderRadius: '50px', // Creates a pill-shaped button
        padding: '12px 24px', // Adjusts padding for a larger button
        fontSize: '16px', // Increases font size
        width: '200px', // Sets a fixed width
      }
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cesium Competitors
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box
          sx={{
            display: 'flex',
            // flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '90vh',
            gap: 2,
          }}
        >
          <Button variant="contained" component={Link} to="/google-earth" sx={buttonStyle}>
            Google Earth
          </Button>
          <Button variant="contained" component={Link} to="/mapbox-gl-js"sx={buttonStyle}>
            MapBox GL JS
          </Button>
          <Button variant="contained" component={Link} to="/nvidia"sx={buttonStyle}>
            Nvidia
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default Home;
