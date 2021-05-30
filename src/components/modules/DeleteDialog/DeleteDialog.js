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

const DeleteDialog = ({ title, data, open, setOpen, type, onClick }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const contentsComment = () => {
    if (type === 'lectureRoom') return `[${data.building} ${data.roomNumber}]`;
    if (type === 'menu') return `[${data.nameKor}]`;
    if (type === 'board') return `[${data.nameKor}]`;
    if (type === 'tag') return `[${data.text}]`;
    if (type === 'authorityMapping')
      return `[${data.authorityIdNameKor}] - [${data.groupName}]`;
    if (type === 'accountMapping')
      return `[${data.accountIdString}] - [${data.groupName}]`;
    if (type === 'blacklist') return `[${data.ip}]`;
    if (type === 'report') return `[${data.reportId}]`;
    return `[${data.name}]`;
  };
  return (
    <Dialog open={open}>
      <DialogTitleStyled>{title} 삭제</DialogTitleStyled>
      <DialogContent>
        <InputWrapper>
          <Typography>정보를 삭제하시겠습니까</Typography>
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
