import React from 'react';
import styled from 'styled-components';
import useToggle from '../../../../libs/useToggle';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import AccountMappingDeleteDialogContainer from '../../../modules/DeleteDialog/AccountMappingDeleteDialogContainer';
import ManageInfoCard from '../../../modules/ManageInfoCard/ManageInfoCard';

const ContentWrapper = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
`;

const AccountMappingInfoData = {
  id: 'ID',
  accountId: '사용자 account ID',
  accountIdString: '사용자 이름',
  groupId: '그룹 ID',
  groupName: '그룹 이름'
};

const AccountMappingInfoPage = ({ accountMapping, error, loading }) => {
  const title = '사용자-권한 그룹 매핑';
  const headerTitle = `${title} 정보 조회`;
  const [deleteOpen, setDeleteOpen] = useToggle();

  return (
    <>
      <ContentHeader title={headerTitle} />
      <ContentWrapper>
        <ManageInfoCard
          data={accountMapping}
          error={error}
          loading={loading}
          head={AccountMappingInfoData}
          setDeleteOpen={setDeleteOpen}
          disabledUpdate
          type="accountMapping"
        />
        {!deleteOpen || (
          <AccountMappingDeleteDialogContainer
            title={title}
            data={accountMapping.data}
            open={deleteOpen}
            setOpen={setDeleteOpen}
            type="accountMapping"
          />
        )}
      </ContentWrapper>
    </>
  );
};

AccountMappingInfoPage.propTypes = {};

AccountMappingInfoPage.defaultProps = {};

export default AccountMappingInfoPage;
