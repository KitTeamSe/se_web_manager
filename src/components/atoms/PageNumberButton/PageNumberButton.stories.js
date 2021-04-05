

import React from 'react';

import PageNumberButton from './PageNumberButton';

export default {
  component: PageNumberButton,
  title: 'atoms/PageNumberButton'
};

const Template = args => <PageNumberButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    child: 1,
    variant: 'contained',
    backgroundColor: 'white',
    disabled: false,
    href: ''
};
