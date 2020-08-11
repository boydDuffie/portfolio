import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './ThemePicker.css';

export const ThemePicker = (props) => {
  const handleChange = (e) => {
    props.handleChange(e.target.value);
  };

  const [themeStyle, setThemeStyle] = useSpring(() => ({
    fontFamily: "'Ubuntu', sans-serif",
  }));

  useEffect(() => {
    switch (props.theme) {
      case 'kraken':
        setThemeStyle({
          fontFamily: "'Raleway', sans-serif",
        });
        break;
      case 'vampire':
        setThemeStyle({
          fontFamily: "'Montserrat', sans-serif",
        });
        break;
      case 'yeti':
        setThemeStyle({
          fontFamily: "'Ubuntu', sans-serif",
        });
        break;
      case 'phoenix':
        setThemeStyle({
          fontFamily: "'Ubuntu', sans-serif",
        });
        break;
      case 'griffin':
        setThemeStyle({
          fontFamily: "'Roboto', sans-serif",
        });
        break;
      case 'dragon':
        setThemeStyle({
          fontFamily: "'Roboto', sans-serif",
        });
        break;
    }
  }, [props.theme]);

  return (
    <div className="themepicker-container">
      <div></div>
      <div className="themepicker-flex-container">
        <p style={{ ...themeStyle }}>Theme:&nbsp;</p>
        <animated.select
          className="menu"
          onChange={handleChange}
          style={{ ...themeStyle }}>
          <option value="kraken">Kraken</option>
          <option value="vampire">Vampire</option>
          <option value="yeti" selected>
            Yeti
          </option>
          <option value="phoenix">Phoenix</option>
          <option value="griffin">Griffin</option>
          <option value="dragon">Dragon</option>
        </animated.select>
        <div className="theme-picker-profile image"></div>
      </div>
    </div>
  );
};
