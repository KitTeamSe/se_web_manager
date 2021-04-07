import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

const StyledTable = styled(MTable)`
  minwidth: 650;
`;

/*
상단 제목부분
headData : [
    title1, title2, title3 ...
]
rowData : [
    {
        cellData1, cellData2, cellData3 ...
    },
    {

    },
    ...
]
*/
const Table = ({ headData, rowData }) => {
  const [headCells, setHeadCells] = useState();
  const [rows, setRows] = useState();

  const renderHeadCells = () => {
    const cellArray = headData[0].map((cellData, index) => {
      const tempKey = index;
      return <TableCell key={tempKey}>{cellData}</TableCell>;
    });
    setHeadCells(cellArray);
  };

  const renderRows = () => {
    const rowArray = rowData.map((row, index) => {
      const tempKey = index;
      return (
        <TableRow key={tempKey}>
          {row.map((cellData, innerIndex) => {
            const innerTempKey = innerIndex;
            return <TableCell key={innerTempKey}>{cellData}</TableCell>;
          })}
          <TableCell />
        </TableRow>
      );
    });
    console.log(rowArray);
    setRows(rowArray);
  };

  useEffect(() => {
    renderHeadCells();
    renderRows();
  }, []);
  return (
    <TableContainer component={Paper}>
      <StyledTable aria-label="simple table">
        <TableHead>
          <TableRow>{headCells}</TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </StyledTable>
    </TableContainer>
  );
};
Table.defaultProps = {
  headData: [],
  rowData: [[]]
};

Table.propTypes = {
  headData: PropTypes.arrayOf(PropTypes.string),
  rowData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};

export default Table;
