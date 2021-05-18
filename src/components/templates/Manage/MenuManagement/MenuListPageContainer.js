import React, { useState, useEffect } from 'react';
import qs from 'qs';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadMenus, initialize } from '../../../../modules/manage/menu';
import MenuListPage from './MenuListPage';

const MenuListViewContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { menusData, error, loadingData } = useSelector(
    ({ menu, loading }) => ({
      menusData: menu.list,
      error: menu.listError,
      loadingData: loading['menus/LOAD_SUBJECTS']
    })
  );
  const [newPage, setNewPage] = useState(1);

  useEffect(() => {
    dispatch(initialize());
  }, []);

  useEffect(() => {
    const { page = 1 } = qs.parse(location.search, { ignoreQueryPrefix: true });
    setNewPage(page);
    const token = localStorage.getItem('token');
    dispatch(loadMenus({ token }));
  }, [dispatch, location.search]);

  return (
    <MenuListPage
      menu={menusData}
      error={error}
      loading={loadingData}
      page={newPage}
    />
  );
};

MenuListViewContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
};

export default withRouter(MenuListViewContainer);
