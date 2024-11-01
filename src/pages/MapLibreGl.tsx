//@ts-nocheck
import React, { useRef, useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import { Box } from '@mui/material';
import BackButton from '../components/BackButton';
import 'maplibre-gl/dist/maplibre-gl.css';

const MapLibreMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      const map = new maplibregl.Map({
        container: mapContainerRef.current,
        style: 'https://api.maptiler.com/maps/hybrid/style.json?key=nWzQgPwBI9oUFEQVLSrd', // Hybrid style with high-resolution satellite imagery
        center: [-98.5795, 39.8283], // Centered on the USA
        zoom: 3,
        pitch: 45, // Tilt the map for a 3D perspective
      });

      map.on('load', () => {
        // Add the DEM source for terrain
        map.addSource('terrain', {
          type: 'raster-dem',
          url: 'https://api.maptiler.com/tiles/terrain-rgb/tiles.json?key=nWzQgPwBI9oUFEQVLSrd',
          tileSize: 256,
          maxzoom: 12,
        });

        // Set the terrain using the DEM source
        map.setTerrain({ source: 'terrain', exaggeration: 1.5 });

        // Optionally, add a sky layer for better visualization
        map.addLayer({
          id: 'sky',
          type: 'sky',
          paint: {
            'sky-type': 'atmosphere',
            'sky-atmosphere-sun': [0.0, 0.0],
            'sky-atmosphere-sun-intensity': 15,
          },
        });
      });

      return () => map.remove();
    }
  }, []);

  return (
    <Box sx={{ position: 'relative', height: '100vh' }}>
      <BackButton />
      <Box
        ref={mapContainerRef}
        sx={{ width: '100%', height: '100%' }}
      />
    </Box>
  );
};

export default MapLibreMap;
