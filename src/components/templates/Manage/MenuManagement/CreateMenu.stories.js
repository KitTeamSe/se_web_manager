/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import CreateMenu from './CreateMenu';

export default {
  component: CreateMenu,
  title: 'templates/CreateMenu'
};

const Template = args => <CreateMenu {...args} />;

export const Default = Template.bind({});

Default.args = {
   open:true,
   toggle:()=>{}
};
