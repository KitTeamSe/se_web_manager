/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import Button from './Button';

export default {
  component: Button,
  title: 'atoms/Button'
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: null,
  variant: null,
  color: null,
  disabled: false,
  href: null
};
