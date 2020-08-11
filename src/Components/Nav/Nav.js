import React, { useState } from 'react';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useSpring, animated } from 'react-spring';

const themes = require('../../themes.json');

export const Nav = (props) => {
  const [homeHovering, setHomeHovering] = useState(false);
  const homeSpring = useSpring({
    color: homeHovering ? '#fff' : themes[props.theme]['link-color'],
  });

  const [aboutHovering, setAboutHovering] = useState(false);
  const aboutSpring = useSpring({
    color: aboutHovering ? '#fff' : themes[props.theme]['link-color'],
  });

  const [workHovering, setWorkHovering] = useState(false);
  const workSpring = useSpring({
    color: workHovering ? '#fff' : themes[props.theme]['link-color'],
  });

  const [contactHovering, setContactHovering] = useState(false);
  const contactSpring = useSpring({
    color: contactHovering ? '#fff' : themes[props.theme]['link-color'],
  });

  const [LIHovering, setLIHovering] = useState(false);
  const LISpring = useSpring({
    color: LIHovering ? '#fff' : themes[props.theme]['link-color'],
  });

  const [GHHovering, setGHHovering] = useState(false);
  const GHSpring = useSpring({
    color: GHHovering ? '#fff' : themes[props.theme]['link-color'],
  });

  return (
    <div className={`navbar-grid ${props.theme}`}>
      <div className="mascots">
        <div className="mascot-1 image"></div>
        <div className="mascot-2 image"></div>
      </div>
      <nav className={`nav-flex-container ${props.theme}`}>
        <animated.a
          className={`home ${props.theme}`}
          href="#home"
          style={{ ...homeSpring }}
          onMouseOver={() => setHomeHovering(true)}
          onMouseOut={() => setHomeHovering(false)}>
          Home
        </animated.a>
        <animated.a
          className={`about ${props.theme}`}
          href="#about"
          style={{ ...aboutSpring }}
          onMouseOver={() => setAboutHovering(true)}
          onMouseOut={() => setAboutHovering(false)}>
          About
        </animated.a>
        <animated.a
          className={`work ${props.theme}`}
          href="#work"
          style={{ ...workSpring }}
          onMouseOver={() => setWorkHovering(true)}
          onMouseOut={() => setWorkHovering(false)}>
          Work
        </animated.a>
        <animated.a
          className={`contact ${props.theme}`}
          href="#contact"
          style={{ ...contactSpring }}
          onMouseOver={() => setContactHovering(true)}
          onMouseOut={() => setContactHovering(false)}>
          Contact
        </animated.a>
        <animated.a
          className="linkedin"
          href="https://www.linkedin.com/in/boydduffiev/"
          target="_blank"
          style={{ ...LISpring }}
          onMouseOver={() => setLIHovering(true)}
          onMouseOut={() => setLIHovering(false)}>
          <FontAwesomeIcon icon={faLinkedin} />
        </animated.a>
        <animated.a
          className="github"
          href="https://github.com/boydDuffie"
          target="_blank"
          style={{ ...GHSpring }}
          onMouseOver={() => setGHHovering(true)}
          onMouseOut={() => setGHHovering(false)}>
          <FontAwesomeIcon icon={faGithub} />
        </animated.a>
      </nav>
    </div>
  );
};
