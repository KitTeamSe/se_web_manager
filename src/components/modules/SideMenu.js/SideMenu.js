import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '../../atoms/Toolbar/Toolbar';
import SideMenuList from '../SideMenuList/SideMenuList';

const StyledPaper = styled.div`
  width: ${props => (props.open ? 250 : 58)}px;
`;

const DrawerStyled = styled(Drawer)`
  flex-shrink: 0;
  white-space: nowrap;
`;

const ListWrapper = styled.div`
  width: 100%;
  min-width: 250px;
`;

const SideMenu = ({ open }) => {
  return (
    <DrawerStyled variant="permanent" open={open}>
      <StyledPaper open={open}>
        <Toolbar height="58" />
        <ListWrapper>
          <SideMenuList />
        </ListWrapper>
      </StyledPaper>
    </DrawerStyled>
  );
};

SideMenu.propTypes = {
  open: PropTypes.bool.isRequired
};

SideMenu.defaultProps = {};

export default SideMenu;
