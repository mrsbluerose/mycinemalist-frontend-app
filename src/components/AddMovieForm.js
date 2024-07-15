import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

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
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom>Add a Movie</Typography>
      <TextField
        label="Movie Title"
        variant="outlined"
        fullWidth
        value={movieTitle}
        onChange={(e) => setMovieTitle(e.target.value)}
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">Add Movie</Button>
    </Box>
  );
};

export default AddMovieForm;
