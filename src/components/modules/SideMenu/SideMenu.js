import React from 'react';
import PropTypes from 'prop-types';
import SideMenuContainer from '../../atoms/SideMenuContainer/SideMenuContainer';
import SideMenuList from '../../atoms/SideMenuList/SideMenuList';

import {
  ScheduleNestedData,
  ManageNestedData
} from '../../../statics/data/SideMenuData';

const SideMenu = ({ open, items, path }) => {
  const [scheduleItem, manageItem] = items;

  return (
    <SideMenuContainer open={open}>
      <SideMenuList
        itemData={ScheduleNestedData}
        items={scheduleItem}
        path={path}
      />
      <SideMenuList
        itemData={ManageNestedData}
        items={manageItem}
        path={path}
      />
    </SideMenuContainer>
  );
};

SideMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.array),
  path: PropTypes.string
};

SideMenu.defaultProps = {
  items: [],
  path: '/'
};

export default SideMenu;
