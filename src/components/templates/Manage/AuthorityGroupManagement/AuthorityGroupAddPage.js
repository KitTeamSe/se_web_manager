import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import AuthorityGroupAddFormContainer from '../../../modules/AddForm/AuthorityGroupAddFormContainer';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import RoundButton from '../../../atoms/Button/RoundButton';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
`;

const Wrapper = styled.div``;

const AuthorityGroupAddPage = ({ history }) => {
  const title = '권한 그룹';
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
        <AuthorityGroupAddFormContainer title={title} />
      </ContentWrapper>
    </Wrapper>
  );
};

AuthorityGroupAddPage.propTypes = {};

AuthorityGroupAddPage.defaultProps = {};

export default withRouter(AuthorityGroupAddPage);
