/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import Toolbar from './Toolbar';

export default {
  component: Toolbar,
  title: 'atoms/Toolbar'
};

const Template = args => <Toolbar {...args} />;

export const Default = Template.bind({});
Default.args = {};
