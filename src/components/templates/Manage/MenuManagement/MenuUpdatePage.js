import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import MenuUpdateFormContainer from '../../../modules/UpdateForm/MenuUpdateFormContainer';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import RoundButton from '../../../atoms/Button/RoundButton';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
`;

const Wrapper = styled.div``;

const MenuUpdatePage = ({ history }) => {
  const title = '메뉴';
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
        <MenuUpdateFormContainer title={title} />
      </ContentWrapper>
    </Wrapper>
  );
};

MenuUpdatePage.propTypes = {};

MenuUpdatePage.defaultProps = {};

export default withRouter(MenuUpdatePage);
