import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import BoardUpdateForm from './UpdateForm';

import {
  changeField,
  loadBoard,
  updateBoard,
  initialize,
  initializeUpdate,
  changeFieldAll
} from '../../../modules/manage/board';
import BoardData from '../../../statics/data/BoardData';

const UpdateFormContainer = ({ location, history, match }) => {
  const dispatch = useDispatch();
  const { id } = match.params;
  const [error, setError] = useState();
  const { form, update, updateError, boardData } = useSelector(({ board }) => ({
    form: board.board,
    update: board.update,
    updateError: board.updateError,
    boardData: board.info
  }));

  useEffect(() => {
    const token = localStorage.getItem('token');
    dispatch(loadBoard({ id, token }));
    const {
      description,
      boardOrder,
      boardType,
      nameEng,
      nameKor,
      parentId,
      url
    } = boardData.data;
    dispatch(
      changeFieldAll({
        description,
        boardOrder,
        boardType,
        nameEng,
        nameKor,
        parentId,
        url
      })
    );
  }, []);

  const goBack = () => {
    history.goBack();
  };

  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        key: name,
        value
      })
    );
  };

  const onSubmit = e => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const boardId = id;
    const {
      description,
      boardOrder,
      boardType,
      nameEng,
      nameKor,
      parentId,
      url
    } = form;

    dispatch(
      updateBoard({
        boardId,
        description,
        boardOrder,
        boardType,
        nameEng,
        nameKor,
        parentId,
        url,
        token
      })
    );
  };

  useEffect(() => {
    if (updateError) {
      setError(updateError.response);
      console.log(error);
    }
    if (update) {
      goBack();
      setError();
    }
  }, [update, updateError, dispatch, location.search]);

  useEffect(() => {
    return () => {
      dispatch(initializeUpdate());
      dispatch(initialize());
    };
  }, [dispatch]);

  return (
    <BoardUpdateForm
      id={id}
      head={BoardData}
      error={error}
      form={boardData.data}
      onSubmit={onSubmit}
      onChange={onChange}
      goBack={goBack}
    />
  );
};

export default withRouter(UpdateFormContainer);
