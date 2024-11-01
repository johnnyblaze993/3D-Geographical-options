// src/pages/GoogleEarth.tsx
import React from 'react';
import BackButton from '../components/BackButton';

function GoogleEarth() {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: 2,
    }}>
      <BackButton />
      <h1>Google Earth</h1>
      {/* Add your content here */}
    </div>
  );
}

export default GoogleEarth;
