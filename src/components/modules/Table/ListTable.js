import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Table as Tables, TableContainer, Paper } from '@material-ui/core';
import TableHead from '../../atoms/TableHead/TableHead';
import TableContent from '../../atoms/TableContent/TableContent';
import TablePagination from '../../atoms/TablePagination/TablePagination';

const TableContainerStyled = styled(TableContainer)`
  margin-top: 20px;
  width: 100%;
`;

const TableStyeld = styled(Tables)``;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 20px;
`;

const rowsPerPage = 2;

const ListTable = ({ head, rows, change }) => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(Math.ceil(rows.length / rowsPerPage));
  }, [rows]);

  useEffect(() => {
    setPage(1);
  }, [change]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <TableContainerStyled component={Paper}>
      <TableStyeld arial-label="table">
        <TableHead row={head} />
        <TableContent
          rows={rows}
          head={head}
          page={page - 1}
          rowsPerPage={rowsPerPage}
          type="pagination"
        />
      </TableStyeld>
      <PaginationWrapper>
        <TablePagination
          count={count}
          page={page}
          handleChangePage={handleChangePage}
        />
      </PaginationWrapper>
    </TableContainerStyled>
  );
};

ListTable.propTypes = {
  head: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.arrayOf(PropTypes.object),
  change: PropTypes.string
};

ListTable.defaultProps = {
  head: [],
  rows: [],
  change: null
};

export default ListTable;
