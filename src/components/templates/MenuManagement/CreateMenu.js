import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import MenuCreateDialog from '../../modules/MenuDialog/MenuCreateDialog';
import { createMenu } from '../../../modules/menu';

const MenuCreate = ({ open, toggle }) => {
  const dispatch = useDispatch();
  // 모달에서 입력된 값을 받아서 저장할 state.
  const [menuCreateFormData, setMenuCreateFormData] = useState({
    menuOrder: '',
    nameEng: '',
    nameKor: '',
    description: '',
    parentId: '',
    url: ''
  });

  // 모달에서 입력시 변경된 값을 state에 저장하는 함수. 하위 컴포넌트에 props.onChange로 전달
  const menuCreateOnChange = e => {
    const { value, name } = e.target;
    setMenuCreateFormData({ ...menuCreateFormData, [name]: value });
  };

  const items = [
    { name: 'menuOrder', label: '순서', value: menuCreateFormData.order },
    { name: 'nameEng', label: '영어이름', value: menuCreateFormData.nameEng },
    { name: 'nameKor', label: '한글이름', value: menuCreateFormData.nameKor },
    {
      name: 'description',
      label: '설명',
      value: menuCreateFormData.description
    },
    { name: 'parentId', label: '상위메뉴', value: menuCreateFormData.parent },
    { name: 'url', label: 'URL', value: menuCreateFormData.url }
  ];

  // dispatch
  const dispatchMenuCreate = () => {
    const formData = new FormData();
    items.forEach(item => formData.append(item.name, item.value));
    dispatch(createMenu(formData));
    console.log(formData.values);
  };
  const submitCreateMenu = () => {
    dispatchMenuCreate();
    toggle();
  };
  return (
    <div>
      <MenuCreateDialog
        title="메뉴생성"
        items={items}
        open={open}
        handleClose={submitCreateMenu}
        onChange={menuCreateOnChange}
        toggle={toggle}
      />
    </div>
  );
};

// MenuCreate.defaultProps = {
//   open: false,
//   values: [{}]
// };

MenuCreate.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

export default MenuCreate;
