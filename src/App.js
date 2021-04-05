import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch, Redirect } from 'react-router-dom';
import ContentWrapper from './components/atoms/ContentWrapper/ContentWrapper';
import AppBar from './components/modules/AppBar/AppBar';
import SideMenu from './components/modules/SideMenu/SideMenu';
import {
  defaultPath,
  ManageListData,
  ScheduleListData
} from './statics/data/SideMenuData';

const Wrapper = styled.div`
  flex-shrink: 0;
  white-space: nowrap;
`;

function App() {
  const manageItems = ManageListData;
  const scheduleItems = ScheduleListData;
  const menuItems = [manageItems, scheduleItems];

  const [firstPage, setFirstPage] = useState(manageItems[0].to);
  const [open, setOpen] = useState(false);
  const path = defaultPath;

  // const doNothing = () => {
  //   return '#';
  // };

  return (
    <Wrapper>
      <CssBaseline />
      <AppBar open={open} setOpen={setOpen} path={path} />
      <SideMenu
        open={open}
        setFirstPage={setFirstPage}
        items={menuItems}
        path={path}
      />

      <ContentWrapper open={open} setOpen={setOpen}>
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
      </ContentWrapper>
    </Wrapper>
  );
}

// menuItems: PropTypes.shape({
//   path: PropTypes.string,
//   items: PropTypes.arrayOf(PropTypes.object)
// })

export default App;
