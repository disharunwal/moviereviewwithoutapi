// src/pages/MoviePage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails';
import ReviewForm from '../components/ReviewForm';
import { fetchMovieById, addReview, editReview, deleteReview } from '../services/movieService';
import styles from '../styles/MovieDetails.module.css';

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      const movie = await fetchMovieById(id);
      setMovie(movie);
    };
    getMovie();
  }, [id]);

  const handleAddReview = async (reviewText, rating, author) => {
    await addReview(id, reviewText, rating, author);
    const updatedMovie = await fetchMovieById(id); // Fetch updated movie
    setMovie(updatedMovie); // Update local state
  };

  const handleEditReview = async (movieId, reviewId) => {
    // Open edit form
    setEditing(reviewId);
  };

  const handleSaveEdit = async (reviewId, newText, newRating) => {
    await editReview(id, reviewId, newText, newRating);
    const updatedMovie = await fetchMovieById(id); // Fetch updated movie
    setMovie(updatedMovie); // Update local state
    setEditing(null); // Close edit form
  };

  const handleDeleteReview = async (movieId, reviewId) => {
    await deleteReview(movieId, reviewId);
    const updatedMovie = await fetchMovieById(id); // Fetch updated movie
    setMovie(updatedMovie); // Update local state
  };

  return (
    <div className={styles.container}>
      {movie ? (
        <>
          <MovieDetails
            movie={movie}
            onEditReview={handleEditReview}
            onDeleteReview={handleDeleteReview}
          />
          {editing && (
            <ReviewForm
              movieId={id}
              onAddReview={(text, rating) => handleSaveEdit(editing, text, rating)}
            />
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MoviePage;
