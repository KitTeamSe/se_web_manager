import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Table as Tables, TableContainer, Paper } from '@material-ui/core';
import TableHead from '../../atoms/Table/TableHead';
import TableContent from '../../atoms/Table/TableContent';

const TableContainerStyled = styled(TableContainer)`
  margin-top: 20px;
`;

const TableStyeld = styled(Tables)``;

const Table = ({ head, rows }) => {
  return (
    <TableContainerStyled component={Paper}>
      <TableStyeld arial-label="table">
        <TableHead row={head} />
        <TableContent rows={rows} head={head} />
      </TableStyeld>
    </TableContainerStyled>
  );
};

Table.propTypes = {
  head: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.arrayOf(PropTypes.object)
};

Table.defaultProps = {
  head: [],
  rows: []
};

export default Table;