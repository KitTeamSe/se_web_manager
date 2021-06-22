import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import AuthorityMappingAddFormContainer from '../../../modules/AddForm/AuthorityMappingAddFormContainer';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import RoundButton from '../../../atoms/Button/RoundButton';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
`;

const Wrapper = styled.div``;

const AuthorityMappingAddPage = ({ history }) => {
  const title = '권한-권한 그룹 매핑';
  const headerTitle = `${title} 추가`;

  const goBack = () => {
    history.goBack();
  };

  return (
    <Wrapper>
      <ContentHeader title={headerTitle}>
        <RoundButton color="secondary" onClick={goBack}>
          뒤로가기
        </RoundButton>
      </ContentHeader>
      <ContentWrapper>
        <AuthorityMappingAddFormContainer title={title} />
      </ContentWrapper>
    </Wrapper>
  );
};

AuthorityMappingAddPage.propTypes = {};

AuthorityMappingAddPage.defaultProps = {};

export default withRouter(AuthorityMappingAddPage);
