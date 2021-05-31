import React from 'react';
import styled from 'styled-components';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import useToggle from './libs/useToggle';
import Routes from './Router';
import SigninPage from './components/templates/Auth/SigninPage/SigninPage';
import Toolbar from './components/atoms/Toolbar/Toolbar';
import Header from './components/templates/Header/Header';

const Wrapper = styled.div`
  flex-shrink: 0;
  white-space: nowrap;
`;

const MainWrapper = styled.main`
  overflow-x: hidden;
  flex-grow: 1;
  margin-left: ${props => (props.open ? 260 : 100)}px;
  margin-right: 100px;
`;

function App() {
  const [open, setOpen] = useToggle();
  return (
    <>
      {localStorage.getItem('token') ? (
        <Wrapper>
          <CssBaseline />
          <Header open={open} setOpen={setOpen} />

          <MainWrapper open={open}>
            <Toolbar height="72" />
            <Routes />
          </MainWrapper>
          <Redirect
            to={{
              pathname: `/m/account`
            }}
          />
        </Wrapper>
      ) : (
        <>
          <Route exact path="/signin" key="/signin">
            <SigninPage />
          </Route>
          <Redirect
            to={{
              pathname: `/signin`
            }}
          />
        </>
      )}
    </>
  );
}

export default withRouter(App);
