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

const TableHead = ({ row }) => {
  const tableCell = row.map((data, index) =>
    index === 0 ? (
      <TableCellStyled key={data.name}>{data.name}</TableCellStyled>
    ) : (
      <TableCellStyled key={data.name} align="center">
        {data.name}
      </TableCellStyled>
    )
  );

  return (
    <TableHeadStyled>
      <TableRow>{tableCell}</TableRow>
    </TableHeadStyled>
  );
};

TableHead.propTypes = {
  row: PropTypes.arrayOf(PropTypes.object)
};

TableHead.defaultProps = {
  row: []
};

export default TableHead;
