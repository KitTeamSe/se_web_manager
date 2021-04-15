import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MenuCreateDialog from '../../modules/MenuCreateDialog/MenuCreateDialog';
/**
 *  content를 받아와서 DialogContent 컴포넌트 생성.
 * import PropTypes from 'prop-types';
 * { open, setOpen, values, onChange }
 */

/**
    자식에게 갈것
    { title, items, open, handleClose, onChange }
 */
const MenuCreate = ({ open, toggle }) => {
  // 모달에서 입력된 값을 받아서 저장할 state.
  const [menuCreateFormData, setMenuCreateFormData] = useState({
    id: '',
    order: '',
    nameEng: '',
    nameKor: '',
    description: '',
    parent: ''
  });

  // 모달에서 입력시 변경된 값을 state에 저장하는 함수. 하위 컴포넌트에 props.onChange로 전달
  const menuCreateOnChange = e => {
    const { value, name } = e.target;
    setMenuCreateFormData({ ...menuCreateFormData, [name]: value });
  };

  // onChange적용 테스트
  useEffect(() => {
    console.log(menuCreateFormData);
  }, [menuCreateFormData]);

  const items = [
    { name: 'id', label: 'ID', value: menuCreateFormData.id },
    { name: 'order', label: '순서', value: menuCreateFormData.order },
    { name: 'nameEng', label: '영어이름', value: menuCreateFormData.nameEng },
    { name: 'nameKor', label: '한글이름', value: menuCreateFormData.nameKor },
    {
      name: 'description',
      label: '설명',
      value: menuCreateFormData.description
    },
    { name: 'parent', label: '상위메뉴', value: menuCreateFormData.parent }
  ];
  return (
    <div>
      <MenuCreateDialog
        title="메뉴생성"
        items={items}
        open={open}
        handleClose={toggle}
        onChange={menuCreateOnChange}
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
