/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import MenuUpdateDialog from './MenuUpdateDialog';

export default {
  component: MenuUpdateDialog,
  title: 'modules/MenuUpdateDialog'
};

const Template = args => <MenuUpdateDialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  title:'title',text:'text', open:true, handleClose:()=>{}, toggle:()=>{},items:[
    { name: 'menuOrder', label: '순서', value: 1 },
    { name: 'nameEng', label: '영어이름' , value: 'nameEng'},
    { name: 'nameKor', label: '한글이름' , value: '한글이름'},
    {
      name: 'description',
      label: '설명', value: '설명'
    },
    { name: 'parentId', label: '상위메뉴' , value: 1},
    { name: 'url', label: 'URL' , value: 'url/abc'}
  ]
};
