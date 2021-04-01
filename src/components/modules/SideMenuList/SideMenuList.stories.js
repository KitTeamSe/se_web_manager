import StoryRouter from 'storybook-react-router';

import React from 'react';

import SideMenuList from './SideMenuList';

export default {
  component: SideMenuList,
  title: 'atoms/SideMenuList',
  decorators: [StoryRouter()]
};

const Template = args => <SideMenuList {...args} />;

export const Default = Template.bind({});
Default.args = {};
