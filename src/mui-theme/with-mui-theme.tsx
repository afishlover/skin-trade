import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { muiTheme } from './mui-theme';import { DefaultFcProps } from '@vg-slots/react-utils';
;

export const withMuiTheme = (Component: React.FC<DefaultFcProps>) => (props: DefaultFcProps) => (
  <ThemeProvider theme={muiTheme}>
    <Component {...props} />
  </ThemeProvider>
);
