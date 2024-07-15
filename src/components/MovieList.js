import React from 'react';
import { List, ListSubheader, Typography, Box } from '@mui/material';
import MovieItem from './MovieItem';

const MovieList = ({ movies, onRemoveMovie }) => {
  return (
    <Box>
      <Typography variant="h4" component="h2" gutterBottom>
        Movie List
      </Typography>
      <List subheader={<ListSubheader>Movies</ListSubheader>}>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} onRemoveMovie={onRemoveMovie} />
        ))}
      </List>
    </Box>
  );
};

export default MovieList;
