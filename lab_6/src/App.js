// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => (
  <div>
    <Navbar />
    <Home />
    <About />
    <Services />
    <Portfolio />
    <Contact />
    <Footer />
  </div>
);

export default App;
