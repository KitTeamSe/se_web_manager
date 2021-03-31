import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const SideMenuList = ({ children, data }) => {
  return (
    <ListItem button key={data.name}>
      <ListItemIcon>{children}</ListItemIcon>
      <ListItemText primary={data.name} />
    </ListItem>
  );
};

SideMenuList.propTypes = {
  children: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object)
};

SideMenuList.defaultProps = {
  children: '',
  data: []
};

export default SideMenuList;
