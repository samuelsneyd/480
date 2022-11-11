import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import theme from '../config/theme';

function withTheme<P>(Component: React.ComponentType<P>) {
  return (props: P) => (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Component {...props} />
    </ThemeProvider>
  );
}

export default withTheme;
