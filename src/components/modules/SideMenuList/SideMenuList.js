import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Divider, List } from '@material-ui/core';
// import { Inbox, Mail } from '@material-ui/icons';
import {
  Menu,
  Dashboard,
  Label,
  Work,
  ViewList,
  Equalizer,
  Block,
  Notifications,
  Report,
  Person,
  Group
} from '@material-ui/icons';
import SideMenuListItem from '../../atoms/SideMenuListItem/SideMenuListItem';

const icons = {
  menu: <Menu />,
  board: <Dashboard />,
  tag: <Label />,
  job: <Work />,
  log: <ViewList />,
  statistics: <Equalizer />,
  blacklist: <Block />,
  notice: <Notifications />,
  report: <Report />,
  authority_group: <Person />,
  authority: <Group />
};

const SideMenuList = ({ data }) => {
  return (
    <>
      <Divider />
      <List>
        {data.map((el, index) => (
          <SideMenuListItem count={index} data={el}>
            <>{icons[el.id]}</>
          </SideMenuListItem>
        ))}
      </List>
    </>
  );
};

SideMenuList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

SideMenuList.defaultProps = {
  data: []
};

export default SideMenuList;
