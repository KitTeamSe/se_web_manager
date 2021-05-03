import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TableBody, TableRow } from '@material-ui/core';
import TableCell from '../TableCell/TableCell';

// Table cell은 각각 Unique한 key 를 가져야 하는데
// map을 사용할 시 key에 index값을 넣으면 안됨(Airbnb 특)
// 해서 테이블 제목 + 해당 셀 데이터 +

const TableRowStyled = styled(TableRow)`
  transition: background-color 100ms;
  cursor: pointer;
  &:hover {
    background-color: #eeeeee;
  }
`;

const TableRowCells = ({ row, head, index, page, rowsPerPage, type }) => {
  const [tableArray, setTableArray] = useState([]);

  useEffect(() => {
    const keyArray = [index];
    head.forEach((data, i) => {
      if (i !== 0) keyArray.push(row[data.key]);
    });
    setTableArray(keyArray);
  }, []);

  return tableArray.map((data, i) => {
    const key = `${head[i].key}_${index}`;
    if (type === 'pagination' && i === 0)
      return (
        <TableCell
          key={key}
          index={index}
          page={page}
          rowsPerPage={rowsPerPage}
          type="index"
        />
      );
    if (type === 'table' && i === 0)
      return <TableCell key={key} index={index} type="index" />;
    return <TableCell key={key} data={data} type="data" />;
  });
};

const TableRows = ({ rows, head, page, rowsPerPage, type }) => {
  if (type === 'pagination')
    return rows
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((row, index) => (
        <TableRowStyled key={row.name}>
          <TableRowCells
            head={head}
            row={row}
            index={index}
            page={page}
            rowsPerPage={rowsPerPage}
            type={type}
          />
        </TableRowStyled>
      ));
  return rows.map((row, index) => (
    <TableRowStyled key={row.name}>
      <TableRowCells head={head} row={row} index={index} type={type} />
    </TableRowStyled>
  ));
};

const TableContent = ({ rows, head, page, rowsPerPage, type }) => {
  if (type === 'pagination')
    return (
      <TableBody>
        <TableRows
          rows={rows}
          head={head}
          page={page}
          rowsPerPage={rowsPerPage}
          type="pagination"
        />
      </TableBody>
    );
  return (
    <TableBody>
      <TableRows rows={rows} head={head} />
    </TableBody>
  );
};

TableContent.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object),
  head: PropTypes.arrayOf(PropTypes.object),
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  type: PropTypes.string
};

TableContent.defaultProps = {
  rows: [],
  head: [],
  page: -1,
  rowsPerPage: null,
  type: null
};

export default TableContent;
