import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
// import DialogInputContents from '../../../modules/DialogInputContents/DialogInputContents';
import { DialogContent } from '@material-ui/core';
import TextField from '../../atoms/TextField/TextField';
import DialogFooter from '../DialogFooter/DialogFooter';

const DialogTitleStyled = styled(DialogTitle)`
  padding: 16px 24px 0 24px;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
`;

const AddDialog = ({
  title,
  head,
  open,
  setOpen,
  form,
  error,
  onSubmit,
  onChange
}) => {
  const handleClose = () => {
    setOpen(false);
  };
  console.log(error);

  return (
    <Dialog onClose={handleClose} open={open} disableBackdropClick>
      <DialogTitleStyled>{title} 추가</DialogTitleStyled>
      <DialogContent>
        <FormStyled onSubmit={onSubmit}>
          {head.map((el, i) => {
            return (
              i !== 0 && (
                <TextField
                  id={el.key}
                  name={el.key}
                  label={el.name}
                  type={el.type}
                  placeholder={el.placeholder}
                  value={form[el.key]}
                  onChange={onChange}
                  items={el.items}
                />
              )
            );
          })}
          <DialogFooter handleClose={handleClose} type="add" />
        </FormStyled>
      </DialogContent>
    </Dialog>
  );
};

AddDialog.propTypes = {
  title: PropTypes.string,
  head: PropTypes.arrayOf(PropTypes.array),
  open: PropTypes.bool,
  setOpen: PropTypes.func.isRequired,
  form: PropTypes.objectOf(PropTypes.object),
  onSubmit: PropTypes.func,
  onChange: PropTypes.func
};

AddDialog.defaultProps = {
  title: '',
  head: [],
  open: false,
  form: null,
  onSubmit: null,
  onChange: null
};

export default AddDialog;
