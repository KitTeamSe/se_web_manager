import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContents from '../../atoms/Dialog/DialogContents';
import DialogButtons from '../../atoms/Dialog/DialogButtons';

const DialogTitleStyled = styled(DialogTitle)`
  padding: 16px 24px 0 24px;
`;

const DeleteDialog = ({ title, item, open, setOpen, del }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <DialogTitleStyled>{title} 삭제</DialogTitleStyled>
      <DialogContents item={item} del />
      <DialogButtons handleClose={handleClose} del={del} />
    </Dialog>
  );
};

DeleteDialog.propTypes = {
  title: PropTypes.string,
  item: PropTypes.arrayOf(PropTypes.array),
  open: PropTypes.bool,
  setOpen: PropTypes.func.isRequired,
  del: PropTypes.bool
};

DeleteDialog.defaultProps = {
  title: '',
  item: [],
  open: false,
  del: PropTypes.bool
};

export default DeleteDialog;
