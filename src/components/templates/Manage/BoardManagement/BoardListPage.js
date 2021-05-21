import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import Pagination from '../../../modules/Pagination/Pagination';
import Table from '../../../modules/Table/Table';
import BoardData from '../../../../statics/data/BoardData';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import RoundButton from '../../../atoms/Button/RoundButton';
import useToggle from '../../../../libs/useToggle';
import AddDialogContainer from '../../../modules/AddDialog/BoardAddDialogContainer';

const PAGE_DATA_LENGTH = 10;

const ContentWrapper = styled.div`
  display: flex;
  padding: 8px;
`;

const PaperStyled = styled(Paper)`
  width: 100%;
  height: 100%;
  border-radius: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Wrapper = styled.div``;

const BoardListPage = ({ boardList, error, loading, page, setPage }) => {
  const title = '게시판';
  const headerTitle = `${title} 목록 조회`;
  const [boardListData, setboardListData] = useState([]);
  const [addOpen, setAddOpen] = useToggle();

  const handleAddOpen = () => {
    setAddOpen(true);
  };

  useEffect(() => {
    if (boardList) {
      setboardListData(boardList.data);
    }
  }, [boardList]);

  console.log(BoardData);

  return (
    <Wrapper>
      <ContentHeader title={headerTitle}>
        <RoundButton color="secondary" onClick={handleAddOpen}>
          {title} 추가
        </RoundButton>
      </ContentHeader>
      <ContentWrapper>
        <PaperStyled component="div">
          {error ? (
            <div>loading</div>
          ) : (
            !loading &&
            boardList && (
              <>
                <Table
                  head={BoardData}
                  rows={boardListData.slice(
                    PAGE_DATA_LENGTH * (page - 1),
                    PAGE_DATA_LENGTH * (page - 1) + PAGE_DATA_LENGTH
                  )}
                  type="board"
                  typeId="boardId"
                />
                <Pagination
                  totalPage={Math.ceil(boardListData.length / PAGE_DATA_LENGTH)}
                  page={page}
                  link="m/board"
                />
              </>
            )
          )}
        </PaperStyled>
      </ContentWrapper>

      {addOpen && (
        <AddDialogContainer
          title={title}
          head={BoardData}
          open={addOpen}
          setOpen={setAddOpen}
          setPage={setPage}
        />
      )}
    </Wrapper>
  );
};

BoardListPage.propTypes = {
  board: PropTypes.shape({
    data: PropTypes.shape({
      content: PropTypes.shape({
        boardId: PropTypes.string.isRequired,
        building: PropTypes.string.isRequired,
        roomNumber: PropTypes.string.isRequired,
        capacity: PropTypes.string.isRequired,
        note: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }),
  error: PropTypes.string,
  loading: PropTypes.string,
  page: PropTypes.number.isRequired
};

BoardListPage.defaultProps = {
  board: null,
  error: null,
  loading: null
};

export default BoardListPage;
