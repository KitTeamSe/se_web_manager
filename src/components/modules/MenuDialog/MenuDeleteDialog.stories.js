/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import MenuDeleteDialog from './MenuDeleteDialog';

export default {
  component: MenuDeleteDialog,
  title: 'modules/MenuDeleteDialog'
};

const Template = args => <MenuDeleteDialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  title:'title',text:'text', open:true, handleClose:()=>{}, toggle:()=>{}
};
