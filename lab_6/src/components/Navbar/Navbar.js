// src/components/Navbar/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg fixed-top navbar-dark navbarScroll">
    <div className="container">
      <a className="navbar-brand" href="#">Sandesh</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a> 
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio">Project</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
