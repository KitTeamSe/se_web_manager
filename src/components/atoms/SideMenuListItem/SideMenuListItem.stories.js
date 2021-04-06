import React from 'react';
import StoryRouter from 'storybook-react-router';

import SideMenuListItem from './SideMenuListItem';

export default {
  component: SideMenuListItem,
  title: 'atoms/SideMenuListItem',
  decorators: [StoryRouter()]
};

const Template = args => <SideMenuListItem {...args} />;

export const Default = Template.bind({});
Default.args = {};
