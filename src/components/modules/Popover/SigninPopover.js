import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Typography } from '@material-ui/core';
import { changeField, initializeForm, signin } from '../../../modules/auth';
import { account } from '../../../modules/user';
import TextField from '../../atoms/TextField/TextField';
import RoundButton from '../../atoms/Button/RoundButton';
import { MANAGE_URL } from '../../../statics/data/config';

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
const LinkWrapper = styled.div`
  text-align: right;
`;

const LinkStyled = styled(Link)`
  font-size: 0.8vw;
`;

const SigninPopover = ({ history, handleClose }) => {
  const dispatch = useDispatch();
  const { form, auths, authError, users } = useSelector(({ auth, user }) => ({
    form: auth.signin,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user
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
    dispatch(signin({ id, pw }));
  };

  useEffect(() => {
    dispatch(initializeForm('signin'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('오류');
      console.log(authError);
      dispatch(initializeForm('signin'));
    }
    if (auths) {
      console.log('로그인 성공');
      handleClose();
      dispatch(account());
    }
  }, [auths, authError, dispatch]);

  useEffect(() => {
    if (users) {
      handleClose();
    }
  }, [history, users]);

  return (
    <Wrapper>
      <Typography variant="h6">로그인</Typography>
      <form onSubmit={onSubmit}>
        <TextField
          id="id"
          name="id"
          label="ID"
          onChange={onChange}
          value={form.id}
        />
        <TextField
          id="pw"
          name="pw"
          label="PW"
          onChange={onChange}
          value={form.pw}
          type="password"
        />
        <ButtonWrapper>
          <RoundButton type="submit">로그인</RoundButton>
        </ButtonWrapper>
      </form>
      <LinkWrapper>
        <LinkStyled to={`${MANAGE_URL}/signup`}>회원가입</LinkStyled>
      </LinkWrapper>
    </Wrapper>
  );
};

SigninPopover.propTypes = {
  handleClose: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired
};

SigninPopover.defaultProps = {};

export default withRouter(SigninPopover);
