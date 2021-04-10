import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Typography, Checkbox } from '@material-ui/core';

const Wrapper = styled.div`
  height: 40px
  margin: 0 10px;
  padding: 8px 8px 8px 2px;
  display: flex;
  justify-content: space-between;
`;

const ItemWrapper = styled.div`
  width: ${({ width }) => width};
  vertical-align: middle;
`;

const ItemText = styled(Typography)`
  font-size: ${({ small }) => (small ? '0.9vw' : '1.1vw')};
  text-align: center;
  font-weight: 600;
`;

const CheckboxStyled = styled(Checkbox)`
  padding: 0;
  & span {
    color: ${({ check }) =>
      check ? props => props.theme.mainColor : '#222222'};
  }
`;

const CardListTitle = ({ head, small }) => {
  const [check, setCheck] = useState(false);

  const handleOnClick = useCallback(() => {
    setCheck(!check);
    console.log(check);
  }, [check]);

  return (
    <Wrapper>
      {head.map((data, index) => {
        return index === 0 ? (
          <ItemWrapper width={data.width}>
            <CheckboxStyled check={check} onClick={handleOnClick} />
          </ItemWrapper>
        ) : (
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
