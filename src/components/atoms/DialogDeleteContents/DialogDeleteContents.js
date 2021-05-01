import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DialogContent, Typography } from '@material-ui/core';

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const DialogDeleteContents = ({ head, type }) => {
  const headComment = () => {
    if (type === 'lectureRoom') return `${head.building} ${head.room_number}`;
    return head.name;
  };

  return (
    <DialogContent>
      <InputWrapper>
        <Typography>삭제하시겠습니까</Typography>
      </InputWrapper>
      <InputWrapper>
        <Typography>{headComment(head, type)}</Typography>
      </InputWrapper>
    </DialogContent>
  );
};

DialogDeleteContents.propTypes = {
  head: PropTypes.arrayOf(PropTypes.array),
  type: PropTypes.string.isRequired
};

DialogDeleteContents.defaultProps = {
  head: []
};

export default DialogDeleteContents;
