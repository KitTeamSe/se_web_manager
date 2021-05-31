import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import TagListenAddFormContainer from '../../../modules/AddForm/TagListenAddFormContainer';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import RoundButton from '../../../atoms/Button/RoundButton';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
`;

const Wrapper = styled.div``;

const TagListenAddPage = ({ history }) => {
  const title = '내 수신 태그';
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
        <TagListenAddFormContainer title={title} />
      </ContentWrapper>
    </Wrapper>
  );
};

TagListenAddPage.propTypes = {};

TagListenAddPage.defaultProps = {};

export default withRouter(TagListenAddPage);
