/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import IconButton from './IconButton';

export default {
  component: IconButton,
  title: 'atoms/IconButton'
};

const Template = args => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
