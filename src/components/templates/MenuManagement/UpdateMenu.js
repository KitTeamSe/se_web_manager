import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { MenuItem } from '@material-ui/core';
import MenuCreateDialog from '../../modules/MenuDialog/MenuCreateDialog';
import { updateMenu } from '../../../modules/menu';

const UpdateMenu = ({ open, toggle, menuData }) => {
  const dispatch = useDispatch();

  const [menuUpdateFormData, setMenuUpdateFormData] = useState({
    menuOrder: menuData.menuOrder,
    nameEng: menuData.nameEng,
    nameKor: menuData.nameKor,
    description: menuData.description,
    parentId: menuData.parentId,
    url: menuData.url
  });

  const items = [
    {
      name: 'menuOrder',
      label: '순서',
      type: 'number',
      value: menuUpdateFormData.menuOrder
    },
    {
      name: 'nameEng',
      label: '영어이름',
      type: 'text',
      value: menuUpdateFormData.nameEng
    },
    {
      name: 'nameKor',
      label: '한글이름',
      type: 'text',
      value: menuUpdateFormData.nameKor
    },
    {
      name: 'description',
      label: '설명',
      type: 'text',
      value: menuUpdateFormData.description
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
      value: menuUpdateFormData.parentId
    },
    { name: 'url', label: 'URL', type: 'text', value: menuUpdateFormData.url }
  ];

  const menuUpdateOnChange = e => {
    const { value, name } = e.target;
    setMenuUpdateFormData({ ...menuUpdateFormData, [name]: value });
  };
  const dispatchMenuUpdate = () => {
    const jsonData = {};
    items.forEach(item => {
      jsonData[item.name] = item.value;
    });
    dispatch(updateMenu(jsonData));
  };

  const submitUpdateMenu = () => {
    dispatchMenuUpdate();
    toggle();
  };
  return (
    <div>
      <MenuCreateDialog
        title="메뉴 수정"
        items={items}
        open={open}
        toggle={toggle}
        handleClose={submitUpdateMenu}
        onChange={menuUpdateOnChange}
      />
    </div>
  );
};

UpdateMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  menuData: PropTypes.objectOf(PropTypes.string).isRequired
};
export default UpdateMenu;
