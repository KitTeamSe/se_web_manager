import StoryRouter from 'storybook-react-router';

import React from 'react';

import SideMenu from './SideMenu';

export default {
  component: SideMenu,
  title: 'modules/SideMenu',
  decorators: [StoryRouter()]
};

const Template = args => <SideMenu {...args} />;

export const Default = Template.bind({});
Default.args = {};
