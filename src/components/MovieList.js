// src/components/MovieList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/MovieList.module.css';
import { fetchMovies } from '../services/movieService';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const moviesData = await fetchMovies();
        setMovies(moviesData);
      } catch (error) {
        setError('Failed to fetch movies');
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <li key={movie.id} className={styles.item}>
              <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
              <p>Rating: {movie.rating.toFixed(1)}</p>
            </li>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </ul>
    </div>
  );
};

export default MovieList;
