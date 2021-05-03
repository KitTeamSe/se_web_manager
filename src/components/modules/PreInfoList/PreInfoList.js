import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PreInfoItemCard from '../../atoms/Card/PreInfoItemCard';
import CardListTitle from '../../atoms/CardListTitle/CardListTitle';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const NoDataComment = styled.div`
  font-weight: 600;
  padding: 1rem;
  user-select: none;
  color: #666666;
`;

const PaperWrapper = styled.div`
  overflow-y: auto;
  align-self: stretch;
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

const PreInfoList = ({ page, head, rows, select, setSelect }) => {
  const a = false;
  const handleOnSelect = (index, num) =>
    index === num ? setSelect(null) : setSelect(index);
  if (a) return <CardListTitle head={head} />;

  return (
    <>
      <CardListTitle head={head} />
      <PaperWrapper>
        {rows.length ? (
          rows.map((row, index) => {
            return (
              <PreInfoItemCard
                item={row}
                head={head}
                index={page * 10 + index}
                select={select}
                onClick={() => handleOnSelect(index, select)}
              />
            );
          })
        ) : (
          <Wrapper>
            <NoDataComment>데이터 없음</NoDataComment>
          </Wrapper>
        )}
      </PaperWrapper>
    </>
  );
};

PreInfoList.propTypes = {
  page: PropTypes.number,
  head: PropTypes.arrayOf(PropTypes.array),
  rows: PropTypes.arrayOf(PropTypes.array),
  select: PropTypes.number,
  setSelect: PropTypes.func
};

PreInfoList.defaultProps = {
  page: 1,
  head: [],
  rows: [],
  select: null,
  setSelect: null
};

export default PreInfoList;
