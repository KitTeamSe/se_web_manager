import React, { useState, useEffect } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import TextList from '../../modules/TextList/TextList';
import ContentHeader from '../../modules/ContentHeader/ContentHeader';
import { getMenuById } from '../../../modules/menu';
import Button from '../../atoms/Button/RoundButton';
import DeleteMenu from './DeleteMenu';
import UpdateMenu from './UpdateMenu';
// 메뉴 정보를 표시해줄 틀 module import
/**
 *  useSelect, useDispatch 사용
 * menuById state를 select 하고, dispatch를 통해 getMenuById액션 호출.
 * 이후 데이터를 가공하여 하위 모듈에 props로 전달.
 * presentational component에서 출력.
 *
 * props에서 react-router의 match 속성을 받아서 이중 params로 url 마지막에 /:id로 들어온 부분을
 * 받아서 action.payload에 담아서 dispatch.
 *  */
const Wrapper = styled.div`
  > * {
    margin-bottom: 1rem;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const MenuByIdView = ({ match }) => {
  const menuDataById = useSelector(state => state.menu.menuById.data);
  const dispatch = useDispatch();
  const [menuData, setTextData] = useState();
  // Modal의 open state
  const [menuDeleteModalOpen, setMenuDeleteModalOpen] = useState(false);
  const [menuUpdateModalOpen, setMenuUpdateModalOpen] = useState(false);

  // Modal의 open 상태를 변경하는 함수. props.setOpen으로 전달
  const menuDeleteToggle = () => {
    setMenuDeleteModalOpen(!menuDeleteModalOpen);
  };

  const menuUpdateToggle = () => {
    setMenuUpdateModalOpen(!menuUpdateModalOpen);
  };

  const arrangeMenuData = () => {
    const tempMenuData = [
      { label: '메뉴ID', text: menuDataById.menuId },
      { label: '메뉴순서', text: menuDataById.menuOrder },
      { label: '영어이름', text: menuDataById.nameEng },
      { label: '한글이름', text: menuDataById.nameKor },
      { label: '설명', text: menuDataById.description }
    ];
    setTextData(tempMenuData);
  };
  // menuData: [{ label: 'defaultLabel', text: 'defaultText' }]

  useEffect(() => {
    dispatch(getMenuById(match.params.id));
  }, []);
  useEffect(() => {
    console.log('menuDataById changed');
    arrangeMenuData();
    console.log('arrangMenuData()');
  }, [menuDataById]);
  return (
    <Wrapper>
      <ContentHeader class="header" title="메뉴 상세 조회" />

      <TextList textData={menuData} />
      <ButtonContainer>
        <Button variant="contained" color="#c1ff91" onClick={menuUpdateToggle}>
          메뉴 수정
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={menuDeleteToggle}
        >
          메뉴 삭제
        </Button>
      </ButtonContainer>
      {menuUpdateModalOpen ? (
        <UpdateMenu open={menuUpdateModalOpen} toggle={menuUpdateToggle} />
      ) : (
        ''
      )}
      {menuDeleteModalOpen ? (
        <DeleteMenu
          open={menuDeleteModalOpen}
          toggle={menuDeleteToggle}
          deleteData={{ menuId: menuDataById.menuId }}
        />
      ) : (
        ''
      )}
    </Wrapper>
  );
};
MenuByIdView.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
};

export default MenuByIdView;
