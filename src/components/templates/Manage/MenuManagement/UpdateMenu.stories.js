/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import UpdateMenu from './UpdateMenu';

export default {
  component: UpdateMenu,
  title: 'templates/UpdateMenu'
};

const Template = args => <UpdateMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  open:true,
  toggle:()=>{},
  menuData: {
    description: `Menu_by_id Description`,
    menuId: 1,
    menuOrder: 1,
    nameEng: `Menu_by_id Name in Eng`,
    nameKor: `Menu_by_id Name in Kor`,
    parentId: 1
  }
};
