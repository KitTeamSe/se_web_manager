import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CssBaseline, Container } from '@material-ui/core';
import { Route, Switch, Redirect } from 'react-router-dom';
import Toolbar from './components/atoms/Toolbar/Toolbar';
import Header from './components/templates/Header/Header';
import {
  defaultPath,
  ManageListData,
  ScheduleListData
} from './statics/data/SideMenuData';

const Wrapper = styled.div`
  flex-shrink: 0;
  white-space: nowrap;
`;

const Main = styled.main`
  overflow-x: hidden;
  flex-grow: 1;
  margin: 0 72px;
  margin-left: ${props => (props.open ? 260 : 72)}px;
  padding: 8px;
`;

function App({ open, sideMenuOpen, sideMenuClose }) {
  const manageItems = ManageListData;
  const scheduleItems = ScheduleListData;
  const menuItems = [manageItems, scheduleItems];
  const firstPage = manageItems[0].to;
  const path = defaultPath;

  return (
    <Wrapper>
      <CssBaseline />
      <Header
        open={open}
        sideMenuOpen={sideMenuOpen}
        sideMenuClose={sideMenuClose}
        menuItems={menuItems}
        path={path}
      />

      <Main open={open}>
        <Container>
          <Toolbar height="72" />
          <Switch>
            {manageItems.map(el => (
              <Route exact path={`${path}/${el.to}`} key={el.to}>
                {el.page}
              </Route>
            ))}
            {scheduleItems.map(el => (
              <Route exact path={`${path}/${el.to}`} key={el.to}>
                {el.page}
              </Route>
            ))}
            <Redirect path="*" to={`${path}/${firstPage}`} />
          </Switch>
        </Container>
      </Main>
    </Wrapper>
  );
}

App.propTypes = {
  open: PropTypes.bool.isRequired,
  sideMenuOpen: PropTypes.func.isRequired,
  sideMenuClose: PropTypes.func.isRequired
};

export default App;
