import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { List, Collapse } from '@material-ui/core';
import SideMenuListItem from '../../atoms/SideMenuListItem/SideMenuListItem';
import SideMenuNestedList from '../../atoms/SideMenuNestedList/SideMenuNestedList';
import { ScheduleNestedData } from '../../../statics/data/SideMenuData';

const ListStyled = styled(List)`
  padding: 2px 0;
`;

const ScheduleList = ({ items, path }) => {
  const scheduleNestedItem = ScheduleNestedData;
  const [openScheduleList, setOpenScheduleList] = useState(false);

  const handleScheduleList = useCallback(() => {
    setOpenScheduleList(!openScheduleList);
  }, [openScheduleList]);

  return (
    <ListStyled>
      <SideMenuNestedList
        name={scheduleNestedItem.name}
        open={openScheduleList}
        onClick={handleScheduleList}
      >
        {scheduleNestedItem.icon}
      </SideMenuNestedList>
      <Collapse in={openScheduleList} timeout="auto" unmountOnExit>
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

ScheduleList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  path: PropTypes.string
};

ScheduleList.defaultProps = {
  items: [],
  path: '/'
};

export default ScheduleList;
