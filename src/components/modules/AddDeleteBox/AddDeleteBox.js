import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import IconButton from '../../atoms/IconButton/IconButton';
import AddIcon from '../../atoms/Icons/AddIcon';
import DeleteIcon from '../../atoms/Icons/DeleteIcon';

const ButtonWrapper = styled.div`
  width: 5%;
  display: flex;
  flex: wrap;
  flex-direction: column;
  align-heads: center;
`;

const AddDeleteBox = ({ setAddOpen, setDeleteOpen }) => {
  return (
    <>
      <ButtonWrapper>
        <IconButton onClick={() => setAddOpen()}>
          <AddIcon />
        </IconButton>
        <IconButton onClick={() => setDeleteOpen()}>
          <DeleteIcon />
        </IconButton>
      </ButtonWrapper>
    </>
  );
};

AddDeleteBox.propTypes = {
  setAddOpen: PropTypes.func.isRequired,
  setDeleteOpen: PropTypes.func.isRequired
};

AddDeleteBox.defaultProps = {};

export default AddDeleteBox;
