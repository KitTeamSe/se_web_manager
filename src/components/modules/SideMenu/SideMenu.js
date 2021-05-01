import React from 'react';
import PropTypes from 'prop-types';
import SideMenuContainer from '../../atoms/SideMenuContainer/SideMenuContainer';
import SideMenuList from '../SideMenuList/SideMenuList';
import {
  ScheduleNestedData,
  ManageNestedData
} from '../../../statics/data/SideMenuData';

const SideMenu = ({ open, items }) => {
  const [manageItem, scheduleItem] = items;

  return (
    <SideMenuContainer open={open}>
      <SideMenuList itemData={ManageNestedData} items={manageItem} />
      <SideMenuList itemData={ScheduleNestedData} items={scheduleItem} />
    </SideMenuContainer>
  );
};

SideMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.array)
};

SideMenu.defaultProps = {
  items: []
};

export default SideMenu;
