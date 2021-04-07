import React from 'react';
import ReactDOM from 'react-dom';
import { StylesProvider } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './data/modules/index';
// import rootReducer from './reducer';
import './styles/reset.css';
import App from './App';
import theme from './styles/theme';
import reportWebVitals from './reportWebVitals';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// store가 생성된 이후 sagaMiddleware를 run시켜야한다.
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </StylesProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
