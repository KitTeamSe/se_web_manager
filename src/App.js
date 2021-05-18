import React from 'react';
import styled from 'styled-components';
import { CssBaseline } from '@material-ui/core';
import { Route } from 'react-router-dom';
import Toolbar from './components/atoms/Toolbar/Toolbar';
import Header from './components/templates/Header/Header';
import useToggle from './libs/useToggle';
import { ManageListData, ScheduleListData } from './statics/data/SideMenuData';
import { ManageRouteData, ScheduleRouteData } from './statics/data/RouteData';
import { MANAGE_URL } from './statics/data/config';

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

const Routes = ({ items }) =>
  items.map(el => {
    return (
      <Route path={`${MANAGE_URL}/${el.to}`} key={el.to}>
        {el.page}
      </Route>
    );
  });

function App() {
  const [open, setOpen] = useToggle();
  const menuItems = [ManageListData, ScheduleListData];

  return (
    <Wrapper>
      <CssBaseline />
      <Header open={open} setOpen={setOpen} menuItems={menuItems} />

      <MainWrapper open={open}>
        <Toolbar height="72" />
        <Routes items={ManageRouteData} />
        <Routes items={ScheduleRouteData} />
        {/* <Redirect path="*" to={`${path}/${firstPage}`} /> */}
      </MainWrapper>
    </Wrapper>
  );
}

export default App;
