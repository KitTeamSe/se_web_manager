import React from 'react';
import {ThemeProvider} from 'styled-components';
import { StylesProvider } from '@material-ui/core';
import theme from '../src/styles/theme';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer, {rootSaga} from '../src/data/modules/index';
import createSagaMiddleware from 'redux-saga';
/**
 * msw 사용
 */
// if(typeof global.process === 'undefined' ){
//   const {worker} = require('../src/mocks/browser');
//   worker.start();
// }

/**
 *  redux.
 * 
 */

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