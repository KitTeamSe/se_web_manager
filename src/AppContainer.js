import React from 'react';
import { useSelector } from 'react-redux';
import App from './App';
import { sideMenuOpen, sideMenuClose } from './modules/sideMenu';
import useActions from './libs/useActions';

const AppContainer = () => {
  const open = useSelector(state => state.sideMenu.open);
  const [onSideMenuOpen, onSideMenuClose] = useActions(
    [sideMenuOpen, sideMenuClose],
    []
  );
  return (
    <App
      open={open}
      sideMenuOpen={onSideMenuOpen}
      sideMenuClose={onSideMenuClose}
    />
  );
};

export default AppContainer;
// 성능 최적화 => rerendering 될 때
// export default React.memo(AppContainer);
