import React from 'react';
import PropTypes from 'prop-types';
import { TableCell as TableCells } from '@material-ui/core';

// Table cell은 각각 Unique한 key 를 가져야 하는데
// map을 사용할 시 key에 index값을 넣으면 안됨(Airbnb 특)
// 해서 테이블 제목 + 해당 셀 데이터 +

const TableCell = ({ key, index, page, data, rowsPerPage, type }) => {
  if (page > -1 || type === 'index') {
    const cellIndex = page * rowsPerPage + index + 1;
    return (
      <TableCells key={key} component="th" scope="row" align="center">
        {cellIndex}
      </TableCells>
    );
  }
  if (type === 'index') {
    return (
      <TableCells key={key} component="th" scope="row" align="center">
        {index}
      </TableCells>
    );
  }
  return (
    <TableCells key={key} align="center">
      {data}
    </TableCells>
  );
};

TableCell.propTypes = {
  key: PropTypes.string.isRequired,
  index: PropTypes.number,
  page: PropTypes.number,
  data: PropTypes.string,
  rowsPerPage: PropTypes.number,
  type: PropTypes.string
};

TableCell.defaultProps = {
  index: null,
  page: -1,
  data: null,
  rowsPerPage: null,
  type: 'data'
};

export default TableCell;
