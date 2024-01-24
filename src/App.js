import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/Services';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Support from './components/Support';
import Media from './components/Media';
import Contact from './components/Contact';
import MoreImages from './components/MoreImages'; // Import your MoreImages component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
          <Navbar />
          <Hero />
          <Services />
          <Support />
          <Media />
          <Contact />
        </>} />
        <Route path="/more-images" element={<MoreImages />} />
      </Routes>
    </Router>
  );
}

export default App;
