import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogDeleteContents from '../../atoms/DialogDeleteContents/DialogDeleteContents';
import LectureRoomDelete from '../../atoms/DialogDeleteContents/LectureRoomDelete';
import DialogFooter from '../../atoms/DialogFooter/DialogFooter';

const DialogTitleStyled = styled(DialogTitle)`
  padding: 16px 24px 0 24px;
`;

const PreInfoDeleteDialog = ({ title, item, open, setOpen, type }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteContents = () => {
    if (type === 'lectureRoom') return <LectureRoomDelete item={item} />;
    return <DialogDeleteContents item={item} />;
  };

  return (
    <Dialog open={open}>
      <DialogTitleStyled>{title} 삭제</DialogTitleStyled>
      {handleDeleteContents()}
      <DialogFooter handleClose={handleClose} type="delete" />
    </Dialog>
  );
};

PreInfoDeleteDialog.propTypes = {
  title: PropTypes.string,
  item: PropTypes.arrayOf(PropTypes.array),
  open: PropTypes.bool,
  setOpen: PropTypes.func.isRequired,
  type: PropTypes.string
};

PreInfoDeleteDialog.defaultProps = {
  title: '',
  item: [],
  open: false,
  type: null
};

export default PreInfoDeleteDialog;
