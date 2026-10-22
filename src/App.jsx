import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import ServicesDetail from './pages/ServicesDetail';
import BehindScenes from './pages/BehindScenes';
import PriceList from './pages/PriceList';

function App() {
  return (
    <Router>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesDetail />} />
        <Route path="/behind-the-scenes" element={<BehindScenes />} />
        
        <Route path="/pricelist" element={<PriceList />} /> 
      </Routes>
    </Router>
  );
}

export default App;
