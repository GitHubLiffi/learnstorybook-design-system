import React from 'react';
import { MyButton } from './Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default {
  title: 'Storybook Demo/Button',
  component: MyButton,
};

export const AllButtons = {
  name: 'All Buttons',
  render: () => (
    <>
      <MyButton variant='contained' label='Primary' />
      <MyButton variant='outlined' label='Secondary' />
      <MyButton variant='text' label='Tertiary' />
      <MyButton variant='contained' label='Disabled' disabled/>
      <MyButton variant='contained' label='label' type='loading' loading/>
      <MyButton variant='contained' startIcon={<DeleteIcon />} label='Delete' sx={{ backgroundColor: '#D32F2F', color: 'white', ':hover': {backgroundColor: '#D32F2F',},}}/>

    </>
  ),
}