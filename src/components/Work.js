import React from 'react';
import './Work.css';

const Work = () => {
  const projects = [
    {
      title: "Smart Walk Stick for Enhanced Mobility (IoT Device)",
      description: "Developed an IoT-enabled Smart Walk Stick to enhance safety and confidence for individuals with mobility challenges.",
      technologies: "Arduino, Python, C/C++",
      outcome: "Increased user confidence by 40% and reduced fall-related injuries by 25%",
      videoUrl: "path/to/smart-walk-stick-video.mp4",
    },
    {
      title: "Traffic Sign Recognition - Convolutional Neural Network (CNN)",
      description: "Developed a deep learning model to accurately identify and classify various traffic signs from images.",
      technologies: "TensorFlow, Python",
      outcome: "Achieved over 95% accuracy on a test dataset.",
      videoUrl: "path/to/traffic-sign-video.mp4",
    },
    {
      title: "CheersHYD - Web Development",
      description: "Created an engaging website to showcase Hyderabad's culinary and nightlife scenes.",
      technologies: "HTML, CSS, JavaScript, Bootstrap",
      outcome: "Enhanced user exploration of Hyderabad's dining and nightlife.",
      videoUrl: "path/to/cheershyd-video.mp4",
    },
  ];

  return (
    <div className="work-section">
      <div className="animated-background"></div>
      <h2>My Work</h2>
      <p className="intro">
        I’m Ranith Kumar, a recent Computer Science graduate from MGIT. Here are some of my notable projects:
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <video className="project-video" controls>
              <source src={project.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies}</p>
            <p><strong>Outcome:</strong> {project.outcome}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work; 