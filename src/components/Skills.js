import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Technical Skills</h2>
      
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>SQL</li>
            <li>Flutter</li>
            <li>C#</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Frameworks & Tools</h3>
          <ul>
            <li>React.js</li>
            <li>Bootstrap</li>
            <li>TensorFlow</li>
            <li>Keras</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>IoT & Embedded Systems</h3>
          <ul>
            <li>Arduino</li>
            <li>LED</li>
            <li>Sensor Integration</li>
            <li>Accelerometer</li>
            <li>Ultrasonic Sensor</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Languages</h3>
          <ul>
            <li>English</li>
            <li>Hindi</li>
            <li>Telugu</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
