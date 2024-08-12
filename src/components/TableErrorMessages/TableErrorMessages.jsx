import React from 'react';
import NewPaper from '../Paper/Paper';
import { Box, Typography } from '@mui/material';

export const TableErrorMessages = ({ IconComponent, error, message, iconColor }) => {
  return (
    <NewPaper>
      <Box sx={{ textAlign: 'center' }}>
        <IconComponent color={iconColor} fontSize='large'/>
        <Typography variant='h6' component='div' gutterBottom>
          <b>{error}</b>
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {message}
        </Typography>
      </Box>
    </NewPaper>
  );
}

export default TableErrorMessages;