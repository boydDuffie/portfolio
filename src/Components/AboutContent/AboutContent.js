import React, { useState } from 'react';
import './AboutContent.css';
import { useSpring, animated } from 'react-spring';

export const AboutContent = (props) => {
  const [hovering, setHover] = useState(false);
  const downSpring = useSpring({
    transform: hovering ? 'scale(1.1)' : 'scale(1)',
    textShadow: hovering
      ? '0px 5px 5px rgba(0,0,0,0.5)'
      : '0px 0px 0px rgba(0,0,0,0)',
  });

  return (
    <div className={`about-container ${props.theme}`} id="about">
      <div></div>
      <div className={`about-content ${props.theme}`}>
        <div>
          <h1 className={props.theme}>Hello, World!</h1>
          <p className={`bio ${props.theme}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            maximus, nulla ut commodo sagittis, sapien dui mattis dui, non
            pulvinar lorem felis nec erat. Aliquam egestas, velit at condimentum
            placerat, sem sapien laoreet mauris, dictum porttitor lacus est nec
            enim. Vivamus feugiat elit lorem, eu porttitor ante ultrices id.
            Phasellus suscipit tellus ante, nec dignissim elit imperdiet nec.
            Nullam fringilla feugiat nisl. Ut pretium, metus venenatis dictum
            viverra, dui metus finibus enim, ac rhoncus sem lorem vitae mauris.
            Suspendisse ut venenatis libero. Suspendisse lorem felis, pretium in
            maximus id, tempor non ipsum
          </p>
        </div>
        <div
          onClick={() =>
            window.scroll({
              top: 2 * window.innerHeight,
              left: 0,
              behavior: 'smooth',
            })
          }
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          className="down-arrow">
          <animated.p style={{ ...downSpring }} className={props.theme}>
            Projects
          </animated.p>
          <div>&darr;</div>
        </div>
      </div>
      <div>
        <div className="headshot image"></div>
      </div>
    </div>
  );
};
