import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch, Redirect } from 'react-router-dom';
import Toolbar from './components/atoms/Toolbar/Toolbar';
import AppBar from './components/modules/AppBar/AppBar';
import SideMenu from './components/modules/SideMenu.js/SideMenu';
import SideMenuListData from './statics/data/SideMenuListData';

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
  const menuItems = SideMenuListData;
  const [open, setOpen] = useState(false);

  // const doNothing = () => {
  //   return '#';
  // };

  return (
    <Wrapper>
      <CssBaseline />
      <AppBar open={open} setOpen={setOpen} path={menuItems.path} />
      <SideMenu open={open} setOpen={setOpen} />

      <Main open={open}>
        <Toolbar height="72" />
        <Switch>
          <Route exact path={menuItems.path}>
            메인
          </Route>
          {menuItems.items.map(el => (
            <Route path={`${menuItems.path}/${el.id}`}>{el.page}</Route>
          ))}
          <Redirect path="*" to={menuItems.path} />
        </Switch>
      </Main>
    </Wrapper>
  );
}

export default App;
