import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
// import DialogInputContents from '../../atoms/Dialog/DialogInputContents';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';

const TextFieldStyled = styled(TextField)`
  margin: 0 1rem 0 1rem;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem 0 1rem 0;
  flex-grow: 1;
`;
const MenuCreateDialog = ({
  title,
  items,
  open,
  handleClose,
  onChange,
  toggle
}) => {
  return (
    <Dialog open={open} fullWidth>
      <DialogTitle>{title}</DialogTitle>
      {items.map(item => (
        <TextFieldStyled
          onChange={onChange}
          name={item.name}
          label={item.label}
          value={item.value}
        />
      ))}
      <ButtonContainer>
        <Button onClick={handleClose} color="primary" size="lg">
          확인
        </Button>
        <Button onClick={toggle} color="secondary" size="lg">
          취소
        </Button>
      </ButtonContainer>
    </Dialog>
  );
};

export default MenuCreateDialog;

MenuCreateDialog.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.array),
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired
};

MenuCreateDialog.defaultProps = {
  handleClose: null,
  title: '',
  items: [],
  open: false
};
