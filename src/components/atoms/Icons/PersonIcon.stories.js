/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import PersonIcon from './PersonIcon';

export default {
  component: PersonIcon,
  title: 'atoms/PersonIcon'
};

const Template = args => <PersonIcon {...args} />;

export const Default = Template.bind({});
Default.args = {};
