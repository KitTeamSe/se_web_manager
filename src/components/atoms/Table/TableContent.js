import React from 'react';
import PropTypes from 'prop-types';
import { TableBody, TableCell, TableRow } from '@material-ui/core';

// Table cell은 각각 Unique한 key 를 가져야 하는데
// map을 사용할 시 key에 index값을 넣으면 안됨(Airbnb 특)
// 해서 테이블 제목 + 해당 셀 데이터 +

const TableContent = ({ rows, head }) => {
  console.log(head);
  const tableCell = (item, index) =>
    Object.values(item).map((data, i) =>
      i === 0 ? (
        <TableCell key={`${head[i].key}-${index}`} component="th" scope="row">
          {index + 1}
        </TableCell>
      ) : (
        <TableCell key={`${head[i].key}-${index}`} align="center">
          {data}
        </TableCell>
      )
    );

  const tableRow = rows.map((row, index) => (
    <TableRow key={row.name}>{tableCell(row, index)}</TableRow>
  ));

  return <TableBody>{tableRow}</TableBody>;
};

TableContent.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object),
  head: PropTypes.arrayOf(PropTypes.object)
};

TableContent.defaultProps = {
  rows: [],
  head: []
};

export default TableContent;
