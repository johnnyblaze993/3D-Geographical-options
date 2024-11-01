// src/pages/Home.tsx
import { Link } from 'react-router-dom';
import { Container, Box, Button, AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

function Home() {
  const buttonStyle = {
    borderRadius: '50px', // Creates a pill-shaped button
    padding: '12px 24px', // Adjusts padding for a larger button
    fontSize: '16px', // Increases font size
    width: '200px', // Sets a fixed width
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: 'black',
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cesium Competitors
          </Typography>
        </Toolbar>
      </AppBar>
      <Container
        sx={{
          display: 'flex',
        //   flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          paddingTop: 4,
          height: '100%',
        }}
      >
        <Button variant="contained" component={Link} to="/google-earth" sx={buttonStyle}>
          Google Earth
        </Button>
        <Button variant="contained" component={Link} to="/nvidia" sx={buttonStyle}>
          Nvidia
        </Button>
        <Button variant="contained" component={Link} to="/mapbox-gl-js" sx={buttonStyle}>
          MapBox GL JS
        </Button>
        <Button variant="contained" component={Link} to="/maplibre-gl" sx={buttonStyle}>
          MapLibre GL
        </Button>
      </Container>
    </Box>
  );
}

export default Home;
