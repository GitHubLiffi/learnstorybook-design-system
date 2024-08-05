import React from 'react';
import TextField from '@mui/material/TextField';
import AutoComplete from '@mui/material/Autocomplete';
import NewButton from '../Button/Button';
import PropTypes from 'prop-types';

export const NewTextField = ({ label, ...props }) => {
  return <TextField label={label} variant='outlined' {...props} />
}

export default NewTextField;

NewTextField.propTypes = {
  /**
   * The label for the input field
   */
  label: PropTypes.string,
}

NewTextField.defaultProps = {
  label: 'Label'
}