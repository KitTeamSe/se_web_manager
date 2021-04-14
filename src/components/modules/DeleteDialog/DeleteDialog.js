import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogDeleteContents from '../../atoms/DialogDeleteContents/DialogDeleteContents';
import DialogFooter from '../../atoms/DialogFooter/DialogFooter';

const DialogTitleStyled = styled(DialogTitle)`
  padding: 16px 24px 0 24px;
`;

const DeleteDialog = ({ title, item, open, setOpen, type }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <DialogTitleStyled>{title} 삭제</DialogTitleStyled>
      <DialogDeleteContents type={type} item={item} />
      <DialogFooter handleClose={handleClose} type="delete" />
    </Dialog>
  );
};

DeleteDialog.propTypes = {
  title: PropTypes.string,
  item: PropTypes.arrayOf(PropTypes.array),
  open: PropTypes.bool,
  setOpen: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

DeleteDialog.defaultProps = {
  title: '',
  item: [],
  open: false
};

export default DeleteDialog;
