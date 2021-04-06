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
    halfRange:2,
    headData: ['title1', 'title2', 'title3'],
    rowData: [
      ['cellData1', 'cellData2', 'cellData3'],
      ['cellData4', 'cellData5', 'cellData6'],
      ['cellData7', 'cellData8', 'cellData9']
    ]

};
