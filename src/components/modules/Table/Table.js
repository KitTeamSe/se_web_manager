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

const Head = ({ head }) => {
  return (
    <TableHead>
      <TableRow>
        {head.map(e => (
          <TableCell align="center">{e.name}</TableCell>
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
          to={`${MANAGE_URL}/${type}/${e[typeId]}`}
          key={`${type}/${e[typeId]}`}
          hover
        >
          {head.map(el => {
            if (el.key in e && el.key === 'menuType') {
              return (
                <TableCell align="center">{MenuTypeItems[e[el.key]]}</TableCell>
              );
            }
            return el.key in e ? (
              <TableCell align="center">{e[el.key]}</TableCell>
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
