import StoryRouter from 'storybook-react-router';

import React from 'react';

import AppBar from './AppBar';

export default {
  component: AppBar,
  title: 'atoms/AppBar',
  decorators: [StoryRouter()]
};

const Template = args => <AppBar {...args} />;

export const Default = Template.bind({});
Default.args = {
    setOpen:()=>{}
};
