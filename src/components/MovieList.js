import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movies, onRemoveMovie }) => {
  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} onRemoveMovie={onRemoveMovie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
