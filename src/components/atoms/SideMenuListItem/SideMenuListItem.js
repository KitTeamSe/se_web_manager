import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import styled from 'styled-components';

const RedirectLink = styled.a`
  text-decoration: none;
  color: #000000de;
`;

const ListItemStyled = styled(ListItem)`
  padding: 4px 12px;
`;

const ListItemIconStyled = styled(ListItemIcon)`
  min-width: 40px;
  key: ${({ key }) => key};
`;

const SideMenuListItem = ({ children, name, to, redirect }) => {
  console.log(to);
  if (redirect)
    return (
      <RedirectLink href={to} target="_blank" rel="noreferrer">
        <ListItemStyled dense button key={name}>
          <ListItemIconStyled>{children}</ListItemIconStyled>
          <ListItemText primary={name} />
        </ListItemStyled>
      </RedirectLink>
    );
  return (
    <ListItemStyled dense button key={name} component={Link} to={to}>
      <ListItemIconStyled>{children}</ListItemIconStyled>
      <ListItemText primary={name} />
    </ListItemStyled>
  );
};

SideMenuListItem.propTypes = {
  children: PropTypes.shape({ root: PropTypes.string }),
  name: PropTypes.string,
  to: PropTypes.string
};

SideMenuListItem.defaultProps = {
  children: {},
  name: '',
  to: '/'
};

export default SideMenuListItem;
