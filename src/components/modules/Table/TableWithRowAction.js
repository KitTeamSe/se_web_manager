import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MuiTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import MuiTableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

const StyledTable = styled(MuiTable)`
  minwidth: 650;
`;
const StyledTableRow = styled(MuiTableRow)`
  &:hover {
    cursor: ${({ hover }) => (hover ? 'pointer' : 'default')};
  }
`;

// key 일단 index 사용하였음 문제시 수정
const Table = ({ headData, rowData, hover }) => {
  const [headCells, setHeadCells] = useState();
  const [rows, setRows] = useState();

  const renderRows = () => {
    const rowArray = rowData.map(row => {
      return (
        <StyledTableRow hover={hover} onClick={row.onRowClick}>
          {row.cells.map((cellData, innerIndex) => {
            const innerTempKey = innerIndex;
            return <TableCell key={innerTempKey}>{cellData}</TableCell>;
          })}
          <TableCell />
        </StyledTableRow>
      );
    });
    setRows(rowArray);
    // setRows(hover);
  };

  const renderHeadCells = () => {
    const cellArray = headData.map((cellData, index) => {
      const tempKey = index;
      return <TableCell key={tempKey}>{cellData}</TableCell>;
    });
    setHeadCells(cellArray);

    renderRows();
  };

  useEffect(() => {
    console.log('test / when start rendering');
    renderHeadCells();
  }, []);
  useEffect(() => {
    renderRows();
  }, [headCells]);
  return (
    <TableContainer component={Paper}>
      <StyledTable aria-label="simple table">
        <TableHead>
          <StyledTableRow>{headCells}</StyledTableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </StyledTable>
    </TableContainer>
  );
};
Table.defaultProps = {
  headData: [],
  rowData: [
    { onRowClick: () => {}, cells: [1, 2, 3, 4, 5] },
    { onRowClick: () => {}, cells: [1, 2, 3, 4, 5] }
  ],
  hover: true
  // onRowClick: e => {
  //   console.log(e.currentNode);
  // }
};

Table.propTypes = {
  headData: PropTypes.arrayOf(PropTypes.string),
  rowData: PropTypes.arrayOf(PropTypes.object),
  hover: PropTypes.bool
  // onRowClick: PropTypes.func
};

export default Table;