import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import BlacklistAddFormContainer from '../../../modules/AddForm/BlacklistAddFormContainer';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import RoundButton from '../../../atoms/Button/RoundButton';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
`;

const Wrapper = styled.div``;

const BlacklistAddPage = ({ history }) => {
  const title = 'IP 차단';
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
        <BlacklistAddFormContainer title={title} />
      </ContentWrapper>
    </Wrapper>
  );
};

BlacklistAddPage.propTypes = {};

BlacklistAddPage.defaultProps = {};

export default withRouter(BlacklistAddPage);
