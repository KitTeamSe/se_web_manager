
import React from 'react';

import Button from './Button';

export default {
  component: Button,
  title: 'atoms/Button'
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Button',
  variant: 'contained',
  color: '#ffffff',
  disabled: false,
  href: ''
};
