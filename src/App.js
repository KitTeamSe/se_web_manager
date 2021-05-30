import React from 'react';
import styled from 'styled-components';
import { CssBaseline } from '@material-ui/core';
import Toolbar from './components/atoms/Toolbar/Toolbar';
import Header from './components/templates/Header/Header';
import useToggle from './libs/useToggle';
import Routes from './Router';

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
    <Wrapper>
      <CssBaseline />
      <Header open={open} setOpen={setOpen} />

      <MainWrapper open={open}>
        <Toolbar height="72" />
        <Routes />
      </MainWrapper>
    </Wrapper>
  );
}

export default App;
