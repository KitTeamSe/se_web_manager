import React from 'react';
import PropTypes from 'prop-types';
import AddDialog from '../../modules/AddDialog/AddDialog';
/**
 *  content를 받아와서 DialogContent 컴포넌트 생성.
 */
const MenuCreateModal = ({ open, setOpen, onChange }) => {
  return (
    <div>
      <AddDialog
        open={open}
        setOpen={setOpen}
        onChange={onChange}
        item={[
          {
            key: 'menu_create_id',
            name: '#',
            type: 'id',
            width: '10%'
          },
          {
            key: 'menu_order',
            name: '메뉴순서',
            type: 'string',
            width: '30%'
          },
          {
            key: 'menu_name_eng',
            name: '메뉴영어이름',
            type: 'string',
            width: '30%'
          },
          {
            key: 'menu_name_kor',
            name: '메뉴한글이름',
            type: 'string',
            width: '30%'
          },
          {
            key: 'menu_description',
            name: '메뉴설명',
            type: 'string',
            width: '30%'
          }
        ]}
      />
    </div>
  );
};

MenuCreateModal.defaultProps = {
  open: false
};

MenuCreateModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default MenuCreateModal;
