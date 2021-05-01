import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteMenu } from '../../../../modules/menu';
import MenuDeleteDialog from '../../../modules/MenuDialog/MenuDeleteDialog';
/**
 *  content를 받아와서 DialogContent 컴포넌트 생성.
 */

/**
 *  deleteData -> 상위 page에서 받아옴.
 * delete 하는 함수 onClose 에 정의. 버튼 onClick으로 주입
 *
 *  */
const DeleteMenu = ({ open, toggle, deleteData }) => {
  const dispatch = useDispatch();

  const dispatchMenuDelete = () => {
    dispatch(deleteMenu(deleteData.menuId));
  };

  const submitDeleteMenu = () => {
    dispatchMenuDelete();
    toggle();
    // dispatch 후 toggle 되도록 Promise로 만들어야할지?
  };

  return (
    <div>
      <MenuDeleteDialog
        title="메뉴삭제"
        text="삭제하시겠습니까?"
        handleClose={submitDeleteMenu}
        open={open}
        toggle={toggle}
      />
    </div>
  );
};

DeleteMenu.defaultProps = {
  open: false
};

DeleteMenu.propTypes = {
  open: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
  deleteData: PropTypes.objectOf(PropTypes.string).isRequired
};

export default DeleteMenu;
