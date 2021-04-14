import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogInputContents from '../../atoms/Dialog/DialogInputContents';
import DialogButtons from '../../atoms/Dialog/DialogButtons';

const DialogTitleStyled = styled(DialogTitle)`
  padding: 16px 24px 0 24px;
`;

const AddDialog = ({ title, item, open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <DialogTitleStyled>{title} 추가</DialogTitleStyled>
      <DialogInputContents item={item} />
      <DialogButtons handleClose={handleClose} add />
    </Dialog>
  );
};

AddDialog.propTypes = {
  title: PropTypes.string,
  item: PropTypes.arrayOf(PropTypes.array),
  open: PropTypes.bool,
  setOpen: PropTypes.func.isRequired
};

AddDialog.defaultProps = {
  title: '',
  item: [],
  open: false
};

export default AddDialog;