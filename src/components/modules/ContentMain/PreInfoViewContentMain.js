// import React, { useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import ArrowRightIcon from '../../atoms/Icons/ArrowRightIcon';
import ArrowLeftIcon from '../../atoms/Icons/ArrowLeftIcon';
import IconButton from '../../atoms/IconButton/IconButton';
import PreInfoItemCard from '../../atoms/Card/PreInfoItemCard';
import CardListTitle from '../../atoms/CardListTitle/CardListTitle';
import Selected from '../../atoms/Selected/Selected';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 8px;
`;

const IconWrapper = styled.div`
  height: 500px;
  display: flex;
  flex: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

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

const PreInfoViewContentMain = ({
  head,
  inActiveRows,
  activeRows,
  setInActiveRows,
  setActiveRows,
  small
}) => {
  // const [selectedActiveRows, setSelectedActiveRows] = useState([]);
  // const [selectedInActiveRows, setSelectedInActiveRows] = useState([]);

  const cardList = rows =>
    rows.map((item, index) => {
      const row = Object.values(item);
      return (
        <PreInfoItemCard item={row} head={head} index={index} small={small} />
      );
    });

  const handleSelectAll = rows => {
    return console.log(rows);
  };

  const handleOnActiveRows = () => {
    setActiveRows(inActiveRows);
    setInActiveRows(activeRows);
    handleSelectAll(inActiveRows);
    handleSelectAll(activeRows);
  };

  const handleOnInActiveRows = () => {
    setActiveRows(inActiveRows);
    setInActiveRows(activeRows);
  };

  return (
    <ContentWrapper>
      <PaperStyled>
        <CardListTitle
          head={head}
          small={small}
          handleSelectAll={handleSelectAll(inActiveRows)}
        />
        <PaperWrapper>{cardList(inActiveRows)}</PaperWrapper>

        <Selected all={inActiveRows.length} count={3} />
      </PaperStyled>
      <IconWrapper>
        <IconButton onClick={() => handleOnInActiveRows()}>
          <ArrowRightIcon onClick={() => handleOnInActiveRows()} />
        </IconButton>
        <IconButton onClick={() => handleOnActiveRows()}>
          <ArrowLeftIcon onClick={() => handleOnActiveRows()} />
        </IconButton>
      </IconWrapper>
      <PaperStyled>
        <CardListTitle
          head={head}
          small={small}
          handleSelectAll={handleSelectAll(activeRows)}
        />
        <PaperWrapper>{cardList(activeRows)}</PaperWrapper>
        <Selected all={activeRows.length} count={0} />
      </PaperStyled>
    </ContentWrapper>
  );
};

PreInfoViewContentMain.propTypes = {
  head: PropTypes.arrayOf(PropTypes.array),
  inActiveRows: PropTypes.arrayOf(PropTypes.array),
  activeRows: PropTypes.arrayOf(PropTypes.array),
  small: PropTypes.bool,
  setInActiveRows: PropTypes.func.isRequired,
  setActiveRows: PropTypes.func.isRequired
};

PreInfoViewContentMain.defaultProps = {
  head: [],
  inActiveRows: [],
  activeRows: [],
  small: false
};

export default PreInfoViewContentMain;
