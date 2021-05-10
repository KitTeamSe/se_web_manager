import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import IconButton from '../../atoms/IconButton/IconButton';
import AddIcon from '../../atoms/Icons/AddIcon';
import DeleteIcon from '../../atoms/Icons/DeleteIcon';

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

const AddDeleteBox = ({ setAddOpen, setDeleteOpen }) => {
  return (
    <>
      <ButtonWrapper>
        <Wrapper>
          <IconButton onClick={() => setAddOpen()}>
            <AddIcon />
          </IconButton>
        </Wrapper>
        <Wrapper>
          <IconButton onClick={() => setDeleteOpen()}>
            <DeleteIcon />
          </IconButton>
        </Wrapper>
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
