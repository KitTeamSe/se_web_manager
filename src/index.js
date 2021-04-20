import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { StylesProvider } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer, { rootSaga } from './modules/index';
// import rootReducer from './reducer';
import './styles/reset.css';
import AppContainer from './AppContainer';
import theme from './styles/theme';
// import rootReducer from './modules';
// import configureStore from './store/configureStore';
// import reportWebVitals from './reportWebVitals';

// const store = createStore(rootReducer);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
// store가 생성된 이후 sagaMiddleware를 run시켜야한다.
sagaMiddleware.run(rootSaga);

// msw
console.log(process.env.REACT_APP_ENV);
if (process.env.REACT_APP_ENV === 'development') {
  // eslint-disable-next-line global-require
  const { worker } = require('./mocks/browser');
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <BrowserRouter>
            <AppContainer />
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
// reportWebVitals();
