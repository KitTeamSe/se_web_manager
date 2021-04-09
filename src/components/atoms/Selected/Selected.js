import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
// import { Delete } from '@material-ui/icons';

const TextStyled = styled(Typography)`
  font-size: 1vw;
  font-weight: 600;
  color: ${({ count }) => count < 1 || '#eeeeee'};
`;

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 10px;
  border-radius: 0;
  background-color: ${({ count }) =>
    count < 1 || (props => props.theme.mainColor)};
`;

const Selected = ({ all, count }) => {
  return (
    <Wrapper count={count}>
      {count > 0 ? (
        <TextStyled count={count}>
          총 {all} 개 중 {count} 개 선택됨
        </TextStyled>
      ) : (
        <TextStyled count={count}>총 {all} 개</TextStyled>
      )}
    </Wrapper>
  );
};

Selected.propTypes = {
  count: PropTypes.number,
  all: PropTypes.number
};

Selected.defaultProps = {
  count: 0,
  all: 0
};

export default Selected;
