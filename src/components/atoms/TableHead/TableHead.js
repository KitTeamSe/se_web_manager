import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  TableCell,
  TableHead as TableHeads,
  TableRow
} from '@material-ui/core';

const TableHeadStyled = styled(TableHeads)``;

const TableCellStyled = styled(TableCell)`
  font-weight: 700;
`;

const TableHead = ({ head }) => {
  const tableCell = head.map(data => (
    <TableCellStyled
      key={data.name}
      align="center"
      style={{ width: data.width }}
    >
      {data.name}
    </TableCellStyled>
  ));

  return (
    <TableHeadStyled>
      <TableRow>{tableCell}</TableRow>
    </TableHeadStyled>
  );
};

TableHead.propTypes = {
  head: PropTypes.arrayOf(PropTypes.object)
};

TableHead.defaultProps = {
  head: []
};

export default TableHead;
