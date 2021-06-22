import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Pagination } from '@material-ui/lab';

const PaginationStyled = styled(Pagination)`
  & .Mui-selected {
    font-weight: 600;
    background: ${({ color }) =>
      color === 'primary' ? props => props.theme.mainColor : color};
    &:hover {
      background: ${({ color }) =>
        color === 'primary' ? props => props.theme.mainColorHover : color};
    }
  }
`;

const TablePagination = ({ color, count, page, handleChangePage }) => {
  return (
    <PaginationStyled
      color={color}
      component="div"
      count={count}
      page={page}
      onChange={handleChangePage}
      showFirstButton
      showLastButton
    />
  );
};

TablePagination.propTypes = {
  color: PropTypes.string,
  count: PropTypes.number,
  page: PropTypes.number,
  handleChangePage: PropTypes.func.isRequired
};

TablePagination.defaultProps = {
  color: 'primary',
  count: 1,
  page: 1
};

export default TablePagination;
