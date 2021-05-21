import React from 'react';
import styled from 'styled-components';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import ManageInfoCard from '../../../modules/ManageInfoCard/ManageInfoCard';

const ContentWrapper = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
`;

const AuthorityInfoData = {
  authorityId: 'ID',
  nameEng: '영어이름',
  nameKor: '이름'
};

const AuthorityInfoPage = ({ authority, error, loading }) => {
  const title = '권한';
  const headerTitle = `${title} 정보 조회`;

  return (
    <>
      <ContentHeader title={headerTitle} />
      <ContentWrapper>
        <ManageInfoCard
          data={authority}
          error={error}
          loading={loading}
          head={AuthorityInfoData}
          disabledUpdate
          disabledDelete
        />
      </ContentWrapper>
    </>
  );
};

AuthorityInfoPage.propTypes = {};

AuthorityInfoPage.defaultProps = {};

export default AuthorityInfoPage;
