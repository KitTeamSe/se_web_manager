import React from 'react';
import {ThemeProvider} from 'styled-components';
import { StylesProvider } from '@material-ui/core';
import theme from '../src/styles/theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </StylesProvider>
  )
]