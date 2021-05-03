/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import MenuCreateDialog from './MenuCreateDialog';

export default {
  component: MenuCreateDialog,
  title: 'modules/MenuCreateDialog'
};

const Template = args => <MenuCreateDialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  title:'title',text:'text', open:true, handleClose:()=>{}, toggle:()=>{}, items:[
    { name: 'menuOrder', label: '순서' },
    { name: 'nameEng', label: '영어이름' },
    { name: 'nameKor', label: '한글이름' },
    {
      name: 'description',
      label: '설명'
    },
    { name: 'parentId', label: '상위메뉴' },
    { name: 'url', label: 'URL' }
  ]
};
