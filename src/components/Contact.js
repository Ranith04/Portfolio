import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Ranith Kumar</h1>

      <div className="contact-options">
        {/* Email Section */}
        <div className="contact-card">
          <h2>Email Me</h2>
          <p>Shoot me an email, I’ll get back to you asap.</p>
          <a href="mailto:ranithkumar04@gmail.com" target="_blank" rel="noopener noreferrer">
            ranithkumar04@gmail.com
          </a>
        </div>

        {/* LinkedIn Section */}
        <div className="contact-card">
          <h2>Connect on LinkedIn</h2>
          <p>Let's connect and share valuable insights.</p>
          <a
            href="https://linkedin.com/in/ranith-kumar"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/ranith-kumar
          </a>
        </div>

        {/* Social Section */}
        <div className="contact-card">
          <h2>Stay Social</h2>
          <p>Catch all the latest updates with me.</p>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-behance"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
