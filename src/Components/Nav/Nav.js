import React from 'react';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Nav = (props) => {
  return (
    <div className="navbar-grid">
      <div className="mascots">
        <img />
        <img />
      </div>
      <nav className="flex-container">
        <a className="home" href="/">
          Home
        </a>
        <a className="about" href="#about">
          About
        </a>
        <a className="work" href="#work">
          Work
        </a>
        <a className="contact" href="#contact">
          Contact
        </a>
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/boydduffiev/"
          target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          className="github"
          href="https://github.com/boydDuffie"
          target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </nav>
    </div>
  );
};
