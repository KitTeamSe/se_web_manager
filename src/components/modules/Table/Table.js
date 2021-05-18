import React from 'react';
// import styled from 'styled-components';
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

const Body = ({ head, rows }) => {
  return (
    <TableBody>
      {rows.map(e => (
        <TableRow hover>
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
        </TableRow>
      ))}
    </TableBody>
  );
};

const Table = ({ head, rows }) => {
  return (
    <TableContainer>
      <Tables>
        <Head head={head} />
        <Body head={head} rows={rows} />
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
