import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import styled from 'styled-components';

const ListItemStyled = styled(ListItem)`
  padding: 6px 12px;
`;

const ListItemIconStyled = styled(ListItemIcon)`
  min-width: 40px;
  key: ${({ key }) => key};
  color: #222222;
`;

const ListItemTextStyled = styled(ListItemText)`
  color: #222222;
`;

const SideMenuNestedList = ({ children, name, open, onClick }) => {
  return (
    <ListItemStyled dense button component={Link} onClick={onClick}>
      <ListItemIconStyled>{children}</ListItemIconStyled>
      <ListItemTextStyled
        primary={
          <Typography
            variant="body2"
            style={{ fontWeight: '600', fontSize: '1.04rem' }}
          >
            {name}
          </Typography>
        }
      />
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItemStyled>
  );
};

SideMenuNestedList.propTypes = {
  children: PropTypes.shape({ root: PropTypes.string }),
  name: PropTypes.string,
  open: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

SideMenuNestedList.defaultProps = {
  children: {},
  name: '',
  open: false
};

export default SideMenuNestedList;
