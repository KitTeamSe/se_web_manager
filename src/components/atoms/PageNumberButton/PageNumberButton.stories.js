

import React from 'react';

import PageNumberButton from './PageNumberButton';

export default {
  component: PageNumberButton,
  title: 'atoms/PageNumberButton'
};

const Template = args => <PageNumberButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: '1',
    variant: 'contained',
    color: 'primary',
    disabled: false,
    href: ''
};
