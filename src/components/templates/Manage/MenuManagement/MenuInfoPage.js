import React from 'react';
import styled from 'styled-components';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import ManageInfoCard from '../../../modules/ManageInfoCard/ManageInfoCard';

const ContentWrapper = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
`;

const MenuInfoData = {
  menuId: 'ID',
  nameEng: '영어이름',
  nameKor: '이름',
  menuOrder: '순서',
  menuType: '타입',
  parentId: '상위폴더ID',
  url: 'URL',
  description: '비고'
};

const MenuInfoPage = ({ menu, error, loading }) => {
  const title = '메뉴';
  const headerTitle = `${title} 정보 조회`;
  return (
    <>
      <ContentHeader title={headerTitle} />
      <ContentWrapper>
        <ManageInfoCard
          data={menu}
          error={error}
          loading={loading}
          head={MenuInfoData}
        />
      </ContentWrapper>
    </>
  );
};

MenuInfoPage.propTypes = {};

MenuInfoPage.defaultProps = {};

export default MenuInfoPage;
