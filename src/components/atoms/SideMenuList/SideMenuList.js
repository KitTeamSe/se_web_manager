import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { List, Collapse } from '@material-ui/core';
import SideMenuListItem from '../SideMenuListItem/SideMenuListItem';
import SideMenuNestedList from '../SideMenuNestedList/SideMenuNestedList';

const ListStyled = styled(List)`
  padding: 2px 0;
`;

const SideMenuList = ({ itemData, items, path }) => {
  const [openList, setopenList] = useState(false);

  const handleScheduleList = useCallback(() => {
    setopenList(!openList);
  }, [openList]);

  const scheduleMenuList = items.map((el, index) => (
    <SideMenuListItem
      count={index}
      to={`${path}/${el.to}`}
      name={el.name}
      key={el.name}
    >
      {el.icon}
    </SideMenuListItem>
  ));

  return (
    <ListStyled>
      <SideMenuNestedList
        name={itemData.name}
        open={openList}
        onClick={handleScheduleList}
        key={itemData.name}
      >
        {itemData.icon}
      </SideMenuNestedList>
      <Collapse in={openList} timeout="auto" unmountOnExit>
        <ListStyled>{scheduleMenuList}</ListStyled>
      </Collapse>
    </ListStyled>
  );
};

SideMenuList.propTypes = {
  itemData: PropTypes.shape({
    name: PropTypes.string,
    icon: PropTypes.shape({ root: PropTypes.string })
  }),
  items: PropTypes.arrayOf(PropTypes.object),
  path: PropTypes.string
};

SideMenuList.defaultProps = {
  itemData: [],
  items: [],
  path: '/'
};

export default SideMenuList;
