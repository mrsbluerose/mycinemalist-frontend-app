import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie, onRemoveMovie }) => {
  return (
    <li>
      <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
      <button onClick={() => onRemoveMovie(movie.id)}>Remove</button>
    </li>
  );
};

export default MovieItem;
