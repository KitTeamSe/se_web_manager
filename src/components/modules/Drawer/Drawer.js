import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Drawer as Drawers,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import { Inbox, Mail } from '@material-ui/icons';
import Toolbar from '../../atoms/Toolbar/Toolbar';

const StyledPaper = styled.div`
  width: ${props => (props.open ? 250 : 58)}px;
`;

const DrawerStyled = styled(Drawers)`
  flex-shrink: 0;
  white-space: nowrap;
`;

const ListWrapper = styled.div`
  width: 100%;
  min-width: 250px;
`;

const Drawer = ({ open }) => {
  return (
    <DrawerStyled variant="permanent" open={open}>
      <StyledPaper open={open}>
        <Toolbar height="58" />
        <Divider />
        <ListWrapper>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <Inbox /> : <Mail />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <Inbox /> : <Mail />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </ListWrapper>
      </StyledPaper>
    </DrawerStyled>
  );
};

Drawer.propTypes = {
  open: PropTypes.bool.isRequired
};

Drawer.defaultProps = {};

export default Drawer;
