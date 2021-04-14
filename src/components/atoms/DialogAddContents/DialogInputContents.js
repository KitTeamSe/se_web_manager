import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DialogContent } from '@material-ui/core';
import TextField from '../TextField/TextField';

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const DialogInputContents = ({ item }) => {
  console.log(item);
  return (
    <DialogContent>
      {item.map(
        (el, i) =>
          i === 0 || (
            <InputWrapper>
              {el.type === 'number' ? (
                <TextField id={el.key} label={el.name} type="number" />
              ) : null}
              {el.type === 'string' ? (
                <TextField id={el.key} label={el.name} />
              ) : null}
            </InputWrapper>
          )
      )}
    </DialogContent>
  );
};

DialogInputContents.propTypes = {
  item: PropTypes.arrayOf(PropTypes.array)
};

DialogInputContents.defaultProps = {
  item: []
};

export default DialogInputContents;
