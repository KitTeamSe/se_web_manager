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
    background-color: ${({ index, select }) =>
      index === select ? props => props.theme.mainColor : '#eeeeee'};
  }
  background-color: ${({ index, select }) =>
    index === select ? props => props.theme.mainColor : '#ffffff'};
  color: ${({ index, select }) => (index === select ? '#ffffff' : '#000000')};
  transition: background-color 0.2s, transform 0.2s;
`;

const ItemWrapper = styled.div`
  width: ${({ width }) => width};
`;

const ItemText = styled(Typography)`
  font-size: ${({ small }) => (small ? '0.875rem' : '1rem')};
  text-align: ${({ align }) => align || 'center'};
  font-weight: 500;
`;

const PreInfoItemCard = ({
  children,
  item,
  head,
  index,
  small,
  select,
  onClick
}) => {
  const indexItem = i => (
    <ItemWrapper width={head[i].width}>
      <ItemText small={small}>{index + 1}</ItemText>
    </ItemWrapper>
  );

  const dataItem = (data, i) => (
    <ItemWrapper width={head[i].width}>
      <ItemText small={small}>{data}</ItemText>
    </ItemWrapper>
  );

  return (
    <CardStyled index={index} select={select} onClick={onClick}>
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
  small: PropTypes.string,
  select: PropTypes.number,
  onClick: PropTypes.func.isRequired
};

PreInfoItemCard.defaultProps = {
  children: '',
  item: [],
  head: [],
  index: 1,
  small: false,
  select: null
};

export default PreInfoItemCard;
