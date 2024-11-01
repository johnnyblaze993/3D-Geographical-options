import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GoogleEarth from './pages/GoogleEarth';
import MapBoxGlJS from './pages/MapBoxGlJS';
import Nvidia from './pages/Nvidia';
import MapLibreGl from './pages/MapLibreGl';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/google-earth" element={<GoogleEarth />} />
      <Route path="/mapbox-gl-js" element={<MapBoxGlJS />} />
      <Route path="/nvidia" element={<Nvidia />} />
      <Route path="/maplibre-gl" element={<MapLibreGl />} />
    </Routes>
  );
}

export default App;
