// src/components/MovieDetails.js
import React from 'react';
import styles from '../styles/MovieDetails.module.css';

const MovieDetails = ({ movie, onEditReview, onDeleteReview }) => {
  return (
    <div className={styles.details}>
      <img src={movie.image} alt={movie.title} className={styles.movieImage} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <div className={styles.rating}>Rating: {movie.rating.toFixed(1)} / 5</div>
      <h3>Reviews</h3>
      <ul>
        {movie.reviews.map((review) => (
          <li key={review.id}>
            <p>{review.text}</p>
            <p>Rating: {review.rating}</p>
            <p>By: {review.author}</p>
            <button onClick={() => onEditReview(movie.id, review.id)}>Edit</button>
            <button onClick={() => onDeleteReview(movie.id, review.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetails;