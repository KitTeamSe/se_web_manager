/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import NotificationIcon from './NotificationIcon';

export default {
  component: NotificationIcon,
  title: 'atoms/NotificationIcon'
};

const Template = args => <NotificationIcon {...args} />;

export const Default = Template.bind({});
Default.args = {};
