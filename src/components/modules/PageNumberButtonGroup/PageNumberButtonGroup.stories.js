import StoryRouter from 'storybook-react-router';

import React from 'react';

import PageNumberButtonGroup from './PageNumberButtonGroup';

export default {
  component: PageNumberButtonGroup,
  title: 'modules/PageNumberButtonGroup',
  decorators: [StoryRouter()]
};

const Template = args => <PageNumberButtonGroup {...args} />;

export const Default = Template.bind({});
Default.args = {

};
