import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import PreInfoItemCard from '../../atoms/Card/PreInfoItemCard';
import CardListTitle from '../../atoms/CardListTitle/CardListTitle';
import IconButton from '../../atoms/IconButton/IconButton';
import AddIcon from '../../atoms/Icons/AddIcon';
import DeleteIcon from '../../atoms/Icons/DeleteIcon';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
`;

const ButtonWrapper = styled.div`
  width: 5%;
  display: flex;
  flex: wrap;
  flex-direction: column;
  align-items: center;
`;

const PaperStyled = styled(Paper)`
  width: 90%;
  height: 520px;
  justify-content: center;
  border-radius: 0;
`;

const PaperWrapper = styled.div`
  height: 430px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 1px;
    height: 1px;
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

const PreInfoView = ({ head, rows, small }) => {
  const [select, setSelect] = useState(null);

  useEffect(() => {
    console.log(select);
  });

  const handleOnSelect = (index, num) =>
    index === num ? setSelect(null) : setSelect(index);

  const cardList = () =>
    rows.map((item, index) => {
      const row = Object.values(item);
      return (
        <PreInfoItemCard
          item={row}
          head={head}
          index={index}
          small={small}
          select={select}
          onClick={() => handleOnSelect(index, select)}
        />
      );
    });

  return (
    <ContentWrapper>
      <PaperStyled>
        <CardListTitle head={head} small={small} />
        <PaperWrapper>{cardList()}</PaperWrapper>
      </PaperStyled>
      <ButtonWrapper>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </ButtonWrapper>
    </ContentWrapper>
  );
};

PreInfoView.propTypes = {
  head: PropTypes.arrayOf(PropTypes.array),
  rows: PropTypes.arrayOf(PropTypes.array),
  small: PropTypes.bool
};

PreInfoView.defaultProps = {
  head: [],
  rows: [],
  small: false
};

export default PreInfoView;
