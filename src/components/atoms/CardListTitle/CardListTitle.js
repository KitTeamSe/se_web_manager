import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const Wrapper = styled.div`
  margin: 5px 10px;
  padding: 8px 8px 8px 8px;
  display: flex;
  justify-content: space-between;
`;

const ItemWrapper = styled.div`
  width: ${({ width }) => width};
`;

const ItemText = styled(Typography)`
  font-size: ${({ small }) => (small ? '0.9vw' : '1.1vw')};
  text-align: center;
  font-weight: 600;
`;

const CardListTitle = ({ head, small }) => {
  return (
    <Wrapper>
      {head.map(data => {
        return (
          <ItemWrapper width={data.width}>
            <ItemText small={small}>{data.name}</ItemText>
          </ItemWrapper>
        );
      })}
    </Wrapper>
  );
};

CardListTitle.propTypes = {
  head: PropTypes.arrayOf(PropTypes.array),
  small: PropTypes.bool
};

CardListTitle.defaultProps = {
  head: [],
  small: false
};

export default CardListTitle;
