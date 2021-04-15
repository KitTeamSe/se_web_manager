import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '../../atoms/Button/Button';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem 0 1rem 0;
  flex-grow: 1;
`;
const MenuDeleteDialog = ({ title, open, handleClose, toggle }) => {
  return (
    <Dialog open={open} fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>asdfasdfasdf</DialogContentText>
      </DialogContent>
      <ButtonContainer>
        <Button onClick={handleClose} color="primary" size="lg">
          삭제
        </Button>
        <Button onClick={toggle} color="secondary" size="lg">
          취소
        </Button>
      </ButtonContainer>
    </Dialog>
  );
};

export default MenuDeleteDialog;

MenuDeleteDialog.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  toggle: PropTypes.func.isRequired
};

MenuDeleteDialog.defaultProps = {
  handleClose: null,
  title: '',
  open: false
};
