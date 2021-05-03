import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '../../atoms/Button/Button';

const DialogActionsStyled = styled(DialogActions)`
  justify-content: center;
  margin: 10px;
`;

const DialogFooter = ({ handleClose, type }) => {
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

  if (type === 'add') return addButton();
  if (type === 'delete') return deleteButton();
  return defaultButton();
};

DialogFooter.propTypes = {
  handleClose: PropTypes.func.isRequired,
  type: PropTypes.string
};

DialogFooter.defaultProps = {
  type: 'default'
};

export default DialogFooter;
