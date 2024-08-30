import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import PropTypes from 'prop-types';
import { color } from '../../shared/newStyles';

// TODO: Rich Text Field implementation, Character Count implementation

export const NewTextField = ({ label, isAutoComplete, options, error, helperText, ...props }) => {
  // Determine inputProps based on whether an error exists
  const inputProps = error ? { style: { color: `${color.systemRedShades['600']}` } } : {};
  const [open, setOpen] = useState(false);


  if (isAutoComplete) {
    return (
      <Autocomplete
        noOptionsText='No Results'
        open={open}
        onInputChange={(event, value) => {
          if (value.length > 0 && !open) {
            setOpen(true);
          }
        }}
        onClose={() => setOpen(false)}
        filterOptions={(options, params) => {
          const { inputValue } = params;
          if (!inputValue) return [];
          const lowerCaseInput = inputValue.toLowerCase();
          return options.filter(option => {
            if (typeof option === 'string') {
              return option.toLowerCase().includes(lowerCaseInput);
            }
            if (option.label) {
              return option.label.toLowerCase().includes(lowerCaseInput);
            }
            return false;
          });
        }}

        {...props}
        options={options}
        sx={{ width: '223px',
          '& .MuiSvgIcon-root': {
            display: 'none',
          },
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
          />
        )}
      />
    );
  }

  return (
    <TextField
      label={label}
      variant='outlined'
      error={error}
      helperText={helperText}
      InputProps={{...inputProps}} // Apply conditional styling
      {...props}
    />
  );
};

NewTextField.propTypes = {
  /**
   * The label for the input field
   */
  label: PropTypes.string,
  /**
   * Render an Autocomplete component instead of a TextField
   */
  isAutoComplete: PropTypes.bool,
  /**
   * Highlights TextField in red to display error
   */
  error: PropTypes.bool,
  /**
   * Information below TextField to help with input
   */
  helperText: PropTypes.string
}

NewTextField.defaultProps = {
  label: 'Label',
  isAutoComplete: false,
  options: [],
  error: false,
  helperText: ''
}