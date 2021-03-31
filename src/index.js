import React from 'react';
import ReactDOM from 'react-dom';
import { StylesProvider } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import rootReducer from './reducer';
import './styles/reset.css';
import App from './App';
import theme from './styles/theme';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <Provider store={createStore(rootReducer)}> */}
      <StylesProvider injectFirst>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StylesProvider>
      {/* </Provider> */}
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
