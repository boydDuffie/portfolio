import React from 'react';
import './App.css';
import { Nav } from '../Nav/Nav';
import { ThemePicker } from '../ThemePicker/ThemePicker';
import { HomeContent } from '../HomeContent/HomeContent';
import { AboutContent } from '../AboutContent/AboutContent';
import { WorkContent } from '../WorkContent/WorkContent';
import { ContactContent } from '../ContactContent/ContactContent';

export const App = () => {
  return (
    <div className="page-container">
      <HomeContent />
      <ThemePicker />
      <Nav />
      <AboutContent />
      <WorkContent />
      <ContactContent />
    </div>
  );
};
