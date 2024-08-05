import React from 'react';
import { NewButton } from './Button';
import StarIcon from '@mui/icons-material/Star';


export default {
  title: 'Storybook Demo/Button',
  component: NewButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: 'Primary, Secondary, Tertiary Buttons and the various visual states they can have'
    }
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['contained', 'outlined', 'text'],
    }
  }
};

export const Standard = {
  args: {
    label: 'label',
    loading: false,
    disabled: false,
    variant: 'contained'
  },
}
/**
 * Loading states for different buttons
 */
export const Loading = {
  args: {
    loading: true,
    variant: 'contained'
  },
}

/**
 * Disabled states for different buttons
 */
export const Disabled = {
  args: {
    disabled: true,
    variant: 'contained'
  },
}

/**
 * Icons on the left are applicable to all types of buttons
 */
export const Icon = {
  args: {
    label: 'label',
    variant: 'contained',
  },
  render: (args) => (
    <>
      <NewButton {...args} startIcon={<StarIcon />}/>
    </>
  ),}

/**
 * End Icons should only be used for Tertiary Buttons
 */
export const EndIcon = {
  args: {
    label: 'label',
    variant: 'text',
  },
  render: (args) => (
    <>
      <NewButton {...args} endIcon={<StarIcon />}/>
    </>
  ),}

/**
 * Special styling for Delete button
 */
export const Delete = {
  render: (args) => (
    <>
      <NewButton {...args} label='Delete' isDelete/>

    </>
  ),
}