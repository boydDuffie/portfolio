import React from 'react';
import './AboutContent.css';

export const AboutContent = (props) => {
  return (
    <div className={`about-container ${props.theme}`} id="about">
      <div></div>
      <div className="about-content">
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
          className="down-arrow">
          <p className={props.theme}>Projects</p>
          <div>&darr;</div>
        </div>
      </div>
      <div>
        <div className="headshot image"></div>
      </div>
    </div>
  );
};
