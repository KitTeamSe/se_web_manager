import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Card, Typography } from '@material-ui/core';

const CardStyled = styled(Card)`
  user-select: none;
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

const PreInfoItemCard = ({ item, head, index, small, select, onClick }) => {
  const fillZero = (num, digit) => {
    if (num >= 10 ** (digit - 1)) return num;
    const empty = num ? digit - num / 10 : digit - num / 10 - 1;
    const zero = '0'.repeat(empty);
    return `${zero}${num}`;
  };

  const handleText = data => {
    if (data && typeof data === 'object') {
      return `${fillZero(data[0], 2)} : ${fillZero(data[1], 2)}`;
    }
    switch (data) {
      // 교원관리 - 교원구분
      case 'FULL_PROFESSOR':
        return '전공교수';
      case 'FIXED_TERM_PROFESSOR':
        return '부교수';
      case 'ASSISTANT':
        return '어시';
      case 'STUDENT':
        return '학생';
      case 'ETC':
        return '그 외';
      // 교과관리 - 교과구분
      case 'LIBERAL_ARTS':
        return '교양';
      case 'MSC':
        return 'MSC';
      case 'MAJOR':
        return '전공';
      case 'TEACHER_EDUCATION':
        return '교사교육';
      case 'MILITARY_SCIENCE':
        return '군사교육';
      case 'COMMON':
        return '공통';
      // case 'ETC':
      //   return '그 외';
      default:
        return data;
    }
  };

  return (
    <CardStyled index={index} select={select} onClick={onClick}>
      {head.map((data, i) => {
        if (i === 0) {
          return (
            <ItemWrapper width={head[i].width}>
              <ItemText small={small}>{index + 1}</ItemText>
            </ItemWrapper>
          );
        }
        if (data.key in item) {
          return (
            <ItemWrapper width={head[i].width}>
              <ItemText small={small}>{handleText(item[data.key])}</ItemText>
            </ItemWrapper>
          );
        }
        return null;
      })}
    </CardStyled>
  );
};

PreInfoItemCard.propTypes = {
  item: PropTypes.arrayOf(PropTypes.array),
  head: PropTypes.arrayOf(PropTypes.array),
  index: PropTypes.number,
  small: PropTypes.string,
  select: PropTypes.number,
  onClick: PropTypes.func.isRequired
};

PreInfoItemCard.defaultProps = {
  item: [],
  head: [],
  index: 1,
  small: false,
  select: null
};

export default PreInfoItemCard;
