import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PageNumberButtonGroup from '../../modules/PageNumberButtonGroup/PageNumberButtonGroup';

const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 20rem;
  justify-content: space-between;
`;
const MainTop = styled.div`
  flex: 1 0 0;
`;
const MainMid = styled.div`
  flex: 2 0 0;
`;
const MainBottom = styled.div`
  flex: 1 0 0;
`;

const TableContainer = styled.div``;
const MenuListView = ({ nowPage, maxPage, halfRange }) => {
  return (
    <MainStyled>
      <MainTop>
        <h1>MenuListView</h1>
      </MainTop>
      <MainMid>
        <TableContainer>
          <p>aaaaaaaaaaa</p>
        </TableContainer>
      </MainMid>
      <MainBottom>
        <PageNumberButtonGroup
          nowPage={nowPage}
          maxPage={maxPage}
          halfRange={halfRange}
        />
      </MainBottom>
    </MainStyled>
  );
};
MenuListView.defaultProps = {
  nowPage: 1,
  maxPage: 10,
  halfRange: 2
};
MenuListView.propTypes = {
  nowPage: PropTypes.number,
  maxPage: PropTypes.number,
  halfRange: PropTypes.number
};

export default MenuListView;
