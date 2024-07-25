// src/components/MovieSearch.js
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const MovieSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <Box sx={{ mt: 3, mb: 3 }}> {/* Added mb: 3 here */}
      <TextField
        label="Search for a movie"
        variant="outlined"
        fullWidth
        margin="normal"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSearch}
        sx={{ mt: 2 }}
      >
        Search
      </Button>
    </Box>
  );
};

export default MovieSearch;
