import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MenuUpdateForm from './UpdateForm';

import {
  changeField,
  loadMenu,
  updateMenu,
  initialize,
  initializeUpdate,
  changeFieldAll
} from '../../../modules/manage/menu';
import { MenuUpdateData } from '../../../statics/data/MenuData';

const UpdateFormContainer = ({ location, history, match }) => {
  const dispatch = useDispatch();
  const { id } = match.params;
  const [error, setError] = useState();
  const { form, update, updateError, menuData } = useSelector(({ menu }) => ({
    form: menu.menu,
    update: menu.update,
    updateError: menu.updateError,
    menuData: menu.info
  }));

  useEffect(() => {
    const token = localStorage.getItem('token');
    dispatch(loadMenu({ id, token }));
    const {
      description,
      menuOrder,
      menuType,
      nameEng,
      nameKor,
      parentId,
      url
    } = menuData.data;
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
    <MenuUpdateForm
      id={id}
      head={MenuUpdateData}
      error={error}
      form={menuData.data}
      onSubmit={onSubmit}
      onChange={onChange}
      goBack={goBack}
    />
  );
};

export default withRouter(UpdateFormContainer);
