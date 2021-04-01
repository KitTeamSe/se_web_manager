import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Divider } from '@material-ui/core';
import ContentTitle from '../../atoms/ContentTitle/ContentTitle';

const Wrapper = styled.div`
  display: block;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 8px;
`;

const ButtonWrapper = styled.div``;

const Header = ({ children, title }) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <ContentTitle>{title}</ContentTitle>
        <ButtonWrapper>{children}</ButtonWrapper>
      </TitleWrapper>
      <Divider />
    </Wrapper>
  );
};

Header.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
};

Header.defaultProps = {
  children: null,
  title: null
};

export default Header;
