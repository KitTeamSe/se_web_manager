/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import SideMenuListItem from './SideMenuListItem';

export default {
  component: SideMenuListItem,
  title: 'atoms/SideMenuListItem'
};

const Template = args => <SideMenuListItem {...args} />;

export const Default = Template.bind({});
Default.args = {};
