import React, { useState, useEffect } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import TextList from '../../../modules/TextList/TextList';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import { getMenuById } from '../../../../modules/menu';
import Button from '../../../atoms/Button/RoundButton';
import DeleteMenu from './DeleteMenu';
import UpdateMenu from './UpdateMenu';

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
  const menuDataById = useSelector(state => state.menu.menuById);
  const dispatch = useDispatch();
  const [textData, setTextData] = useState();

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
      { label: '설명', text: menuDataById.description },
      { label: '부모 메뉴', text: menuDataById.parentId }
    ];
    setTextData(tempMenuData);
  };
  // textData: [{ label: 'defaultLabel', text: 'defaultText' }]

  useEffect(() => {
    dispatch(getMenuById(match.params.id));
  }, []);
  useEffect(() => {
    arrangeMenuData();
  }, [menuDataById]);
  return (
    <Wrapper>
      <ContentHeader class="header" title="메뉴 상세 조회" />

      <TextList textData={textData} />
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
        <UpdateMenu
          open={menuUpdateModalOpen}
          toggle={menuUpdateToggle}
          menuData={menuDataById}
        />
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
