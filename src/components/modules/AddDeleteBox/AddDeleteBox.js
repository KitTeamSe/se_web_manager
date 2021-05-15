import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '../../atoms/IconButton/IconButton';
import AddIcon from '../../atoms/Icons/AddIcon';
import DeleteIcon from '../../atoms/Icons/DeleteIcon';
// import AlertDialog from '../../templates/Dialog/AlertDialog/AlertDialog';

const ButtonWrapper = styled.div`
  width: 5%;
  flex-wrap: wrap;
  justify-content: center;
  align-item: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const AddDeleteBox = ({ setAddOpen, setDeleteOpen, select }) => {
  const [alert, setAlert] = useState(false);
  const handleOpenAlert = () => {
    setAlert(true);
  };

  const handleCloseAlert = () => {
    setAlert(false);
  };

  const handleDeleteOpen = () => {
    if (select !== null) setDeleteOpen();
    else handleOpenAlert();
  };

  return (
    <>
      <ButtonWrapper>
        <Wrapper>
          <IconButton onClick={() => setAddOpen()}>
            <AddIcon />
          </IconButton>
        </Wrapper>
        <Wrapper>
          <IconButton onClick={() => handleDeleteOpen()}>
            <DeleteIcon />
          </IconButton>
        </Wrapper>
      </ButtonWrapper>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={alert}
        onClose={handleCloseAlert}
        message="선택된 데이터가 없습니다."
        key="select"
      />
    </>
  );
};

AddDeleteBox.propTypes = {
  setAddOpen: PropTypes.func.isRequired,
  setDeleteOpen: PropTypes.func.isRequired,
  select: PropTypes.number
};

AddDeleteBox.defaultProps = {
  select: null
};

export default AddDeleteBox;
