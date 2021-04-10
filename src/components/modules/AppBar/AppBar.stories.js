
import React from 'react';

import AppBar from './AppBar';

export default {
  component: AppBar,
  title: 'modules/AppBar',
  decorators: []
};

const Template = args => <AppBar {...args} />;

export const Default = Template.bind({});
Default.args = {
    setOpen:()=>{}
};
