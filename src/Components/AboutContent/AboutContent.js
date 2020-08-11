import React from 'react';
import './AboutContent.css';

export const AboutContent = (props) => {
  return (
    <div className="about-container" id="about">
      <div></div>
      <div className="about-content">
        <div>
          <h1>Hello, World!</h1>
          <p className="bio">
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
        <div>
          <a href="#work">Projects</a>
          <div className="arrow">&darr;</div>
        </div>
      </div>
      <div>
        <div className="headshot image"></div>
      </div>
    </div>
  );
};
