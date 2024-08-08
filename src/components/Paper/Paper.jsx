import React from 'react';
import { Paper, CircularProgress, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

// TODO: Double check fonts for header seems abit off

export const NewPaper = ({ children, header, loading }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '400px',
        width: '100%',
        backgroundColor: '#F5F5F5',
        padding: '72px',
      }}
    >
      {header && (
        <Box sx={{ alignSelf: 'flex-start', mb: 2 }}>
          {' '}
          {/* Align to start and add some padding */}
          <Typography variant='h5' component='div'>
            <b>{header}</b>
          </Typography>
        </Box>
      )}
      <Paper
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
          width: '100%',
          height: '100%',
        }}
        variant='outlined'
      >
        {loading ? <CircularProgress /> : { children }}
      </Paper>
    </Box>
  );
};

export default NewPaper;

NewPaper.propTypes = {
  /**
   * Loading indicator shown instead of children
   */
  loading: PropTypes.bool,
};

NewPaper.defaultProps = {
  loading: false,
};
