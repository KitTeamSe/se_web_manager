import React, { useEffect } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadBoard, initialize } from '../../../../modules/manage/board';
import BoardInfoPage from './BoardInfoPage';

const BoardInfoViewContainer = ({ location, match }) => {
  const dispatch = useDispatch();
  const { boardData, error, loadingData } = useSelector(
    ({ board, loading }) => ({
      boardData: board.info,
      error: board.infoError,
      loadingData: loading['boards/LOAD_SUBJECTS']
    })
  );

  useEffect(() => {
    dispatch(initialize());
  }, []);

  useEffect(() => {
    const { id } = match.params;
    const token = localStorage.getItem('token');
    dispatch(loadBoard({ id, token }));
  }, [dispatch, location.search]);

  return (
    <BoardInfoPage board={boardData} error={error} loading={loadingData} />
  );
};

BoardInfoViewContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
};

export default withRouter(BoardInfoViewContainer);
