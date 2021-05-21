import React from 'react';
import styled from 'styled-components';
import useToggle from '../../../../libs/useToggle';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import AuthorityGroupDeleteDialogContainer from '../../../modules/DeleteDialog/AuthorityGroupDeleteDialogContainer';
import ManageInfoCard from '../../../modules/ManageInfoCard/ManageInfoCard';
import UpdateDialogContainer from '../../../modules/UpdateDialog/AuthorityGroupUpdateDialogContainer';
import AuthorityGroupData from '../../../../statics/data/AuthorityGroupData';

const ContentWrapper = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
`;

const AuthorityGroupInfoData = {
  authorityGroupId: 'ID',
  name: '이름',
  description: '비고',
  type: '타입'
};

const AuthorityGroupInfoPage = ({ authorityGroup, error, loading }) => {
  const title = '권한 그룹';
  const headerTitle = `${title} 정보 조회`;
  const [deleteOpen, setDeleteOpen] = useToggle();
  const [updateOpen, setUpdateOpen] = useToggle();

  return (
    <>
      <ContentHeader title={headerTitle} />
      <ContentWrapper>
        <ManageInfoCard
          data={authorityGroup}
          error={error}
          loading={loading}
          head={AuthorityGroupInfoData}
          setDeleteOpen={setDeleteOpen}
          setUpdateOpen={setUpdateOpen}
        />
        {!deleteOpen || (
          <AuthorityGroupDeleteDialogContainer
            title={title}
            data={authorityGroup.data}
            open={deleteOpen}
            setOpen={setDeleteOpen}
            type="authorityGroup"
          />
        )}
        {!updateOpen || (
          <UpdateDialogContainer
            title={title}
            data={authorityGroup.data}
            head={AuthorityGroupData}
            open={updateOpen}
            setOpen={setUpdateOpen}
          />
        )}
      </ContentWrapper>
    </>
  );
};

AuthorityGroupInfoPage.propTypes = {};

AuthorityGroupInfoPage.defaultProps = {};

export default AuthorityGroupInfoPage;
