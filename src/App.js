// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import Header from './components/Header';
import styles from './styles/App.module.css';

function App() {
  return (
    <Router>
      <Header />
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
