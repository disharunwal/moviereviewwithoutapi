// src/components/Header.js
import React from 'react';
import styles from '../styles/App.module.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="Movie Review Logo" />
      <h1>Movie Review App</h1>
    </div>
  );
};

export default Header;
