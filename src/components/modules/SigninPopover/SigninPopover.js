import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import {
  changeField,
  initializeForm,
  initializeAuth,
  signin
} from '../../../modules/auth';
import TextField from '../../atoms/TextField/TextField';
import RoundButton from '../../atoms/Button/RoundButton';

const Wrapper = styled.div`
  display: flex;
  flex: wrap;
  flex-direction: column;
  align-content: center;
  text-align: center;
  margin: 15px 10px;
  & form {
    display: flex;
    flex: wrap;
    flex-direction: column;
    align-content: center;
    text-align: center;
  }
`;

const ButtonWrapper = styled.div`
  padding-top: 10px;
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const SigninPopover = ({ handleClose, type }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auths, authError } = useSelector(({ auth }) => ({
    form: auth.signin,
    auths: auth.auth,
    authError: auth.authError
  }));

  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'signin',
        key: name,
        value
      })
    );
  };

  const onSubmit = e => {
    e.preventDefault();
    const { id, pw } = form;
    if (id === '') {
      setError('ID 및 비밀번호를 입력하세요');
      return;
    }
    if (pw.length < 4 || pw.length > 12) {
      setError('비밀번호 4자 이상 12자 이하');
      return;
    }
    dispatch(signin({ id, pw }));
  };

  useEffect(() => {
    if (authError) {
      setError('로그인 실패');
    }
    if (auths) {
      localStorage.setItem(
        'token',
        JSON.stringify(auths.data.token).replaceAll('"', '')
      );
      dispatch(initializeAuth());
      dispatch(initializeForm('signin'));
      handleClose();
    }
  }, [auths, authError, dispatch]);

  return (
    <Wrapper>
      {type !== 'page' && <Typography variant="h6">로그인</Typography>}
      <form onSubmit={onSubmit}>
        <TextField
          id="id"
          name="id"
          label="ID"
          onChange={onChange}
          value={form.id}
          type="id"
        />
        <TextField
          id="pw"
          name="pw"
          label="PW"
          onChange={onChange}
          value={form.pw}
          type="password"
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonWrapper>
          <RoundButton color="secondary" type="submit">
            로그인
          </RoundButton>
        </ButtonWrapper>
      </form>
    </Wrapper>
  );
};

SigninPopover.propTypes = {
  handleClose: PropTypes.func.isRequired
};

SigninPopover.defaultProps = {};

export default SigninPopover;
