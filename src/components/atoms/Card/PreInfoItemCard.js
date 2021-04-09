import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Card, Typography } from '@material-ui/core';

const CardStyled = styled(Card)`
  margin: 5px 10px;
  padding: 8px 8px 8px 2px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border: solid #dddddd 1px;
  box-shadow: none;
  &:hover {
    background-color: #eeeeee;
  }
`;

const ItemWrapper = styled.div`
  width: ${({ width }) => width};
`;

const ItemText = styled(Typography)`
  font-size: ${({ small }) => (small ? '0.8vw' : '1.1vw')};
  text-align: ${({ align }) => align || 'center'};
  font-weight: 500;
`;

const PreInfoItemCard = ({ children, item, head, index, small }) => {
  const indexItem = i => (
    <ItemWrapper width={head[i].width}>
      {/* <ItemText align="left" small={small}>
      &nbsp;&nbsp;{index + 1}
    </ItemText> */}
      <ItemText small={small}>{index + 1}</ItemText>
    </ItemWrapper>
  );

  const dataItem = (data, i) => (
    <ItemWrapper width={head[i].width}>
      <ItemText small={small}>{data}</ItemText>
    </ItemWrapper>
  );

  return (
    <CardStyled>
      {item.map((data, i) => {
        return i === 0 ? indexItem(i) : dataItem(data, i);
      })}
      <ItemWrapper>
        <ItemText>{children}</ItemText>
      </ItemWrapper>
    </CardStyled>
  );
};

PreInfoItemCard.propTypes = {
  children: PropTypes.string,
  item: PropTypes.arrayOf(PropTypes.array),
  head: PropTypes.arrayOf(PropTypes.array),
  index: PropTypes.number,
  small: PropTypes.string
};

PreInfoItemCard.defaultProps = {
  children: '',
  item: [],
  head: [],
  index: 1,
  small: false
};

export default PreInfoItemCard;
