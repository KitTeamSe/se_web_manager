/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import Bar from './Bar';

export default {
  component: Bar,
  title: 'atoms/Bar'
};

const Template = args => <Bar {...args} />;

export const Default = Template.bind({});
Default.args = {};
