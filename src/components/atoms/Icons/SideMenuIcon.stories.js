/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import SideMenuIcon from './SideMenuIcon';

export default {
  component: SideMenuIcon,
  title: 'atoms/SideMenuIcon'
};

const Template = args => <SideMenuIcon {...args} />;

export const Default = Template.bind({});
Default.args = {};
