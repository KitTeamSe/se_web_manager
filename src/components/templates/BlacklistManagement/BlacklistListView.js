import React from 'react';
import styled from 'styled-components';
import ContentHeader from '../../modules/ContentHeader/ContentHeader';

const Wrapper = styled.div``;

const BlacklistListView = () => {
  return (
    <Wrapper>
      <ContentHeader title="IP차단 관리" />
    </Wrapper>
  );
};

export default BlacklistListView;
