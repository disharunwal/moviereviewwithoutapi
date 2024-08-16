// src/pages/ReviewPage.js
import React, { useState } from 'react';
import { fetchMovies } from '../services/movieService';
import styles from '../styles/Reviewpage.module.css';

const ReviewPage = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies, setMovies] = useState([]);

  React.useEffect(() => {
    fetchMovies().then(setMovies);
  }, []);

  return (
    <div className={styles.reviewPage}>
      <h2>Select a Movie to Review</h2>
      <select onChange={(e) => setSelectedMovie(e.target.value)} className={styles.movieSelect}>
        <option value="">Select a movie...</option>
        {movies.map((movie) => (
          <option key={movie.id} value={movie.id}>
            {movie.title}
          </option>
        ))}
      </select>

      {selectedMovie && (
        <ReviewFormWithDisplay movieId={selectedMovie} onReviewAdded={() => console.log('Review added')} />
      )}
    </div>
  );
};

export default ReviewPage;
