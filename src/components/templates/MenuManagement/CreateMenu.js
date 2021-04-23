import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
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
    {
      name: 'menuOrder',
      label: '순서',
      type: 'number',
      value: menuCreateFormData.menuOrder
    },
    {
      name: 'nameEng',
      label: '영어이름',
      type: 'text',
      value: menuCreateFormData.nameEng
    },
    {
      name: 'nameKor',
      label: '한글이름',
      type: 'text',
      value: menuCreateFormData.nameKor
    },
    {
      name: 'description',
      label: '설명',
      type: 'text',
      value: menuCreateFormData.description
    },
    {
      name: 'parentId',
      label: '상위메뉴',
      type: 'select',
      select: true,
      SelectProps: [
        <MenuItem value={1}>1</MenuItem>,
        <MenuItem value={2}>2</MenuItem>,
        <MenuItem value={3}>3</MenuItem>,
        <MenuItem value={4}>4</MenuItem>,
        <MenuItem value={5}>5</MenuItem>,
        <MenuItem value={6}>6</MenuItem>
      ],
      value: menuCreateFormData.parentId
    },
    { name: 'url', label: 'URL', type: 'text', value: menuCreateFormData.url }
  ];

  // dispatch
  const dispatchMenuCreate = () => {
    const jsonData = {};
    items.forEach(item => {
      jsonData[item.name] = item.value;
    });
    dispatch(createMenu(jsonData));
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

MenuCreate.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

export default MenuCreate;
