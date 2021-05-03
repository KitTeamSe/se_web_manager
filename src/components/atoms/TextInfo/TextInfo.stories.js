/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import TextInfo from './TextInfo';

export default {
  component: TextInfo,
  title: 'atoms/TextInfo'
};

const Template = args => <TextInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'TextInfo_args_text'
};
