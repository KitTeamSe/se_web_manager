// import React, { useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import PreInfoItemCard from '../../atoms/Card/PreInfoItemCard';
import CardListTitle from '../../atoms/CardListTitle/CardListTitle';
import Selected from '../../atoms/Selected/Selected';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 8px;
`;

const PaperStyled = styled(Paper)`
  width: 80%;
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
  // const [selectedActiveRows, setSelectedActiveRows] = useState([]);
  // const [selectedInActiveRows, setSelectedInActiveRows] = useState([]);

  const cardList = () =>
    rows.map((item, index) => {
      const row = Object.values(item);
      return (
        <PreInfoItemCard item={row} head={head} index={index} small={small} />
      );
    });

  const handleSelectAll = () => {
    return console.log(rows);
  };

  return (
    <ContentWrapper>
      <PaperStyled>
        <CardListTitle
          head={head}
          small={small}
          handleSelectAll={handleSelectAll()}
        />
        <PaperWrapper>{cardList()}</PaperWrapper>

        <Selected all={rows.length} count={3} />
      </PaperStyled>
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
