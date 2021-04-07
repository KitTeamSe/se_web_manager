import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Drawer, Divider } from '@material-ui/core';
import Toolbar from '../Toolbar/Toolbar';

const StyledPaper = styled.div`
  overflow-x: hidden;
  width: ${props => (props.open ? 200 : 48)}px;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background: #ffffff;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2.5px;
    background-color: #dddddd;

    &:hover {
      background-color: #aaaaaa;
    }
  }
  &::-webkit-scrollbar-track {
    background: #ffffff;
  }
`;

const DrawerStyled = styled(Drawer)`
  flex-shrink: 0;
  white-space: nowrap;
`;

const ListWrapper = styled.div`
  width: 100%;
  min-width: 200px;
`;

const SideMenuContainer = ({ children, open }) => {
  return (
    <DrawerStyled variant="permanent" open={open}>
      <StyledPaper open={open}>
        <Toolbar height="48" />
        <Divider />
        <ListWrapper>{children}</ListWrapper>
      </StyledPaper>
    </DrawerStyled>
  );
};

SideMenuContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool.isRequired
};

SideMenuContainer.defaultProps = {
  children: []
};

export default SideMenuContainer;
