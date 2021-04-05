import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PageNumberButtonGroup from '../../modules/PageNumberButtonGroup/PageNumberButtonGroup';

const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  > .ButtonGroup {
    margin-top: 1rem;
    margin-bottom: 0.1rem;
  }
`;
const TableContainer = styled.div`
  width: 10rem;
  height: 10rem;
  border: 0.1rem solid;
`;
const MenuListView = ({ nowPage, maxPage, halfRange }) => {
  return (
    <MainStyled>
      <h1>MenuListView</h1>
      <TableContainer />
      <PageNumberButtonGroup
        nowPage={nowPage}
        maxPage={maxPage}
        halfRange={halfRange}
        className="ButtonGroup"
      />
    </MainStyled>
  );
};
MenuListView.defaultProps = {
  nowPage: 1,
  maxPage: 1,
  halfRange: 1
};
MenuListView.propTypes = {
  nowPage: PropTypes.number,
  maxPage: PropTypes.number,
  halfRange: PropTypes.number
};

export default MenuListView;
