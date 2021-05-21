import React, { useEffect } from 'react';
import qs from 'qs';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import AddDialog from './AddDialog';

import {
  loadMenus,
  changeField,
  addMenu,
  initializeAdd
} from '../../../modules/manage/menu';

const AddDialogContainer = ({
  location,
  title,
  head,
  open,
  setOpen,
  setPage
}) => {
  const dispatch = useDispatch();
  const { form, add, error } = useSelector(({ menu }) => ({
    form: menu.menu,
    add: menu.add,
    addError: menu.addError
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
      addMenu({
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
    if (error) {
      console.log(error);
    }
    if (add) {
      const { page = 1 } = qs.parse(location.search, {
        ignoreQueryPrefix: true
      });
      setPage(page);
      const token = localStorage.getItem('token');
      dispatch(loadMenus({ token }));
      setOpen();
    }
  }, [add, error, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(initializeAdd());
    };
  }, [dispatch]);

  return (
    <AddDialog
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

AddDialogContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
  title: PropTypes.string.isRequired,
  head: PropTypes.arrayOf(PropTypes.array).isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};

export default withRouter(AddDialogContainer);
