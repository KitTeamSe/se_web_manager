import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogInputContents from '../../atoms/DialogAddContents/DialogInputContents';
import DialogFooter from '../../atoms/DialogFooter/DialogFooter';

const DialogTitleStyled = styled(DialogTitle)`
  padding: 16px 24px 0 24px;
`;

const AddDialog = ({ title, head, open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <DialogTitleStyled>{title} 추가</DialogTitleStyled>
      <DialogInputContents head={head} />
      <DialogFooter handleClose={handleClose} type="add" />
    </Dialog>
  );
};

AddDialog.propTypes = {
  title: PropTypes.string,
  head: PropTypes.arrayOf(PropTypes.array),
  open: PropTypes.bool,
  setOpen: PropTypes.func.isRequired
};

AddDialog.defaultProps = {
  title: '',
  head: [],
  open: false
};

export default AddDialog;
