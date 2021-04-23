/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import DeleteMenu from './DeleteMenu';

export default {
  component: DeleteMenu,
  title: 'templates/DeleteMenu'
};

const Template = args => <DeleteMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  deleteData:{menuId:1},
  open:true,
  toggle:()=>{}
};
