import { createTheme } from '@mui/material/styles';
import { color, typography } from './newStyles';


export const muiTheme = createTheme({
  palette: {
    primary: {
      main: `${color.primary}`,
      dark: `${color.primaryDark}`
    },
  },
});
