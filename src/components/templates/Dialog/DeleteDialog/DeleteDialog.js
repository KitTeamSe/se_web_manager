import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DialogContent, Typography } from '@material-ui/core';
// import DialogDeleteContents from '../../../modules/DialogDeleteContents/DialogDeleteContents';
import DialogFooter from '../../../modules/DialogFooter/DialogFooter';

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const DialogTitleStyled = styled(DialogTitle)`
  padding: 16px 24px 0 24px;
`;

const DeleteDialog = ({ title, data, open, setOpen, type, onClick }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const headComment = () => {
    if (type === 'lectureRoom') return `강의실`;
    if (type === 'teacher') return `교사`;
    if (type === 'subject') return `과목`;
    if (type === 'period') return `교시`;
    return null;
  };

  const contentsComment = () => {
    if (type === 'lectureRoom')
      return `강의실 ${data.building} ${data.roomNumber}`;
    return `이름 ${data.name}`;
  };

  return (
    <Dialog open={open}>
      <DialogTitleStyled>{title} 삭제</DialogTitleStyled>
      <DialogContent>
        <InputWrapper>
          <Typography>{headComment()} 정보를 삭제하시겠습니까</Typography>
        </InputWrapper>
        <InputWrapper>
          <Typography>{contentsComment()}</Typography>
        </InputWrapper>
      </DialogContent>
      <DialogFooter onClick={onClick} handleClose={handleClose} type="delete" />
    </Dialog>
  );
};

DeleteDialog.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.array),
  open: PropTypes.bool,
  setOpen: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

DeleteDialog.defaultProps = {
  title: '',
  data: [],
  open: false
};

export default DeleteDialog;
