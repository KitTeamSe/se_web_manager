import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: block;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 8px;
`;

const ContentMain = ({ children }) => {
  return (
    <Wrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </Wrapper>
  );
};

ContentMain.propTypes = {
  children: PropTypes.shape({ root: PropTypes.string }).isRequired
};

ContentMain.defaultProps = {};

export default ContentMain;
