import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import styled from 'styled-components';

const ListItemStyled = styled(ListItem)`
  padding: 4px 12px;
`;

const ListItemIconStyled = styled(ListItemIcon)`
  min-width: 40px;
  key: ${({ key }) => key};
`;

const SideMenuListItem = ({ children, data, path }) => {
  return (
    <ListItemStyled
      dense
      button
      key={data.name}
      component={Link}
      to={`${path}/${data.id}`}
    >
      <ListItemIconStyled>{children}</ListItemIconStyled>
      <ListItemText primary={data.name} />
    </ListItemStyled>
  );
};

SideMenuListItem.propTypes = {
  children: PropTypes.shape({ root: PropTypes.string }),
  data: PropTypes.shape({ name: PropTypes.string, id: PropTypes.string }),
  path: PropTypes.string
};

SideMenuListItem.defaultProps = {
  children: {},
  data: {},
  path: '/'
};

export default SideMenuListItem;
