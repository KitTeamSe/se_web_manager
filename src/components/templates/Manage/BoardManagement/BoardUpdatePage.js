import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import BoardUpdateFormContainer from '../../../modules/UpdateForm/BoardUpdateFormContainer';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import RoundButton from '../../../atoms/Button/RoundButton';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
`;

const Wrapper = styled.div``;

const BoardUpdatePage = ({ history }) => {
  const title = '게시판';
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
        <BoardUpdateFormContainer title={title} />
      </ContentWrapper>
    </Wrapper>
  );
};

BoardUpdatePage.propTypes = {};

BoardUpdatePage.defaultProps = {};

export default withRouter(BoardUpdatePage);
