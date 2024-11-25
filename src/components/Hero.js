import React from 'react';
import graduationPhoto from '../assets/images/graduation-photo.jpg';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="animated-background"></div>
      <div className="content-wrapper">
        <div className="text-content">
          <h1>Hello,</h1>
          <h1 className="name-text">Ranith here! <span className="wave hand-emoji">👋</span></h1>
          
          <div className="description">
            <p>
              I’m a Software Developer with a relentless drive for innovation and an ambition to launch my own transformative startup.🚀
            </p>
            <p>
              🔗 Blending skills in Full Stack Development and AI/ML to create solutions that inspire and solve real-world problems. I aim to craft technology that drives change and builds a better future. 🌍💻
            </p>
            <p>
              📍 Hyderabad-Based | CSE '24 | Intern @ Menteve
              <p>
                Entrepreneurship fuels my vision, and cutting-edge innovation powers my path. ⚡
              </p>
            </p>
          </div>

          <p className="carpe-diem">Carpe Diem! ✨ 💫</p>

          <div className="social-links">
            <a href="#" target="_blank"><i className="fab fa-github"></i></a>
            <a href="#" target="_blank"><i className="fab fa-linkedin"></i></a>
            <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
            <a href="#" target="_blank"><i className="fab fa-behance"></i></a>
          </div>

          <div className="cta-buttons">
            <a 
              href="https://drive.google.com/file/d/1f0Ar9wzDgb_1_VttOU_Yy1kWqmMgfQzO/view?usp=drive_link"
              className="email-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a 
              href="mailto:ranithkumar04@gmail.com"
              className="email-btn"
            >
              ranithkumar04@gmail.com
            </a>
          </div>
        </div>

        <div className="image-container">
          <img src={graduationPhoto} alt="Ranith Kumar" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
