// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieList from '../components/MovieList';
import { fetchMovies } from '../services/movieService';
import styles from '../styles/MovieList.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await fetchMovies();
      setMovies(movies);
    };
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Movie List</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
