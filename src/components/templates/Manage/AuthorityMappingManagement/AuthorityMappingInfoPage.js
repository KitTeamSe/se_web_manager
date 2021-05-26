import React from 'react';
import styled from 'styled-components';
import useToggle from '../../../../libs/useToggle';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import AuthorityMappingDeleteDialogContainer from '../../../modules/DeleteDialog/AuthorityMappingDeleteDialogContainer';
import ManageInfoCard from '../../../modules/ManageInfoCard/ManageInfoCard';

const ContentWrapper = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
`;

const AuthorityMappingInfoData = {
  id: 'ID',
  authorityId: '권한 ID',
  authorityIdNameKor: '권한 이름(kor)',
  authorityIdNameEng: '권한 이름(eng)',
  groupId: '그룹 ID',
  groupName: '그룹 이름'
};

const AuthorityMappingInfoPage = ({ authorityMapping, error, loading }) => {
  const title = '권한-권한 그룹 매핑';
  const headerTitle = `${title} 정보 조회`;
  const [deleteOpen, setDeleteOpen] = useToggle();

  return (
    <>
      <ContentHeader title={headerTitle} />
      <ContentWrapper>
        <ManageInfoCard
          data={authorityMapping}
          error={error}
          loading={loading}
          head={AuthorityMappingInfoData}
          setDeleteOpen={setDeleteOpen}
          disabledUpdate
        />
        {!deleteOpen || (
          <AuthorityMappingDeleteDialogContainer
            title={title}
            data={authorityMapping.data}
            open={deleteOpen}
            setOpen={setDeleteOpen}
            type="authorityMapping"
          />
        )}
      </ContentWrapper>
    </>
  );
};

AuthorityMappingInfoPage.propTypes = {};

AuthorityMappingInfoPage.defaultProps = {};

export default AuthorityMappingInfoPage;
