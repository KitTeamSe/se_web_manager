import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Table as Tables,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core';
import { MenuTypeItems } from '../../../statics/data/MenuData';
import { MANAGE_URL } from '../../../statics/data/config';

const LinkStyled = styled(Link)`
  text-decoration: none;
`;

const TableRowStyled = styled(TableRow)`
  cursor: pointer;
`;

const TableCellStyled = styled(TableCell)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 14px 16px;
`;

const TableHeadCellStyled = styled(TableCell)`
  padding: 14px 16px;
`;

const Head = ({ head }) => {
  return (
    <TableHead>
      <TableRow>
        {head.map(e => (
          <TableHeadCellStyled align="center">{e.name}</TableHeadCellStyled>
        ))}
      </TableRow>
    </TableHead>
  );
};

const Body = ({ head, rows, type, typeId }) => {
  return (
    <TableBody>
      {rows.map(e => (
        <TableRowStyled
          component={LinkStyled}
          to={`${MANAGE_URL}/${type}/info/${e[typeId]}`}
          key={`${type}/${e[typeId]}`}
          hover
        >
          {head.map(el => {
            if (el.key in e && el.key === 'menuType') {
              return (
                <TableCellStyled align="center">
                  {MenuTypeItems[e[el.key]]}
                </TableCellStyled>
              );
            }
            return el.key in e ? (
              <TableCellStyled align="center">{e[el.key]}</TableCellStyled>
            ) : null;
          })}
        </TableRowStyled>
      ))}
    </TableBody>
  );
};

const Table = ({ head, rows, type, typeId }) => {
  return (
    <TableContainer>
      <Tables>
        <Head head={head} />
        <Body head={head} rows={rows} type={type} typeId={typeId} />
      </Tables>
    </TableContainer>
  );
};

Table.propTypes = {
  head: PropTypes.arrayOf(PropTypes.array),
  rows: PropTypes.arrayOf(PropTypes.array)
};

Table.defaultProps = {
  head: [],
  rows: []
};

export default Table;
