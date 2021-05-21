import React, { useEffect } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import UpdateDialog from './UpdateDialog';

import {
  loadMenu,
  loadMenus,
  changeField,
  updateMenu,
  initializeUpdate,
  changeFieldAll
} from '../../../modules/manage/menu';

const UpdateDialogContainer = ({ match, data, title, head, open, setOpen }) => {
  const dispatch = useDispatch();
  const { id } = match.params;
  const { form, update, error } = useSelector(({ menu }) => ({
    form: menu.menu,
    update: menu.update,
    updateError: menu.updateError
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
    const menuId = id;
    const {
      description,
      menuOrder,
      menuType,
      nameEng,
      nameKor,
      parentId,
      url
    } = form;

    dispatch(
      updateMenu({
        menuId,
        description,
        menuOrder,
        menuType,
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
      menuOrder,
      menuType,
      nameEng,
      nameKor,
      parentId,
      url
    } = data;
    dispatch(
      changeFieldAll({
        description,
        menuOrder,
        menuType,
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
      dispatch(loadMenu({ id, token }));
      dispatch(loadMenus({ token }));
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
