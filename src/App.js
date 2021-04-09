import React, { useState } from 'react';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch, Redirect } from 'react-router-dom';
import ContentContainer from './components/atoms/ContentContainer/ContentContainer';
import AppBar from './components/modules/AppBar/AppBar';
import SideMenu from './components/modules/SideMenu/SideMenu';
import {
  defaultPath,
  ManageListData,
  ScheduleListData
} from './statics/data/SideMenuData';
// import MenuListView from './components/templates/MenuManagement/MenuListView';
import MenuRouter from './components/templates/MenuManagement/MenuRouter';

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

      <ContentContainer open={open} setOpen={setOpen}>
        <Switch>
          <Route path={`${path}`} component={MenuRouter} />
          {/* 아래의 방식이 react router의 match, history를 하위 컴포넌트로 내려주지 못해 위쪽 방식으로 일단 진행해보겠음. 추후 구조를 수정해야할것같다. */}
          <Route exact path="" />
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
      </ContentContainer>
    </Wrapper>
  );
}

// menuItems: PropTypes.shape({
//   path: PropTypes.string,
//   items: PropTypes.arrayOf(PropTypes.object)
// })

export default App;
