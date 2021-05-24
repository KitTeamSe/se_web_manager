import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import AuthorityGroupUpdateFormContainer from '../../../modules/UpdateForm/AuthorityGroupUpdateFormContainer';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import RoundButton from '../../../atoms/Button/RoundButton';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
`;

const Wrapper = styled.div``;

const AuthorityGroupUpdatePage = ({ history }) => {
  const title = '권한 그룹';
  const headerTitle = `${title} 수정`;

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
        <AuthorityGroupUpdateFormContainer title={title} />
      </ContentWrapper>
    </Wrapper>
  );
};

AuthorityGroupUpdatePage.propTypes = {};

AuthorityGroupUpdatePage.defaultProps = {};

export default withRouter(AuthorityGroupUpdatePage);
