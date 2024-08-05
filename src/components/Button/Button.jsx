import React from 'react';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { color, typography } from '../../shared/newStyles';
import { CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';

// TODO: Fix disabled and loading states, drop shadow issue with primary button loading

export const NewButton = ({ label, variant, loading, isDelete, ...props }) => {
    const validVariants = ['contained', 'outlined', 'text'];
    if (!validVariants.includes(variant)) {
      console.warn('Invalid variant passed to MyButton. Expected one of:', validVariants);
    }

    let ButtonComponent;
    if (loading) {
      ButtonComponent = (props) => (
        <LoadingButton
          {...props}
          variant={variant}
          loading
          sx={variant === 'contained'
            ? { backgroundColor: `${color.primary}`,
              '&.Mui-disabled': { backgroundColor: `${color.primary}` } }
          : {
              backgroundColor: 'transparent',
              borderColor: `${color.primary}`,
              '&.Mui-disabled': { borderColor: `${color.primary}` }
          }}
          loadingIndicator={
            <CircularProgress size={20} sx={variant === 'contained' ? { color: 'white' } : {color : `${color.primary}` }} />
          }
        />
      );
    } else if (isDelete) {
      ButtonComponent = (props) => (
        <Button
          {...props}
          variant={variant}
          startIcon={<DeleteIcon />}
          sx={{ backgroundColor: `${color.systemRedShades['600']}`, color: 'white', ':hover': {backgroundColor: `${color.systemRedShades['600']}`} }}
        />
      )
    }
    else {
      ButtonComponent = Button;
    }

    return <ButtonComponent {...props} variant={variant}>{label}</ButtonComponent>;
  }
;

export default NewButton;

NewButton.propTypes = {
  /**
   Text to be displayed on the button
   */
  label: PropTypes.string,
  /**
   Shows loading indicator and disables interaction with the button
   */
  loading: PropTypes.bool,
  /**
   Toggles interaction state of the button
   */
  disabled: PropTypes.bool,
  /**
   * Button Variants:
   * - Primary Button: 'contained'
   * - Secondary Button: 'outlined'
   * - Tertiary Button: 'text'
   */
  variant: PropTypes.string,
};

NewButton.defaultProps = {
  label: 'label',
  loading: false,
  disabled: false,
  variant: 'contained',
};