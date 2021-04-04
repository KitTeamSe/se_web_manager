import React from 'react';
import PropTypes from 'prop-types';
import SideMenuContainer from '../../atoms/SideMenuContainer/SideMenuContainer';
import ManageList from './ManageList';
import ScheduleList from './ScheduleList';

const SideMenu = ({ open, items, path }) => {
  const [scheduleItem, manageItem] = items;
  console.log(scheduleItem);
  console.log(manageItem);

  return (
    <SideMenuContainer open={open}>
      <ScheduleList items={scheduleItem} path={path} />
      <ManageList items={manageItem} path={path} />
    </SideMenuContainer>
  );
};

SideMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
  path: PropTypes.string
};

SideMenu.defaultProps = {
  items: [],
  path: '/'
};

export default SideMenu;
