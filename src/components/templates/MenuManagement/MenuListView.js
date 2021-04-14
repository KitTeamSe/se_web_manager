import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import ReactRouterPropTypes from 'react-router-prop-types';
import { useHistory } from 'react-router-dom'; // router
import Button from '../../atoms/Button/RoundButton';
import ContentHeader from '../../modules/ContentHeader/ContentHeader';
// import Header from '../../modules/Header/Header';
import PageNumberButtonGroup from '../../modules/PageNumberButtonGroup/PageNumberButtonGroup';
// import Button from '../../atoms/Button/Button';
import Table from '../../modules/Table/TableWithRowAction';
// for redux
import { getMenuList } from '../../../modules/menu';
import MenuCreateModal from './MenuCreateModal';
import MenuDeleteModal from './MenuDeleteModal';

const Wrapper = styled.div`
  > * {
    margin-bottom: 1rem;
  }
`;

/*
headData / rowData 
현재는 props -> useSelector로 redux state 받아온 후 가공.
*/

const MenuListView = ({ match }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const menuList = useSelector(state => state.menu.menuList);
  const [headData, setHeadData] = useState();
  const [rowData, setRowData] = useState();

  // Modal의 open state
  const [menuCreateModalOpen, setMenuCreateModalOpen] = useState(false);
  const [menuDeleteModalOpen, setMenuDeleteModalOpen] = useState(false);

  // Modal의 open 상태를 변경하는 함수. props.setOpen으로 전달
  const menuCreateToggle = () => {
    setMenuCreateModalOpen(!menuCreateModalOpen);
  };
  const menuDeleteToggle = () => {
    setMenuDeleteModalOpen(!menuDeleteModalOpen);
  };

  // 모달에서 입력된 값을 받아서 저장할 state.
  const [menuCreateFormData, setMenuCreateFormData] = useState();

  // 모달에서 입력시 변경된 값을 state에 저장하는 함수. 하위 컴포넌트에 props.onChange로 전달
  const menuCreateOnChange = e => {
    setMenuCreateFormData(e.target.value);
  };

  // onChange적용 테스트
  useEffect(() => {
    console.log(`menuCreateFormData 내용: ${menuCreateFormData}`);
  }, [menuCreateFormData]);

  const arrangeMenuList = () => {
    // onRowClick을 각 row마다 설정하여 props로 내려주도록 함.
    const tempRows = menuList.data.map(menu => ({
      onRowClick: () => {
        history.push(`${match.url}/${menu.menuId}`);
      },
      cells: [
        menu.menuId,
        menu.menuOrder,
        menu.nameEng,
        menu.nameKor,
        menu.description
      ]
    }));
    setHeadData(['메뉴ID', '메뉴순서', '영어이름', '한글이름', '설명']);
    setRowData(tempRows);
  };
  const getMenuListFromStore = () => {
    dispatch(getMenuList());
  };
  // useEffect
  useEffect(() => {
    console.log(match);
    console.log(
      'test_MenuList / useEffect / arrangeMenuList() when menuList change'
    );
    arrangeMenuList();
  }, [menuList]);

  return (
    <Wrapper>
      <ContentHeader class="header" title="메뉴 관리">
        <Button variant="contained" color="primary" onClick={menuCreateToggle}>
          메뉴추가
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={menuDeleteToggle}
        >
          메뉴삭제
        </Button>
        <button
          type="button"
          onClick={() => {
            console.log(menuList);
          }}
        >
          출력
        </button>
        <button
          type="button"
          onClick={() => {
            getMenuListFromStore();
          }}
        >
          dispatch
        </button>
      </ContentHeader>

      <Table key={rowData} headData={headData} rowData={rowData} hover />
      <PageNumberButtonGroup nowPage={1} maxPage={5} halfRange={2} />

      {/* Modal 컴포넌트 */}
      {menuCreateModalOpen ? (
        <MenuCreateModal
          open={menuCreateModalOpen}
          setOpen={menuCreateToggle}
          onChange={menuCreateOnChange}
        />
      ) : (
        ''
      )}
      {menuDeleteModalOpen ? (
        <MenuDeleteModal
          open={menuDeleteModalOpen}
          setOpen={menuDeleteToggle}
        />
      ) : (
        ''
      )}
    </Wrapper>
  );
};
MenuListView.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
};
export default MenuListView;
