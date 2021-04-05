import StoryRouter from 'storybook-react-router';

import React from 'react';

import MenuListView from './MenuListView';

export default {
  component: MenuListView,
  title: 'templates/MenuListView',
};

const Template = args => <MenuListView {...args} />;

export const Default = Template.bind({});
Default.args = {
    nowPage:1,
    maxPage:20,
    halfRange:2
};
