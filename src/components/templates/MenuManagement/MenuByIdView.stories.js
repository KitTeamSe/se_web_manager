import React from 'react';
import MenuByIdView from './MenuByIdView';

export default {
  component: MenuByIdView,
  title: 'templates/MenuByIdView',
};

const Template = args => <MenuByIdView {...args} />;

export const Default = Template.bind({});
Default.args = {


    // storybook에선 라우팅으로 컴포넌트가 이어지지 않아 match값이 없으므로 빈 문자열을 넣어주었다.
  match: {url:'story/MenuByIdView', param:{id:123}},
  textData: [
    { label: 'Story_defaultLabel', text: 'Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText' },
    { label: 'Story_defaultLabel', text: 'Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText' },
    { label: 'Story_defaultLabel', text: 'Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText' },
    { label: 'Story_defaultLabel', text: 'Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText' },
    { label: 'Story_defaultLabel', text: 'Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText Story_defaultText' }
  ]
};
