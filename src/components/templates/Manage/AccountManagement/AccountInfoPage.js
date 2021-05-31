import React from 'react';
import styled from 'styled-components';
import useToggle from '../../../../libs/useToggle';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import AccountDeleteDialogContainer from '../../../modules/DeleteDialog/AccountDeleteDialogContainer';
import ManageInfoCard from '../../../modules/ManageInfoCard/ManageInfoCard';
import UpdateDialogContainer from '../../../modules/UpdateDialog/AccountUpdateDialogContainer';
import { AccountUpdateData } from '../../../../statics/data/AccountData';

const ContentWrapper = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
`;

const AccountInfoData = {
  idString: 'ID',
  name: '이름',
  nickname: '닉네임',
  email: '이메일',
  type: '타입'
};

const AccountInfoPage = ({ account, error, loading }) => {
  const title = '사용자';
  const headerTitle = `${title} 정보 조회`;
  const [deleteOpen, setDeleteOpen] = useToggle();
  const [updateOpen, setUpdateOpen] = useToggle();

  return (
    <>
      <ContentHeader title={headerTitle} />
      <ContentWrapper>
        <ManageInfoCard
          data={account}
          error={error}
          loading={loading}
          head={AccountInfoData}
          setDeleteOpen={setDeleteOpen}
          setUpdateOpen={setUpdateOpen}
          type="account"
        />
        {!deleteOpen || (
          <AccountDeleteDialogContainer
            title={title}
            data={account.data}
            open={deleteOpen}
            setOpen={setDeleteOpen}
            type="account"
          />
        )}
        {!updateOpen || (
          <UpdateDialogContainer
            title={title}
            data={account.data}
            head={AccountUpdateData}
            open={updateOpen}
            setOpen={setUpdateOpen}
          />
        )}
      </ContentWrapper>
    </>
  );
};

AccountInfoPage.propTypes = {};

AccountInfoPage.defaultProps = {};

export default AccountInfoPage;
