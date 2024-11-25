import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Featured Projects</h2>
      
      <div className="project-grid">
        <div className="project-card">
          <h3>IoT-Enabled Smart Walk Stick</h3>
          <p className="project-year">2024</p>
          <p>Created a smart device with real-time gait analysis and fall detection, 
             enhancing user confidence by 40%. Implemented sensors and data transmission 
             to improve mobility safety.</p>
          <div className="tech-stack">
            <span>IoT</span>
            <span>Sensors</span>
            <span>Real-time Analysis</span>
          </div>
        </div>

        <div className="project-card">
          <h3>Traffic Sign Recognition System</h3>
          <p className="project-year">2023</p>
          <p>Developed a CNN-based model in TensorFlow to classify traffic signs, 
             enhancing road safety. Achieved a 40% improvement in traffic signal 
             recognition accuracy.</p>
          <div className="tech-stack">
            <span>Deep Learning</span>
            <span>TensorFlow</span>
            <span>CNN</span>
          </div>
        </div>

        <div className="project-card">
          <h3>CheersHYD Website</h3>
          <p className="project-year">2022</p>
          <p>Designed an engaging website for Hyderabad's dining scene using 
             modern web technologies.</p>
          <div className="tech-stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
