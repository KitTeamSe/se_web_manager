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
    rowData: {
      onRowClick:()=>{},
      cells: [
      ['cellData1', 'cellData2', 'cellData3'],
      ['cellData4', 'cellData5', 'cellData6'],
      ['cellData7', 'cellData8', 'cellData9']
    ]
   },
   // storybook에선 라우팅으로 컴포넌트가 이어지지 않아 match값이 없으므로 빈 문자열을 넣어주었다.
   match: {url:''}

};
