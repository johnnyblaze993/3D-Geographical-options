//@ts-nocheck
import React, { useEffect, useRef } from 'react';
// import { AppStream } from '@omniverse/omniverse-webrtc-streaming-library';
import BackButton from '../components/BackButton';

const Nvidia = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const streamConfig = {
      container: videoRef.current,
      serverURL: 'ws://localhost:3009', // Replace with your Omniverse server URL
      onConnect: () => console.log('Connected to Omniverse server'),
      onDisconnect: () => console.log('Disconnected from Omniverse server'),
    };

    const appStream = new AppStream(streamConfig);
    appStream.connect();

    return () => {
      appStream.disconnect();
    };
  }, []);

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <BackButton />
      <div ref={videoRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default Nvidia;
