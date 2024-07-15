import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 2, textAlign: 'center' }}>
      <Typography variant="body2" color="textSecondary">
        &copy; 2024 My Cinema List
      </Typography>
    </Box>
  );
};

export default Footer;
