import React, { useState, useEffect } from 'react';
import qs from 'qs';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import BoardListPage from './BoardListPage';
import { loadBoards, initialize } from '../../../../modules/manage/board';

const BoardListViewContainer = ({ boardData, location }) => {
  const dispatch = useDispatch();
  const { boardListData, error, loadingData } = useSelector(
    ({ board, loading }) => ({
      boardListData: board.list,
      error: board.listError,
      loadingData: loading['boards/LOAD_SUBJECTS']
    })
  );
  const [newPage, setNewPage] = useState(1);

  useEffect(() => {
    dispatch(initialize());
  }, []);

  useEffect(() => {
    const { page = 1 } = qs.parse(location.search, { ignoreQueryPrefix: true });
    setNewPage(page);
    const token = localStorage.getItem('token');
    dispatch(loadBoards({ token }));
  }, [dispatch, location.search]);

  return (
    <BoardListPage
      boardList={boardListData}
      boardData={boardData}
      error={error}
      loading={loadingData}
      page={newPage}
      setPage={setNewPage}
    />
  );
};

BoardListViewContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
};

export default withRouter(BoardListViewContainer);
