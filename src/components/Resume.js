import React from 'react';

const Resume = () => {
  return (
    <div className="resume-section">
      <h2>Resume</h2>
      
      <div className="resume-content">
        <section className="education">
          <h3>Education</h3>
          <div className="education-item">
            <h4>Bachelor of Technology in Computer Science</h4>
            <p>Mahatma Gandhi Institute of Technology, Hyderabad</p>
            <p>July 2024 | Percentage: 65%</p>
          </div>
        </section>

        <section className="experience">
          <h3>Experience</h3>
          <div className="experience-item">
            <h4>Web Developer Intern</h4>
            <p>Menteve, Hyderabad</p>
            <p>August 2024 - December 2024</p>
            <ul>
              <li>Developed web app features for real-time EEG data visualization</li>
              <li>Integrated EEG data storage to the cloud</li>
              <li>Enhanced front-end functionality</li>
            </ul>
          </div>
        </section>

        <section className="skills">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            <div>
              <h4>Programming Languages</h4>
              <p>Java, SQL, Python, JavaScript, HTML/CSS, Flutter, C#</p>
            </div>
            <div>
              <h4>Frameworks & Tools</h4>
              <p>React.js, Bootstrap</p>
            </div>
            <div>
              <h4>IoT & Embedded Systems</h4>
              <p>Arduino, LED, Sensor Integration</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume; 