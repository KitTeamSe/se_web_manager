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
    if (type === 'lectureRoom') return `강의실`;
    if (type === 'teacher') return `교사`;
    if (type === 'subject') return `과목`;
    if (type === 'period') return `교시`;
    return null;
  };

  const contentsComment = () => {
    if (type === 'lectureRoom')
      return `강의실 ${head.building} ${head.roomNumber}`;
    return head.name;
  };

  return (
    <DialogContent>
      <InputWrapper>
        <Typography>{headComment()} 정보를 삭제하시겠습니까</Typography>
      </InputWrapper>
      <InputWrapper>
        <Typography>{contentsComment()}</Typography>
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