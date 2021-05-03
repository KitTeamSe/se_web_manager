import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
// import DialogInputContents from '../../../modules/DialogInputContents/DialogInputContents';
import { DialogContent } from '@material-ui/core';
import TextField from '../../../atoms/TextField/TextField';
import DialogFooter from '../../../modules/DialogFooter/DialogFooter';

const DialogTitleStyled = styled(DialogTitle)`
  padding: 16px 24px 0 24px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddDialog = ({ title, head, open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <DialogTitleStyled>{title} 추가</DialogTitleStyled>
      <DialogContent>
        <InputWrapper>
          {head.map(
            (el, i) =>
              i !== 0 && (
                <TextField id={el.key} label={el.name} type={el.type} />
              )
          )}
        </InputWrapper>
      </DialogContent>
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
