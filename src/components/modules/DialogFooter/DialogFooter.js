import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '../../atoms/Button/Button';

const DialogActionsStyled = styled(DialogActions)`
  justify-content: center;
  margin: 10px;
`;

const DialogFooter = ({ handleClose, onClick, type }) => {
  return (
    <DialogActionsStyled>
      <Button onClick={handleClose} color="primary" autoFocus>
        취 소
      </Button>
      {type === 'add' && (
        <Button type="submit" color="secondary">
          생 성
        </Button>
      )}
      {type === 'update' && (
        <Button type="submit" color="secondary">
          수 정
        </Button>
      )}
      {type === 'delete' && (
        <Button onClick={onClick} color="secondary">
          삭 제
        </Button>
      )}
    </DialogActionsStyled>
  );
};

DialogFooter.propTypes = {
  handleClose: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string
};

DialogFooter.defaultProps = {
  onClick: null,
  type: null
};

export default DialogFooter;
