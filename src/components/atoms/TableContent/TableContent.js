import React from 'react';
import PropTypes from 'prop-types';
import { TableBody, TableCell, TableRow } from '@material-ui/core';

// Table cell은 각각 Unique한 key 를 가져야 하는데
// map을 사용할 시 key에 index값을 넣으면 안됨(Airbnb 특)
// 해서 테이블 제목 + 해당 셀 데이터 +

const TableContent = ({ rows, head, page, rowsPerPage }) => {
  const indexCell = (key, index) => {
    const cellIndex = page * rowsPerPage + index + 1;
    return (
      <TableCell key={key} component="th" scope="row" align="center">
        {cellIndex}
      </TableCell>
    );
  };

  const dataCell = (key, data) => (
    <TableCell key={key} align="center">
      {data}
    </TableCell>
  );

  const tableCell = (item, index) => {
    return Object.values(item).map((data, i) => {
      const key = `${head[i].key}-${index}`;
      return i === 0 ? indexCell(key, index) : dataCell(key, data);
    });
  };

  const tableRow = rows.map((row, index) => {
    return <TableRow key={row.name}>{tableCell(row, index)}</TableRow>;
  });

  const tablePaginationRow = rows
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((row, index) => {
      return <TableRow key={row.name}>{tableCell(row, index)}</TableRow>;
    });

  return <TableBody>{page > -1 ? tablePaginationRow : tableRow}</TableBody>;
};

TableContent.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object),
  head: PropTypes.arrayOf(PropTypes.object),
  page: PropTypes.number,
  rowsPerPage: PropTypes.number
};

TableContent.defaultProps = {
  rows: [],
  head: [],
  page: null,
  rowsPerPage: null
};

export default TableContent;
