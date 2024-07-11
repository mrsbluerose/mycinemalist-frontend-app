import React from 'react';
import { useParams } from 'react-router-dom';

const MoviePage = () => {
  let { id } = useParams();

  return (
    <div>
      <h1>Movie Page for Movie ID: {id}</h1>
    </div>
  );
};

export default MoviePage;
