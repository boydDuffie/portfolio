import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './ThemePicker.css';

export const ThemePicker = (props) => {
  const handleChange = (e) => {
    props.handleChange(e.target.value);
  };

  return (
    <div className="themepicker-container">
      <div></div>
      <div className="themepicker-flex-container">
        <p className={`menu-label ${props.theme}`}>Theme:&nbsp;</p>
        <select className={`menu ${props.theme}`} onChange={handleChange}>
          <option value="kraken">Kraken</option>
          <option value="vampire">Vampire</option>
          <option value="yeti" selected>
            Yeti
          </option>
          <option value="phoenix">Phoenix</option>
          <option value="griffin">Griffin</option>
          <option value="dragon">Dragon</option>
        </select>
        <div className="theme-picker-profile image"></div>
      </div>
    </div>
  );
};
