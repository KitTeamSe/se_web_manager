import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
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

const SigninPopover = ({ handleClose, history }) => {
  const goSignin = () => {
    history.push(`/signin`);
  };

  const onSignout = () => {
    localStorage.clear();
    handleClose();
    goSignin();
  };
  return (
    <Wrapper>
      <ButtonWrapper>
        <RoundButton color="secondary" onClick={onSignout}>
          로그아웃
        </RoundButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

SigninPopover.propTypes = {
  handleClose: PropTypes.func.isRequired
};

SigninPopover.defaultProps = {};

export default withRouter(SigninPopover);
