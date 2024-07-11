import React, { useState } from 'react';

const AddMovieForm = ({ onAddMovie }) => {
  const [movieTitle, setMovieTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You would normally search for the movie by title, get its ID, and then call onAddMovie
    // For simplicity, we'll just pass a mock movie object here
    const movie = { id: movieTitle.toLowerCase().replace(/\s+/g, '-'), title: movieTitle };
    onAddMovie(movie);
    setMovieTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Movie Title:</label>
        <input type="text" value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)} />
      </div>
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovieForm;
