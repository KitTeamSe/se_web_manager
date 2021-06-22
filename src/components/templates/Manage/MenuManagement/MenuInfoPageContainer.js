import React, { useEffect } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadMenu, initialize } from '../../../../modules/manage/menu';
import MenuInfoPage from './MenuInfoPage';

const MenuInfoViewContainer = ({ location, match }) => {
  const dispatch = useDispatch();
  const { menuData, error, loadingData } = useSelector(({ menu, loading }) => ({
    menuData: menu.info,
    error: menu.infoError,
    loadingData: loading['menus/LOAD_SUBJECTS']
  }));

  useEffect(() => {
    dispatch(initialize());
  }, []);

  useEffect(() => {
    const { id } = match.params;
    const token = localStorage.getItem('token');
    dispatch(loadMenu({ id, token }));
  }, [dispatch, location.search]);

  return <MenuInfoPage menu={menuData} error={error} loading={loadingData} />;
};

MenuInfoViewContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
};

export default withRouter(MenuInfoViewContainer);
