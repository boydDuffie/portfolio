import React, { useEffect } from 'react';
import './HomeContent.css';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export const HomeContent = (props) => {
  return (
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
        <div
          className="welcome"
          onClick={() =>
            window.scroll({
              top: window.innerHeight,
              left: 0,
              behavior: 'smooth',
            })
          }>
          <FontAwesomeIcon icon={faChevronDown} />
          <p className={props.theme}>Welcome</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};
