App.js

import React, { useState } from 'react';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Work from './components/Work';

function App() {
  const [currentSection, setCurrentSection] = useState('hero');

  const openResume = () => {
    window.open('https://drive.google.com/file/d/1f0Ar9wzDgb_1_VttOU_Yy1kWqmMgfQzO/view?usp=drive_link', '_blank');
  };

  const goToHome = () => {
    setCurrentSection('hero');
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo" onClick={goToHome} role="button" tabIndex={0}>
          RANITH KUMAR
        </div>
        <div className="nav-links">
          <button onClick={() => setCurrentSection('work')}>My Work</button>
          <button onClick={openResume}>Resume</button>
          <button onClick={() => setCurrentSection('contact')}>Contact</button>
        </div>
      </nav>

      <main className="main-content">
        {currentSection === 'hero' && <Hero />}
        {currentSection === 'work' && <Work />}
        {currentSection === 'contact' && <Contact />}
      </main>
    </div>
  );
}

export default App;
