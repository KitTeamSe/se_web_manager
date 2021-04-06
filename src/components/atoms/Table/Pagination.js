import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Pagination as Paginations } from '@material-ui/lab';

const PaginationStyled = styled(Paginations)``;

const Pagination = ({ count, page, handleChangePage }) => {
  return (
    <PaginationStyled
      component="div"
      count={count}
      page={page}
      onChange={handleChangePage}
      showFirstButton
      showLastButton
    />
  );
};

Pagination.propTypes = {
  count: PropTypes.number,
  page: PropTypes.number,
  handleChangePage: PropTypes.func.isRequired
};

Pagination.defaultProps = {
  count: 1,
  page: 1
};

export default Pagination;
