import React, { useEffect } from 'react';
import './HomeContent.css';
import { useSpring, animated } from 'react-spring';

export const HomeContent = (props) => {
  const [themeStyle, setThemeStyle] = useSpring(() => ({
    backgroundImage: 'linear-gradient(to bottom, #b4dae1, #99aec5)',
  }));

  useEffect(() => {
    switch (props.theme) {
      case 'kraken':
        setThemeStyle({
          backgroundImage: 'linear-gradient(to bottom, #6fb1bf, #011526)',
        });
        break;
      case 'vampire':
        setThemeStyle({
          backgroundImage: 'linear-gradient(to bottom, #4d3c6b, #3c3c3c)',
        });
        break;
      case 'yeti':
        setThemeStyle({
          backgroundImage: 'linear-gradient(to bottom, #b4dae1, #99aec5)',
        });
        break;
      case 'phoenix':
        setThemeStyle({
          backgroundImage: 'linear-gradient(to bottom, #7e6147, #f54b22)',
        });
        break;
      case 'griffin':
        setThemeStyle({
          backgroundImage: 'linear-gradient(to bottom, #734014, #a6780c)',
        });
        break;
      case 'dragon':
        setThemeStyle({
          backgroundImage: 'linear-gradient(to bottom, #9f74b8, #61b88a)',
        });
        break;
    }
  }, [props.theme]);

  return (
    <animated.div
      className="home-container"
      id="home"
      style={{ ...themeStyle }}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div className="home-content">
        <div className="title-box">
          <h1>Boyd Duffie</h1>
          <h2>Computer Science • University of Florida • 2021</h2>
        </div>
        <div className="welcome">
          <p>Welcome</p>
        </div>
      </div>
      <div></div>
    </animated.div>
  );
};
