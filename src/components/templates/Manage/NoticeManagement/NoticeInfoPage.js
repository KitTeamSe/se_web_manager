import React from 'react';
import styled from 'styled-components';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import ManageInfoCard from '../../../modules/ManageInfoCard/ManageInfoCard';

const ContentWrapper = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
`;

const NoticeInfoData = {
  url: 'URL',
  title: '제목',
  message: '메시지'
};

const NoticeInfoPage = ({ notice, error, loading }) => {
  const title = '알림';
  const headerTitle = `${title} 정보 조회`;

  return (
    <>
      <ContentHeader title={headerTitle} />
      <ContentWrapper>
        <ManageInfoCard
          data={notice}
          error={error}
          loading={loading}
          head={NoticeInfoData}
          disabledUpdate
          disabledDelete
          type="notice"
        />
      </ContentWrapper>
    </>
  );
};

NoticeInfoPage.propTypes = {};

NoticeInfoPage.defaultProps = {};

export default NoticeInfoPage;
