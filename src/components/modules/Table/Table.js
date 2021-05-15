import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Table as Tables, TableContainer, Paper } from '@material-ui/core';
import TableHead from '../../atoms/TableHead/TableHead';
// import TableContent from '../../atoms/TableContent/TableContent';
import TableRow from '../../atoms/TableRow/TableRow';

const TableContainerStyled = styled(TableContainer)`
  margin-top: 20px;
`;

const TableStyeld = styled(Tables)``;

const Table = ({ head, rows }) => {
  return (
    <TableContainerStyled component={Paper}>
      <TableStyeld>
        <TableHead head={head} />
        {rows.map(e => (
          <TableRow head={head} data={e} />
        ))}
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
