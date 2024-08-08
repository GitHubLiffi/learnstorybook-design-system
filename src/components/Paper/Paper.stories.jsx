import react from 'react';
import NewPaper from './Paper';

export default {
  title: 'Storybook Demo/Paper',
  component: NewPaper,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: 'General Container for components'
    }
  }
}

export const Standard = {
  args: {
    children: 'Page content goes here.',
    header: 'This is section title.',
    loading: false,
  }
}

export const Loading = {
  args: {
    header: 'This is section title.',
    loading: false,
  }
}