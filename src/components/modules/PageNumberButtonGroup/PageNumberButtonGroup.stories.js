import StoryRouter from 'storybook-react-router';

import React from 'react';

import PageNumberButtonGroup from './PageNumberButtonGroup';

export default {
  component: PageNumberButtonGroup,
  title: 'modules/PageNumberButtonGroup',
  decorators: [StoryRouter()]
};

const Template = args => <PageNumberButtonGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonProps: {
    variant: 'contained',
    color: '',
    backgroundColor: 'white',
    disabled: false,
    href: '',
    onClick: ()=>{console.log('1')}
  },
  nowPage: 1,
  maxPage: 20,
  halfRange: 2
};
