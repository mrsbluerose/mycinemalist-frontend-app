import React, { useState, useEffect } from 'react';
import axios from '../api/axiosConfig';
import MovieList from './MovieList';
import AddMovieForm from './AddMovieForm';
import { Box, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const MovieListManager = () => {
  const [movieLists, setMovieLists] = useState([]);
  const [selectedListId, setSelectedListId] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovieLists();
  }, []);

  useEffect(() => {
    if (selectedListId) {
      fetchMovies(selectedListId);
    }
  }, [selectedListId]);

  const fetchMovieLists = () => {
    axios.get('/movielists')
      .then(response => {
        setMovieLists(response.data);
      })
      .catch(error => {
        console.error('Error fetching movie lists:', error);
      });
  };

  const fetchMovies = (listId) => {
    axios.get(`/movielists/${listId}`)
      .then(response => {
        setMovies(response.data.movies);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  };

  const handleAddMovie = (movie) => {
    axios.post(`/movielists/${selectedListId}/movies`, { movieId: movie.id })
      .then(() => {
        fetchMovies(selectedListId);
      })
      .catch(error => {
        console.error('Error adding movie:', error);
      });
  };

  const handleRemoveMovie = (movieId) => {
    axios.delete(`/movielists/${selectedListId}/movies/${movieId}`)
      .then(() => {
        fetchMovies(selectedListId);
      })
      .catch(error => {
        console.error('Error removing movie:', error);
      });
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h4" gutterBottom>Movie List Manager</Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel>Select a list</InputLabel>
        <Select value={selectedListId || ''} onChange={(e) => setSelectedListId(e.target.value)}>
          <MenuItem value=""><em>None</em></MenuItem>
          {movieLists.map(list => (
            <MenuItem key={list.id} value={list.id}>{list.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      {selectedListId && (
        <>
          <AddMovieForm onAddMovie={handleAddMovie} />
          <MovieList movies={movies} onRemoveMovie={handleRemoveMovie} />
        </>
      )}
    </Box>
  );
};

export default MovieListManager;
