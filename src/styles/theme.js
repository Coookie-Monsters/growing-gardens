import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: { main: green[500] }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' } // This is just green.A700 as hex.
  },
  typography: { useNextVariants: true }
});

export default theme;
