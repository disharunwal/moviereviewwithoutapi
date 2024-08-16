// src/services/movieService.js

let movies = [
  {
    id: '1',
    title: 'Ek Tha Tiger',
    description: 'A mind-blowing thriller Movie.',
    rating: 4.5,
    reviews: [{ id: '1', text: 'Amazing movie!', author: 'Disha', rating: 5 }],
    image: '/images/image.png',
  },
  {
    id: '2',
    title: 'Chennai Express',
    description: 'Action Movie.',
    rating: 4.8,
    reviews:{ id: '2', text: 'Awesome Movie', author: 'Neha', rating: 5 },
    image: '/images/chennai.png',
  },
  {
    id: '3',
    title: 'Happy New Year',
    description: 'Comedy Movie.',
    rating: 3.8,
    reviews: [{ id: '3', text: 'Amazing movie!', author: 'Naveen', rating: 5 }],
    image: '/images/happy.png',
  },
  {
    id: '4',
    title: 'Mission Mangal',
    description: 'A sci-fi classic.',
    rating: 4.8,
    reviews: [{ id: '4', text: 'Amazing movie!', author: 'Naveen', rating: 5 }],
    image: '/images/mission.png',
  },
  {
    id: '5',
    title: 'Krish',
    description: 'A sci-fi classic.',
    rating: 2.8,
    reviews: [{ id: '5', text: 'Amazing movie!', author: 'Disha', rating: 5 }],
    image: '/images/krish.png',
  },
  {
    id: '6',
    title: 'The Matrix',
    description: 'A sci-fi classic.',
    rating: 4.8,
    reviews: [{ id: '6', text: 'Amazing movie!', author: 'Naveen', rating: 5 }],
    image: '/images/matrix.png',
  },
  
];

export const fetchMovies = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(movies), 1000));
};

export const fetchMovieById = async (id) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(movies.find((movie) => movie.id === id)), 1000)
  );
};

export const addReview = async (movieId, reviewText, rating, author) => {
  const movie = movies.find((movie) => movie.id === movieId);
  if (movie) {
    const newReview = {
      id: Date.now().toString(), // Generate a simple ID for the new review
      text: reviewText,
      rating: rating,
      author: author,
    };
    movie.reviews.push(newReview);
    // Recalculate movie rating
    movie.rating =
      movie.reviews.reduce((sum, review) => sum + review.rating, 0) /
      movie.reviews.length;
    return newReview;
  }
};

export const editReview = async (movieId, reviewId, newText, newRating) => {
  const movie = movies.find((movie) => movie.id === movieId);
  if (movie) {
    const review = movie.reviews.find((review) => review.id === reviewId);
    if (review) {
      review.text = newText;
      review.rating = newRating;
      // Recalculate movie rating
      movie.rating =
        movie.reviews.reduce((sum, review) => sum + review.rating, 0) /
        movie.reviews.length;
      return review;
    }
  }
};

export const deleteReview = async (movieId, reviewId) => {
  const movie = movies.find((movie) => movie.id === movieId);
  if (movie) {
    movie.reviews = movie.reviews.filter((review) => review.id !== reviewId);
    // Recalculate movie rating
    movie.rating =
      movie.reviews.length > 0
        ? movie.reviews.reduce((sum, review) => sum + review.rating, 0) /
          movie.reviews.length
        : 0;
  }
};
