/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import Table from './Table';

export default {
  component: Table,
  title: 'atoms/Table'
};

const Template = args => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
    headData: ['title1', 'title2', 'title3'],
    rowData: [
      ['cellData1', 'cellData2', 'cellData3'],
      ['cellData4', 'cellData5', 'cellData6'],
      ['cellData7', 'cellData8', 'cellData9']
    ]
};
