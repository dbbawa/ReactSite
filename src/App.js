import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Basics from './pages/Basics';
import Contact from './pages/Contact';
import Destinations from './pages/Destinations';
import CostGear from './pages/CostGear';
import Footer from './components/Footer';
import Header from  './components/Header';
import Banner from './components/Banner';
import './styles.css';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <Navbar />
        <Banner/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basics" element={<Basics />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/costgear" element={<CostGear />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
