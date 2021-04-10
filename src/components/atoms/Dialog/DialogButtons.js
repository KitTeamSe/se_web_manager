import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '../Button/Button';

const DialogActionsStyled = styled(DialogActions)`
  justify-content: center;
  margin: 10px;
`;

const DialogButtons = ({ handleClose, add, del }) => {
  const addButton = () => (
    <DialogActionsStyled>
      <Button onClick={handleClose} color="secondary" autoFocus>
        취 소
      </Button>
      <Button onClick={handleClose} color="primary">
        생 성
      </Button>
    </DialogActionsStyled>
  );
  const deleteButton = () => (
    <DialogActionsStyled>
      <Button onClick={() => handleClose()} color="primary" autoFocus>
        취 소
      </Button>
      <Button onClick={() => handleClose()} color="secondary">
        삭 제
      </Button>
    </DialogActionsStyled>
  );

  const defaultButton = () => (
    <DialogActionsStyled>
      <Button onClick={() => handleClose()} color="primary" autoFocus>
        확 인
      </Button>
    </DialogActionsStyled>
  );

  if (add) return addButton();
  if (del) return deleteButton();
  return defaultButton();
};

DialogButtons.propTypes = {
  handleClose: PropTypes.func.isRequired,
  add: PropTypes.bool,
  del: PropTypes.bool
};

DialogButtons.defaultProps = {
  add: false,
  del: false
};

export default DialogButtons;
