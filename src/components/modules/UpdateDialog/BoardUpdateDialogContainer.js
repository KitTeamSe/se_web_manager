import React, { useEffect } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import UpdateDialog from './UpdateDialog';

import {
  loadBoard,
  loadBoards,
  changeField,
  updateBoard,
  initializeUpdate,
  changeFieldAll
} from '../../../modules/manage/board';

const UpdateDialogContainer = ({ match, data, title, head, open, setOpen }) => {
  const dispatch = useDispatch();
  const { id } = match.params;
  const { form, update, error } = useSelector(({ board }) => ({
    form: board.board,
    update: board.update,
    updateError: board.updateError
  }));

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
    const {
      description,
      boardOrder,
      boardType,
      nameEng,
      nameKor,
      parentId,
      url
    } = data;
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

  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if (update) {
      const token = localStorage.getItem('token');
      dispatch(loadBoard({ id, token }));
      dispatch(loadBoards({ token }));
      setOpen();
    }
  }, [update, error, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(initializeUpdate());
    };
  }, [dispatch]);

  return (
    <UpdateDialog
      id={id}
      title={title}
      head={head}
      open={open}
      setOpen={setOpen}
      form={form}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
};

UpdateDialogContainer.propTypes = {
  match: ReactRouterPropTypes.location.isRequired,
  title: PropTypes.string.isRequired,
  head: PropTypes.arrayOf(PropTypes.array).isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};

export default withRouter(UpdateDialogContainer);
