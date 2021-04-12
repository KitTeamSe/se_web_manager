import React from 'react';
import {ThemeProvider} from 'styled-components';
import { StylesProvider } from '@material-ui/core';
import theme from '../src/styles/theme';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer, {rootSaga} from '../src/data/modules/index';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import StoryRouter from 'storybook-react-router';
/**
 *  redux.
 */

 const sagaMiddleware = createSagaMiddleware();
 const store = createStore(
   rootReducer,
   composeWithDevTools(applyMiddleware(sagaMiddleware))
 );
 // store가 생성된 이후 sagaMiddleware를 run시켜야한다.
sagaMiddleware.run(rootSaga);

/**
 * msw 사용
 */
if(typeof global.process === 'undefined' ){
  const {worker} = require('../src/mocks/browser');
  worker.start();
}


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
  StoryRouter(),
  (Story) => (
    <Provider store={store}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </StylesProvider>
    </Provider>
  )
]