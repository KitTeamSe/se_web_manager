import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PreInfoItemCard from '../../atoms/Card/PreInfoItemCard';
import CardListTitle from '../../atoms/CardListTitle/CardListTitle';

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

const PreInfoList = ({ head, rows, select, setSelect }) => {
  const handleOnSelect = (index, num) =>
    index === num ? setSelect(null) : setSelect(index);

  return (
    <>
      <CardListTitle head={head} />
      <PaperWrapper>
        {rows.map((data, index) => {
          const row = Object.values(data);
          return (
            <PreInfoItemCard
              item={row}
              head={head}
              index={index}
              select={select}
              onClick={() => handleOnSelect(index, select)}
            />
          );
        })}
      </PaperWrapper>
    </>
  );
};

PreInfoList.propTypes = {
  head: PropTypes.arrayOf(PropTypes.array),
  rows: PropTypes.arrayOf(PropTypes.array),
  select: PropTypes.number,
  setSelect: PropTypes.func
};

PreInfoList.defaultProps = {
  head: [],
  rows: [],
  select: null,
  setSelect: null
};

export default PreInfoList;
