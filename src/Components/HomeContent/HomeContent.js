import React, { useState } from 'react';
import './HomeContent.css';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export const HomeContent = (props) => {
  const [hovering, setHover] = useState(false);
  const welcomeSpring = useSpring({
    transform: hovering ? 'scale(1.1)' : 'scale(1)',
    textShadow: hovering
      ? '0px 5px 5px rgba(0,0,0,0.5)'
      : '0px 0px 0px rgba(0,0,0,0)',
  });

  return (
    <div>
      <div className={`home-background ${props.theme}`}>
        <div className={`home-mascot bg-image ${props.theme}`}></div>
      </div>
      <div className={`home-container ${props.theme}`} id="home">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="home-content">
          <div className={`title-box ${props.theme}`}>
            <h1 className={props.theme}>Boyd Duffie</h1>
            <h2 className={props.theme}>
              Computer Science • University of Florida • 2021
            </h2>
          </div>
          <animated.div
            className="welcome"
            onClick={() =>
              window.scroll({
                top: window.innerHeight,
                left: 0,
                behavior: 'smooth',
              })
            }
            style={{ ...welcomeSpring }}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}>
            <p className={props.theme}>Welcome</p>
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ ...{ fontSize: '2.5vw' } }}
            />
          </animated.div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
