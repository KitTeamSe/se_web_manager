import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Pagination as Paginations, PaginationItem } from '@material-ui/lab';

const PaginationStyled = styled(Paginations)`
  & .MuiPagination-ul {
    padding: 0.5rem;
    justify-content: center;
  }
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

const Pagination = ({ color, totalPage, page, link, onChange }) => {
  return (
    /* eslint-disable react/jsx-props-no-spreading */
    <PaginationStyled
      color={color}
      component="div"
      count={totalPage}
      page={parseInt(page, 10)}
      onChange={onChange}
      renderItem={item => {
        return (
          <PaginationItem
            component={Link}
            to={`/${link}${item.page === 1 ? '' : `?page=${item.page}`}`}
            {...item}
          />
        );
      }}
      showFirstButton
      showLastButton
    />
  );
};

Pagination.propTypes = {
  color: PropTypes.string,
  totalPage: PropTypes.number,
  page: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

Pagination.defaultProps = {
  color: 'primary',
  totalPage: 1,
  onChange: null
};

export default Pagination;
