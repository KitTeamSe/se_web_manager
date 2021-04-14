import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { StylesProvider } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import './styles/reset.css';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import App from './App';
import theme from './styles/theme';
import rootReducer, { rootSaga } from './modules';
import reportWebVitals from './reportWebVitals';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(logger, sagaMiddleware))
  // applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <StylesProvider injectFirst>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </StylesProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
