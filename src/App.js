import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from './components/atoms/Toolbar/Toolbar';
import MyButton from './components/atoms/Button/Button';
import AppBar from './components/modules/AppBar/AppBar';
import SideMenu from './components/modules/SideMenu.js/SideMenu';

const Wrapper = styled.div`
  flex-shrink: 0;
  white-space: nowrap;
`;

const Main = styled.main`
  flex-grow: 1;
  margin: 0 104px;
  margin-left: ${props => (props.open ? 250 : 104)}px;
  padding: 1%;
`;

function App() {
  const [open, setOpen] = useState(false);

  const doNothing = () => {
    return '#';
  };

  return (
    <Wrapper>
      <CssBaseline />
      <AppBar open={open} setOpen={setOpen} />
      <SideMenu open={open} setOpen={setOpen} />

      <Main open={open}>
        <Toolbar height="72" />

        <MyButton
          variant="contained"
          color="secondary"
          onClick={() => {
            doNothing();
          }}
        >
          Button
        </MyButton>
        <MyButton
          variant="contained"
          color="primary"
          onClick={() => {
            doNothing();
          }}
        >
          확인
        </MyButton>
      </Main>
    </Wrapper>
  );
}

export default App;
