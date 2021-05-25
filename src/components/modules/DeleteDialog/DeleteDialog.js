import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DialogContent, Typography } from '@material-ui/core';
// import DialogDeleteContents from '../../../modules/DialogDeleteContents/DialogDeleteContents';
import DialogFooter from '../DialogFooter/DialogFooter';

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const DialogTitleStyled = styled(DialogTitle)`
  padding: 16px 24px 0 24px;
`;

const headData = {
  lectureRoom: '강의실',
  teacher: '교사',
  subject: '과목',
  period: '교시'
};

const DeleteDialog = ({ title, data, open, setOpen, type, onClick }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const contentsComment = () => {
    if (type === 'lectureRoom') return `${data.building} ${data.roomNumber}`;
    if (type === 'menu') return `${data.nameKor}`;
    if (type === 'board') return `${data.nameKor}`;
    if (type === 'tag') return `${data.text}`;
    return `${data.name}`;
  };
  console.log(data.nameKor);
  return (
    <Dialog open={open}>
      <DialogTitleStyled>{title} 삭제</DialogTitleStyled>
      <DialogContent>
        <InputWrapper>
          <Typography>{headData[type]} 정보를 삭제하시겠습니까</Typography>
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
