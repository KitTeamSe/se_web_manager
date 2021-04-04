import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { List, Collapse } from '@material-ui/core';
import SideMenuListItem from '../../atoms/SideMenuListItem/SideMenuListItem';
import SideMenuNestedList from '../../atoms/SideMenuNestedList/SideMenuNestedList';
import { ManageNestedData } from '../../../statics/data/SideMenuData';

const ListStyled = styled(List)`
  padding: 2px 0;
`;

const ManageList = ({ items, path }) => {
  const manageNestedItem = ManageNestedData;
  const [openManageList, setOpenManageList] = useState(false);

  const handleManageList = useCallback(() => {
    setOpenManageList(!openManageList);
  }, [openManageList]);

  return (
    <ListStyled>
      <SideMenuNestedList
        name={manageNestedItem.name}
        open={openManageList}
        onClick={handleManageList}
      >
        {manageNestedItem.icon}
      </SideMenuNestedList>
      <Collapse in={openManageList} timeout="auto" unmountOnExit>
        <ListStyled>
          {items.map((el, index) => (
            <SideMenuListItem
              count={index}
              to={`${path}/${el.to}`}
              name={el.name}
            >
              {el.icon}
            </SideMenuListItem>
          ))}
        </ListStyled>
      </Collapse>
    </ListStyled>
  );
};

ManageList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  path: PropTypes.string
};

ManageList.defaultProps = {
  items: [],
  path: '/'
};

export default ManageList;
