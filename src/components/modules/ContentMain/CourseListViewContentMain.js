import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import ArrowRightIcon from '../../atoms/Icons/ArrowRightIcon';
import ArrowLeftIcon from '../../atoms/Icons/ArrowLeftIcon';
import IconButton from '../../atoms/IconButton/IconButton';
import PreInfoItemCard from '../../atoms/Card/PreInfoItemCard';
import CardListTitle from '../../atoms/CardListTitle/CardListTitle';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 8px;
`;

const IconWrapper = styled.div`
  display: flex;
  height: 500px;
  flex: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PaperStyled = styled(Paper)`
  width: 45%;
  height: 500px;
  justify-content: center;
  background-color: #f2f2f2;
`;

const PaperWrapper = styled.div`
  height: 450px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background: #ffffff;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2.5px;
    background-color: #dddddd;

    &:hover {
      background-color: #aaaaaa;
    }
  }
  &::-webkit-scrollbar-track {
    background: #ffffff;
  }
`;

const CourseListViewContentMain = ({
  head,
  inActiveRows,
  activeRows,
  small
}) => {
  const cardList = rows =>
    rows.map((item, index) => {
      const row = Object.values(item);
      return (
        <PreInfoItemCard item={row} head={head} index={index} small={small} />
      );
    });

  return (
    <ContentWrapper>
      <PaperStyled>
        <CardListTitle head={head} small={small} />
        <PaperWrapper>{cardList(inActiveRows)}</PaperWrapper>
      </PaperStyled>
      <IconWrapper>
        <IconButton>
          <ArrowRightIcon />
        </IconButton>
        <IconButton>
          <ArrowLeftIcon />
        </IconButton>
      </IconWrapper>
      <PaperStyled>
        <CardListTitle head={head} small={small} />
        <PaperWrapper>{cardList(activeRows)}</PaperWrapper>
      </PaperStyled>
    </ContentWrapper>
  );
};

CourseListViewContentMain.propTypes = {
  head: PropTypes.arrayOf(PropTypes.array),
  inActiveRows: PropTypes.arrayOf(PropTypes.array),
  activeRows: PropTypes.arrayOf(PropTypes.array),
  small: PropTypes.bool
};

CourseListViewContentMain.defaultProps = {
  head: [],
  inActiveRows: [],
  activeRows: [],
  small: false
};

export default CourseListViewContentMain;
