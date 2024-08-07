import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  FormHelperText, OutlinedInput, ListItemText, Checkbox,
} from '@mui/material';
import PropTypes from 'prop-types';

// TODO: Multiple Options where values are the same not working as expected

export const Dropdown = ({
  label,
  options,
  required,
  disabled,
  initialValue,
  helperText,
  multiple,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState(initialValue || '');
  const [multipleSelectedValue, setMultipleSelectedValue] = React.useState([]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleMultipleChange = (event) => {
    // Fancy way of saying const value = event.target.value through destructuring assignment syntax from MUI docs
    const {
      target: { value },
    } = event;
    setMultipleSelectedValue(value);
  };

  if (multiple) {
    return (
      <div>
        <FormControl sx={{ m: 1, width: '223px' }}>
          <InputLabel>{label}</InputLabel>
          <Select
            multiple
            value={multipleSelectedValue}
            onChange={handleMultipleChange}
            input={<OutlinedInput label={label} />}
            renderValue={(selected) => selected.join(', ')}
          >
            {options.map((option) => (
              <MenuItem key={option.id} value={option.value}>
                <Checkbox checked={multipleSelectedValue.indexOf(option.value) > -1} />
                <ListItemText primary={option.value} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }

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
            options.map((option) => (
              <MenuItem key={option.id} value={option.value}>
                {option.value}
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
