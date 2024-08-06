import React from 'react';
import { NewTextField } from './TextField';

export default {
  title: 'Storybook Demo/Text Field',
  component: NewTextField,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: 'Input component for users to enter text'
    }
  },
  argTypes: {
    label: {
      control: 'text',
    }
  }
};

export const Standard = {
  render:(args) => (
    <NewTextField {...args}/>
  ),
}

export const DisabledWithValue = {
  render:(args) => (
    <NewTextField {...args} value='Value' disabled/>
  ),
}

export const DisabledWithNoValue = {
  render:(args) => (
    <NewTextField {...args} disabled/>
  ),
}
  /**
   * Returns an Autocomplete component with fixed width if isAutocomplete is true
   */
export const AutoComplete = {
  args: {
    isAutoComplete: true,
    label: 'Option'
  },
  render:(args) => (
    <NewTextField options={['Option 1', 'Option 2']} {...args}/>
  )
}