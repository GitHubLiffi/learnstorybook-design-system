import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  FormHelperText,
} from '@mui/material';
import PropTypes from 'prop-types';

export const Dropdown = ({
  label,
  options,
  required,
  disabled,
  initialValue,
  helperText,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState(initialValue || '');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, width: '223px' }}>
      <FormControl error={required} required={required} fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          {...props}
          value={selectedValue}
          label={label}
          onChange={handleChange}
          disabled={disabled}
          helperText={helperText}
        >
          {options &&
            options.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
        </Select>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </Box>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  /**
   * Name of dropdown component
   */
  label: PropTypes.string,
};

Dropdown.defaultValues = {
  label: 'Label',
};
