import React, { useState } from 'react';
import styled from 'styled-components';
import { CssBaseline, Container } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import Toolbar from './components/atoms/Toolbar/Toolbar';
import Header from './components/templates/Header/Header';
import useToggle from './libs/useToggle';
import { ManageListData, ScheduleListData } from './statics/data/SideMenuData';
import { MANAGE_URL } from './statics/data/config';

const Wrapper = styled.div`
  flex-shrink: 0;
  white-space: nowrap;
`;

const MainWrapper = styled.main`
  overflow-x: hidden;
  flex-grow: 1;
  margin: 0 58px;
  margin-left: ${props => (props.open ? 260 : 58)}px;
`;

// const Routes = ({ items }) =>
//   items.map(el => (
//     <Route exact path={`${MANAGE_URL}/${el.to}`} key={el.to}>
//       {el.page}
//     </Route>
//   ));

function App() {
  const menuRoutes = useState(
    ManageListData.map(el => (
      <Route path={`${MANAGE_URL}/${el.to}`} key={el.to} component={el.page} />
    ))
  );
  const scheduleRoutes = useState(
    ScheduleListData.map(el => (
      <Route path={`${MANAGE_URL}/${el.to}`} key={el.to} component={el.page} />
    ))
  );
  const [open, setOpen] = useToggle();
  const manageItems = ManageListData;
  const scheduleItems = ScheduleListData;
  const menuItems = [manageItems, scheduleItems];

  return (
    <Wrapper>
      <CssBaseline />
      <Header open={open} setOpen={setOpen} menuItems={menuItems} />

      <Switch>
        <MainWrapper open={open}>
          <Container>
            <Toolbar height="72" />
            <Switch>
              {menuRoutes}
              {scheduleRoutes}
            </Switch>
            {/* <Routes items={manageItems} />
            <Routes items={scheduleItems} /> */}
            {/* <Redirect path="*" to={`${path}/${firstPage}`} /> */}
          </Container>
        </MainWrapper>
      </Switch>
    </Wrapper>
  );
}

export default App;
