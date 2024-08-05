import React from 'react';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { CircularProgress } from '@mui/material';

export const MyButton = ({ label, type, variant, ...props }) => {
    const validVariants = ['contained', 'outlined', 'text'];
    if (!validVariants.includes(variant)) {
      console.warn('Invalid variant passed to MyButton. Expected one of:', validVariants);
    }

    let ButtonComponent;
    if (type === 'loading') {
      ButtonComponent = (props) => (
        <LoadingButton
          {...props}
          variant={variant}
          sx={{ backgroundColor: '#2196F3', '&.Mui-disabled': { backgroundColor: '#2196F3' } }} // Style the button
          loadingIndicator={
            <CircularProgress size={20} sx={{ color: 'white' }} />
          }
        />
      );
    } else {
      ButtonComponent = Button;
    }

    return <ButtonComponent {...props} variant={variant}>{label}</ButtonComponent>;
  }
;

export default MyButton;