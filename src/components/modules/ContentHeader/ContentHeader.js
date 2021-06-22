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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentHeader = ({ children, title }) => {
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

ContentHeader.propTypes = {
  children: PropTypes.shape({ root: PropTypes.string }),
  title: PropTypes.string
};

ContentHeader.defaultProps = {
  children: null,
  title: null
};

export default ContentHeader;
