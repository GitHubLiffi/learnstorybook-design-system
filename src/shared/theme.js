import { createTheme } from '@mui/material/styles';
import { color, typography } from './newStyles';


export const muiTheme = createTheme({
  mixins: {
    MuiDataGrid: {
      // Headers, and top & bottom fixed rows
      containerBackground: '#ECEFF1',
    },
  },
  palette: {
    primary: {
      main: `${color.primary}`,
      dark: `${color.primaryDark}`
    },
  },
  typography: {
    h5: {
      fontSize: 20,
    }
  }
});
