import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import PreInfoItemCard from '../Card/PreInfoItemCard';
import CardListTitle from '../CardListTitle/CardListTitle';
import Selected from '../Selected/Selected';

const PaperStyled = styled(Paper)`
  width: 45%;
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

const PreInfoViewContentMain = ({ head, rows, small }) => {
  const cardList = items =>
    items.map((item, index) => {
      const row = Object.values(item);
      return (
        <PreInfoItemCard item={row} head={head} index={index} small={small} />
      );
    });

  const handleSelectAll = items => {
    return console.log(items);
  };

  return (
    <PaperStyled>
      <CardListTitle
        head={head}
        small={small}
        handleSelectAll={handleSelectAll(rows)}
      />
      <PaperWrapper>{cardList(rows)}</PaperWrapper>

      <Selected all={rows.length} count={3} />
    </PaperStyled>
  );
};

PreInfoViewContentMain.propTypes = {
  head: PropTypes.arrayOf(PropTypes.array),
  rows: PropTypes.arrayOf(PropTypes.array),
  small: PropTypes.bool
};

PreInfoViewContentMain.defaultProps = {
  head: [],
  rows: [],
  small: false
};

export default PreInfoViewContentMain;
