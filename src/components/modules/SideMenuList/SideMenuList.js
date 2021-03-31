import React from 'react';
import { Divider, List } from '@material-ui/core';
import SideMenuListItem from '../../atoms/SideMenuListItem/SideMenuListItem';
import SideMenuListData from '../../../statics/data/SideMenuListData';

const SideMenuList = () => {
  const menuItems = SideMenuListData;
  return (
    <>
      <Divider />
      <List>
        {menuItems.items.map((el, index) => (
          <SideMenuListItem count={index} data={el} path={menuItems.path}>
            <>{el.icon}</>
          </SideMenuListItem>
        ))}
      </List>
    </>
  );
};

SideMenuList.propTypes = {};

SideMenuList.defaultProps = {};

export default SideMenuList;
