import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText, Box, CircularProgress, Alert } from '@mui/material';

const HomePage = () => {
  const [movieLists, setMovieLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const username = localStorage.getItem('username'); // Adjust this line based on how you store/retrieve the user ID

  useEffect(() => {
    const fetchMovieLists = async () => {
      try {
        console.log('Fetching movie lists');
        const response = await axios.get(`/movielists/${username}`);
        console.log('Movie lists fetched:', response.data);
        setMovieLists(response.data);
      } catch (error) {
        console.error('There was an error fetching the movie lists!', error);
        setError('There was an error fetching the movie lists!');
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchMovieLists();
    } else {
      console.error('User ID is not available');
      setError('User ID is not available');
      setLoading(false);
    }
  }, [username]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Home Page
      </Typography>
      {loading ? (
        <Box display="flex" justifyContent="center" mt={3}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <List>
          {movieLists.map((movieList) => (
            <ListItem key={movieList.id}>
              <ListItemText primary={movieList.name} />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default HomePage;
