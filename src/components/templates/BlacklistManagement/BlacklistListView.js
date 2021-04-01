import React from 'react';
import styled from 'styled-components';
import Header from '../../modules/Header/Header';

const Wrapper = styled.div``;

const BlacklistListView = () => {
  return (
    <Wrapper>
      <Header title="IP차단 관리" />
    </Wrapper>
  );
};

export default BlacklistListView;
