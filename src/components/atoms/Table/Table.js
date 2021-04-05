import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Table as Tables, TableContainer, Paper } from '@material-ui/core';
import TableHead from './TableHead';
import TableContent from './TableContent';

const TableContainerStyled = styled(TableContainer)`
  margin-top: 20px;
`;

const TableStyeld = styled(Tables)``;

const Table = ({ head, items }) => {
  return (
    <TableContainerStyled component={Paper}>
      <TableStyeld arial-label="table">
        <TableHead row={head} />
        <TableContent rows={items} head={head} />
      </TableStyeld>
    </TableContainerStyled>
  );
};

Table.propTypes = {
  head: PropTypes.arrayOf(PropTypes.object),
  items: PropTypes.arrayOf(PropTypes.object)
};

Table.defaultProps = {
  head: [],
  items: []
};

export default Table;
