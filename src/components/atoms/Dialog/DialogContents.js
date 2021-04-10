import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DialogContent, Typography } from '@material-ui/core';

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const DialogContents = ({ item, del }) => {
  const deleteComment = () => (
    <>
      <InputWrapper>
        <Typography>삭제하시겠습니까</Typography>
      </InputWrapper>
      <InputWrapper>
        <Typography>{item.name}</Typography>
      </InputWrapper>
    </>
  );
  return <DialogContent>{del ? deleteComment() : null}</DialogContent>;
};

DialogContents.propTypes = {
  item: PropTypes.arrayOf(PropTypes.array),
  del: PropTypes.bool
};

DialogContents.defaultProps = {
  item: [],
  del: false
};

export default DialogContents;
