import react from 'react';
import TableErrorMessages from './TableErrorMessages';
import { PlagiarismOutlined, ErrorOutlineOutlined } from '@mui/icons-material';

export default {
  title: 'Storybook Demo/Table Error Messages',
  component: TableErrorMessages,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: 'Error Messages for Table component'
    }
  },
  argTypes: {
    iconColor: {
      control: {
        type: 'radio',
      },
      options: ['primary', 'error'],
    }
  }
}

export const Standard = {
  args: {
    IconComponent: PlagiarismOutlined,
    iconColor: 'primary',
    error: 'No Records Found',
    message: 'There are currently no records found.',
  }
}

export const WithRedIcon = {
  args: {
    IconComponent: ErrorOutlineOutlined,
    iconColor: 'error',
    error: 'Unable to Fetch Data.',
    message: 'Try again later. If problem persists, email IT administrators for support.',
  }
}