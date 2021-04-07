import React from 'react';
import styled from 'styled-components';
import ContentHeader from '../../modules/ContentHeader/ContentHeader';

const Wrapper = styled.div``;

const AuthGroupListView = () => {
  return (
    <Wrapper>
      <ContentHeader title="권한그룹 관리" />
    </Wrapper>
  );
};

export default AuthGroupListView;
