import React, { useState } from 'react';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch, Redirect } from 'react-router-dom';
import ContentContainer from './components/atoms/ContentContainer/ContentContainer';
import AppBar from './components/modules/AppBar/AppBar';
import SideMenu from './components/modules/SideMenu/SideMenu';
import { defaultPath, SideMenuListData } from './statics/data/SideMenuListData';

const Wrapper = styled.div`
  flex-shrink: 0;
  white-space: nowrap;
`;

function App() {
  const menuItems = SideMenuListData;
  const path = defaultPath;
  const firstPage = menuItems[0].id;
  const [open, setOpen] = useState(false);

  // const doNothing = () => {
  //   return '#';
  // };

  return (
    <Wrapper>
      <CssBaseline />
      <AppBar open={open} setOpen={setOpen} path={menuItems.path} />
      <SideMenu open={open} items={menuItems} path={path} />

      <ContentContainer open={open} setOpen={setOpen}>
        <Switch>
          {menuItems.map(el => (
            <Route exact path={`${path}/${el.id}`} key={el.id}>
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
