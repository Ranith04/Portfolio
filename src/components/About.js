import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a Computer Science Engineering graduate from Mahatma Gandhi Institute 
            of Technology, Hyderabad, with a strong foundation in both frontend and 
            backend development.
          </p>
          
          <div className="education">
            <h3>Education</h3>
            <div className="education-item">
              <h4>B.Tech in Computer Science and Engineering</h4>
              <p>Mahatma Gandhi Institute of Technology, Hyderabad</p>
              <p>Graduation: July 2024 | Percentage: 65%</p>
            </div>
            <div className="education-item">
              <h4>Senior Secondary (JEE-MAINS)</h4>
              <p>Alphores Junior College, Karimnagar</p>
              <p>March 2020 | Percentage: 95.5%</p>
            </div>
          </div>

          <div className="certifications">
            <h3>Certifications</h3>
            <ul>
              <li>Programming Essentials in Python</li>
              <li>Java by Oracle</li>
              <li>Oracle Database 11g: Program with PL/SQL</li>
              <li>Cloud Computing (NPTEL)</li>
              <li>Front End Development (Great Learning)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
