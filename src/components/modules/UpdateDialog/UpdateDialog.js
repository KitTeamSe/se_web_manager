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

const idData = ['menuId', 'boardId'];

const UpdateDialog = ({
  id,
  title,
  head,
  open,
  setOpen,
  form,
  onSubmit,
  onChange
}) => {
  const handleClose = () => {
    setOpen(false);
  };
  console.log(id);

  return (
    <Dialog onClose={handleClose} open={open} disableBackdropClick>
      <DialogTitleStyled>{title} 수정</DialogTitleStyled>
      <DialogContent>
        <FormStyled onSubmit={onSubmit}>
          {head.map(el =>
            idData.indexOf(el.key) > -1 ? (
              <TextField
                id={el.key}
                name={el.key}
                label={el.name}
                type={el.type}
                placeholder={el.placeholder}
                value={id}
                onChange={onChange}
                items={el.items}
              />
            ) : (
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
          )}
          <DialogFooter handleClose={handleClose} type="update" />
        </FormStyled>
      </DialogContent>
    </Dialog>
  );
};

UpdateDialog.propTypes = {
  title: PropTypes.string,
  head: PropTypes.arrayOf(PropTypes.array),
  open: PropTypes.bool,
  setOpen: PropTypes.func.isRequired,
  form: PropTypes.objectOf(PropTypes.object),
  onSubmit: PropTypes.func,
  onChange: PropTypes.func
};

UpdateDialog.defaultProps = {
  title: '',
  head: [],
  open: false,
  form: null,
  onSubmit: null,
  onChange: null
};

export default UpdateDialog;
