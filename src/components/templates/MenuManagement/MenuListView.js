import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from '../../modules/Header/Header';
import PageNumberButtonGroup from '../../modules/PageNumberButtonGroup/PageNumberButtonGroup';
import Button from '../../atoms/Button/Button';
import Table from '../../atoms/Table/Table';

const Wrapper = styled.div`
  > * {
    margin-bottom: 1rem;
  }
`;

/*
headData / rowData 
현재는 props -> useSelector로 redux state 받아온 후 가공.
*/

const MenuListView = ({ headData, rowData }) => {
  return (
    <Wrapper>
      <Header class="header" title="메뉴 관리">
        <Button variant="contained" color="primary">
          메뉴추가
        </Button>
        <Button variant="contained" color="secondary">
          메뉴삭제
        </Button>
      </Header>
      <Table headData={headData} rowData={rowData} />
      <PageNumberButtonGroup nowPage={1} maxPage={5} halfRange={2} />
    </Wrapper>
  );
};
MenuListView.defaultProps = {
  headData: ['title1', 'title2', 'title3', '4', '5'],
  rowData: [
    ['cellData1', 'cellData2', 'cellData3', '4', '5'],
    ['cellData4', 'cellData5', 'cellData6', '4', '5'],
    ['cellData7', 'cellData8', 'cellData9', '4', '5']
  ]
};

MenuListView.propTypes = {
  headData: PropTypes.arrayOf(PropTypes.string),
  rowData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};

export default MenuListView;
