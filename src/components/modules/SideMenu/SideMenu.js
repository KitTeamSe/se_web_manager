import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@material-ui/core';
import SideMenuListItem from '../../atoms/SideMenuListItem/SideMenuListItem';
import SideMenuContainer from '../../atoms/SideMenuContainer/SideMenuContainer';

const SideMenu = ({ open, items, path }) => {
  return (
    <SideMenuContainer open={open}>
      <List>
        {items.map((el, index) => (
          <SideMenuListItem count={index} data={el} path={path} key={el.name}>
            {el.icon}
          </SideMenuListItem>
        ))}
      </List>
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
