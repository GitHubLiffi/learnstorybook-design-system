import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import PropTypes from 'prop-types';

// TODO: Rich Text Field implementation, Character Count implementation

export const NewTextField = ({ label, isAutoComplete, options, ...props }) => {
  if (isAutoComplete) {
    return <Autocomplete sx={{ width: '223px' }} {...props} options={options} renderInput={(params) => <TextField {...params} label={label}/>} />
  }
  return <TextField label={label} variant='outlined' {...props} />
}

export default NewTextField;

NewTextField.propTypes = {
  /**
   * The label for the input field
   */
  label: PropTypes.string,
  /**
   * Render an Autocomplete component instead of a TextField
   */
  isAutoComplete: PropTypes.bool,
}

NewTextField.defaultProps = {
  label: 'Label'
}