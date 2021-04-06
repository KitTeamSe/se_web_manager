import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TablePagination as TablePaginations } from '@material-ui/core';

const TablePaginationStyled = styled(TablePaginations)``;

const rowsPerPageOptions = [20, 50, 100];

const TablePagination = ({
  rows,
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage
}) => {
  return (
    <TablePaginationStyled
      rowsPerPageOptions={rowsPerPageOptions}
      component="div"
      count={rows.length}
      page={page}
      rowsPerPage={rowsPerPage}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  );
};

TablePagination.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object),
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired
};

TablePagination.defaultProps = {
  rows: []
};

export default TablePagination;
