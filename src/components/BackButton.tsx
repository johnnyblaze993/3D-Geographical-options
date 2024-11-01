// src/components/BackButton.tsx
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react';

function BackButton() {
  const navigate = useNavigate();

  return (
    <IconButton
      onClick={() => navigate('/')}
      sx={{ position: 'absolute', top: 16, left: 16 }}
      color="inherit"
    >
      <ArrowBackIcon />
    </IconButton>
  );
}

export default BackButton;
