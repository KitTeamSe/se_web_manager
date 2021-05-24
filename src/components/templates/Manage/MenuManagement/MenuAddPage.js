import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import MenuAddFormContainer from '../../../modules/AddForm/MenuAddFormContainer';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import RoundButton from '../../../atoms/Button/RoundButton';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
`;

const Wrapper = styled.div``;

const MenuAddPage = ({ history }) => {
  const title = '메뉴';
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
        <MenuAddFormContainer title={title} />
      </ContentWrapper>
    </Wrapper>
  );
};

MenuAddPage.propTypes = {};

MenuAddPage.defaultProps = {};

export default withRouter(MenuAddPage);
