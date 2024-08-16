// src/components/ReviewForm.js
import React, { useState } from 'react';
import { addReview } from '../services/movieService';
import styles from '../styles/ReviewForm.module.css';

const ReviewForm = ({ movieId, onAddReview }) => {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(1);
  const [author, setAuthor] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (reviewText.trim() === '') {
      newErrors.reviewText = 'Review cannot be empty';
    }
    if (author.trim() === '') {
      newErrors.author = 'Author name cannot be empty';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    await addReview(movieId, reviewText, rating, author);
    onAddReview(reviewText, rating, author);
    setReviewText('');
    setRating(1);
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Write your review here..."
      />
      {errors.reviewText && <p className={styles.error}>{errors.reviewText}</p>}
      <div className={styles.ratingContainer}>
        <label htmlFor="rating">Rating:</label>
        <select
          id="rating"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Your name"
      />
      {errors.author && <p className={styles.error}>{errors.author}</p>}
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
