import React from 'react';
import PropTypes from 'prop-types';
import SideMenuContainer from '../../atoms/SideMenuContainer/SideMenuContainer';
import SideMenuList from '../SideMenuList/SideMenuList';
import {
  ManageListData,
  ScheduleListData,
  DevelopListData,
  ManageNestedData,
  ScheduleNestedData,
  DevelopNestedData
} from '../../../statics/data/SideMenuData';

const SideMenu = ({ open }) => {
  return (
    <SideMenuContainer open={open}>
      <SideMenuList itemData={ManageNestedData} items={ManageListData} />
      <SideMenuList itemData={ScheduleNestedData} items={ScheduleListData} />
      <SideMenuList
        itemData={DevelopNestedData}
        items={DevelopListData}
        redirect
      />
    </SideMenuContainer>
  );
};

SideMenu.propTypes = {
  open: PropTypes.bool.isRequired
};

SideMenu.defaultProps = {};

export default SideMenu;
