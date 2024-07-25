// src/components/MovieSearchResults.js
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

const MovieSearchResults = ({ movies }) => {
  const posterBaseUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {movies.map((movie) => (
        <Card key={movie.id} sx={{ display: 'flex', width: '80%', mb: 2, height: 250 }}>
          {movie.posterPath!=="null" ? (
            <CardMedia
              component="img"
              sx={{ width: 150, height: 250 }}
              image={`${posterBaseUrl}${movie.posterPath}`}
              alt={movie.title}
            />
          ) : (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 150,
                height: 250,
                backgroundColor: '#f0f0f0',
                color: '#888',
                fontSize: '1rem',
                textAlign: 'center',
                padding: '10px' // Adjust padding as needed
              }}
            >
              No Poster Available
            </Box>
          )}
          <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
            <Typography variant="h6" component="div" align="center">
              {movie.title}
            </Typography>
            <Box sx={{ flexGrow: 1, overflowY: 'auto', maxHeight: '150px', mt: 1, mb: 1 }}>
              <Typography variant="body2" color="textSecondary">
                {movie.overview}
              </Typography>
            </Box>
            <Box sx={{ height: '20px', display: 'flex', alignItems: 'center' }}> {/* Added Box to control height and alignment */}
              <Typography variant="body2" color="textSecondary">
                {movie.releaseDate ? (
                  new Date(movie.releaseDate).getFullYear()) 
                  : ("no release date available")}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default MovieSearchResults;
