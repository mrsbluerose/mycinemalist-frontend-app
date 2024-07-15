import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const MovieItem = ({ movie, onRemoveMovie }) => {
  return (
    <ListItem>
      <ListItemText
        primary={
          <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            {movie.title}
          </Link>
        }
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={() => onRemoveMovie(movie.id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default MovieItem;
