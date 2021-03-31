import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const SideMenuList = ({ children, data, path }) => {
  return (
    <ListItem button key={data.name} component={Link} to={`${path}/${data.id}`}>
      <ListItemIcon>{children}</ListItemIcon>
      <ListItemText primary={data.name} />
    </ListItem>
  );
};

SideMenuList.propTypes = {
  children: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
  path: PropTypes.string
};

SideMenuList.defaultProps = {
  children: '',
  data: [],
  path: '/'
};

export default SideMenuList;
