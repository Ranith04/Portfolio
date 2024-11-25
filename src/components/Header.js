import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">RANITH KUMAR</div>
      <div className="nav-links">
        <a href="#work">My Work</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Header;
