import React from 'react';
import { action } from '@storybook/addon-actions';
import { Dropdown } from './Dropdown';

const defaultOptions = [{id: 1, value: 'Menu Item 1'},{id: 2, value: 'Menu Item 2'}];

export default {
  title: 'Storybook Demo/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: 'List of options to select',
    },
  },
};

export const Standard =  {
  args: {
    label: 'Label',
    options: defaultOptions,
    required: false,
    disabled: false,
  },
  render: (args) => (
    <Dropdown {...args}
    />
  )
};

export const DisabledWithNoValue =  {
  args: {
    label: 'Label',
    options: defaultOptions,
    required: false,
    disabled: true,
  },
  render: (args) => (
    <Dropdown {...args}
    />
  )
};

export const DisabledWithValue =  {
  args: {
    label: 'Label',
    options: defaultOptions,
    required: false,
    disabled: true,
    initialValue: 'Menu Item'
  },
  render: (args) => (
    <Dropdown {...args}
    />
  )
};

export const Mandatory =  {
  args: {
    label: 'Label',
    options: defaultOptions,
    required: true,
    disabled: false,
  },
  render: (args) => (
    <Dropdown {...args}
    />
  )
};

export const WithHelperText =  {
  args: {
    label: 'Label',
    options: defaultOptions,
    required: false,
    disabled: false,
    helperText: 'Helper text goes here'
  },
  render: (args) => (
    <Dropdown {...args}
    />
  )
};

export const Multiple =  {
  args: {
    label: 'Label',
    options: defaultOptions,
    required: false,
    disabled: false,
    multiple: true,
  },
  render: (args) => (
    <Dropdown {...args}
    />
  )
};