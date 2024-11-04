import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Basics from './components/Basics';
import Contact from './components/Contact';
import Destinations from './components/Destinations';
import CostGear from './components/CostGear';
import Footer from './components/Footer';
import Header from  './components/Header';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basics" element={<Basics />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/costgear" element={<CostGear />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
