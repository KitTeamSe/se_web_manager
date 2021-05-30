import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import ReportUpdateFormContainer from '../../../modules/UpdateForm/ReportUpdateFormContainer';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import RoundButton from '../../../atoms/Button/RoundButton';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
`;

const Wrapper = styled.div``;

const ReportUpdatePage = ({ history }) => {
  const title = '신고';
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
        <ReportUpdateFormContainer title={title} />
      </ContentWrapper>
    </Wrapper>
  );
};

ReportUpdatePage.propTypes = {};

ReportUpdatePage.defaultProps = {};

export default withRouter(ReportUpdatePage);
