import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DialogContent, Typography } from '@material-ui/core';

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const DialogDeleteContents = ({ item, type }) => {
  const itemComment = () => {
    if (type === 'lectureRoom') return `${item.building} ${item.room_number}`;
    return item.name;
  };

  return (
    <DialogContent>
      <InputWrapper>
        <Typography>삭제하시겠습니까</Typography>
      </InputWrapper>
      <InputWrapper>
        <Typography>{itemComment(item, type)}</Typography>
      </InputWrapper>
    </DialogContent>
  );
};

DialogDeleteContents.propTypes = {
  item: PropTypes.arrayOf(PropTypes.array),
  type: PropTypes.string.isRequired
};

DialogDeleteContents.defaultProps = {
  item: []
};

export default DialogDeleteContents;
