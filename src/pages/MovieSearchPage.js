// src/pages/MovieSearchPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { Container, Box, Typography, Alert } from '@mui/material';
import MovieSearch from '../components/MovieSearch';
import MovieSearchResults from '../components/MovieSearchResults';

const MovieSearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`/movies/search`, { params: { title: query } });
      setMovies(response.data);
      setError(null);
    } catch (error) {
      setError('Failed to fetch movies. Please try again.');
      setMovies([]);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 3 }}>
        <Typography variant="h4" gutterBottom>Search Movies</Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <MovieSearch onSearch={handleSearch} />
        <MovieSearchResults movies={movies} />
      </Box>
    </Container>
  );
};

export default MovieSearchPage;

