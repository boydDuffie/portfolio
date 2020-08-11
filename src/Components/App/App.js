import React, { useState, useEffect } from 'react';
import './App.css';
import { Nav } from '../Nav/Nav';
import { ThemePicker } from '../ThemePicker/ThemePicker';
import { HomeContent } from '../HomeContent/HomeContent';
import { AboutContent } from '../AboutContent/AboutContent';
import { WorkContent } from '../WorkContent/WorkContent';
import { ContactContent } from '../ContactContent/ContactContent';

export const App = () => {
  const [theme, setTheme] = useState('yeti');

  return (
    <div className="page-container">
      <ThemePicker handleChange={setTheme} theme={theme} />
      <HomeContent theme={theme} />
      <Nav theme={theme} />
      <AboutContent theme={theme} />
      <WorkContent theme={theme} />
      <ContactContent theme={theme} />
    </div>
  );
};
