import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        console.log('Fetching movies');
        const response = await axios.get('/api/movies');
        console.log('Movies fetched:', response.data);
        setMovies(response.data);
      } catch (error) {
        console.error('There was an error fetching the movies!', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
