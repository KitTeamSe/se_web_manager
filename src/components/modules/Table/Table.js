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
import TypeData from '../../../statics/data/TypeData';
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
  padding: 12px 14px;
`;

const TableHeadCellStyled = styled(TableCell)`
  padding: 12px 14px;
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

const Body = ({ head, rows, type, typeId, pageNumber, pageSize }) => {
  const handleTypes = (row, key, myType) => {
    if (key === 'menuType') return TypeData.MenuTypes[row[key]];
    if (key === 'reportType') return TypeData.ReportTypes[row[key]];
    if (key === 'informationOpenAgree') return TypeData.InfoOpenTypes[row[key]];
    if (key === 'status' && myType === 'report')
      return TypeData.ReportStatusTypes[row[key]];
    if (key === 'type') {
      if (myType === 'account') return TypeData.AccountTypes[row[key]];
      if (myType === 'subject') return TypeData.SubjectTypes[row[key]];
      if (myType === 'teacher') return TypeData.TeacherTypes[row[key]];
    }
    return row[key];
  };

  return (
    <TableBody>
      {rows.map((e, i) => (
        <TableRowStyled
          component={LinkStyled}
          to={`${MANAGE_URL}/${type}/info/${
            typeId ? e[typeId] : pageNumber * pageSize + i + 1
          }`}
          key={`${type}/${e[typeId]}`}
          hover
        >
          {head.map(el => {
            if (el.key in e)
              return (
                <TableCellStyled align="center">
                  {handleTypes(e, el.key, type)}
                </TableCellStyled>
              );
            return null;
          })}
        </TableRowStyled>
      ))}
    </TableBody>
  );
};

const Table = ({ head, rows, type, typeId, pageNumber, pageSize }) => {
  return (
    <TableContainer>
      <Tables>
        <Head head={head} />
        <Body
          head={head}
          rows={rows}
          type={type}
          typeId={typeId}
          pageNumber={pageNumber}
          pageSize={pageSize}
        />
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
