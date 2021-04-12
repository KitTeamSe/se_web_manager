/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import InfoIcon from './InfoIcon';

export default {
  component: InfoIcon,
  title: 'atoms/InfoIcon'
};

const Template = args => <InfoIcon {...args} />;

export const Default = Template.bind({});
Default.args = {};
