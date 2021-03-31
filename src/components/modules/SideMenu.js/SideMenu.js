import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '../../atoms/Toolbar/Toolbar';
import SideMenuList from '../SideMenuList/SideMenuList';

const items = [
  {
    id: 'menu',
    name: '메뉴관리'
  },
  {
    id: 'board',
    name: '게시판관리'
  },
  {
    id: 'tag',
    name: '태그관리'
  },
  {
    id: 'job',
    name: '취업정보업로드'
  },
  {
    id: 'log',
    name: '로그관리'
  },
  {
    id: 'statistics',
    name: '통계관리'
  },
  {
    id: 'blacklist',
    name: 'IP차단관리'
  },
  {
    id: 'notice',
    name: '알림관리'
  },
  {
    id: 'report',
    name: '신고관리'
  },
  {
    id: 'authority_group',
    name: '권한그룹관리'
  },
  {
    id: 'authority',
    name: '권한관리'
  }
];

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
          <SideMenuList data={items} />
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
