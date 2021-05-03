/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import TextList from './TextList';

export default {
  component: TextList,
  title: 'modules/TextList'
};

const Template = args => <TextList {...args} />;

export const Default = Template.bind({});
Default.args = {
    textData: [{ label: 'Story_defaultLabel', text: 'Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText' },
    { label: 'Story_defaultLabel', text: 'Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText' },
    { label: 'Story_defaultLabel', text: 'Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText' },
    { label: 'Story_defaultLabel', text: 'Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText' },
    { label: 'Story_defaultLabel', text: 'Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText' }
]
};
