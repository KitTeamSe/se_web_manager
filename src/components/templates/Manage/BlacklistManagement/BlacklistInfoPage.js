import React from 'react';
import styled from 'styled-components';
import useToggle from '../../../../libs/useToggle';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import BlacklistDeleteDialogContainer from '../../../modules/DeleteDialog/BlacklistDeleteDialogContainer';
import ManageInfoCard from '../../../modules/ManageInfoCard/ManageInfoCard';

const ContentWrapper = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
`;

const BlacklistInfoData = {
  id: 'ID',
  ip: '차단 IP',
  reason: '사유'
};

const BlacklistInfoPage = ({ blacklist, error, loading }) => {
  const title = 'IP 차단';
  const headerTitle = `${title} 정보 조회`;
  const [deleteOpen, setDeleteOpen] = useToggle();

  return (
    <>
      <ContentHeader title={headerTitle} />
      <ContentWrapper>
        <ManageInfoCard
          data={blacklist}
          error={error}
          loading={loading}
          head={BlacklistInfoData}
          setDeleteOpen={setDeleteOpen}
          disabledUpdate
        />
        {!deleteOpen || (
          <BlacklistDeleteDialogContainer
            title={title}
            data={blacklist.data}
            open={deleteOpen}
            setOpen={setDeleteOpen}
            type="blacklist"
          />
        )}
      </ContentWrapper>
    </>
  );
};

BlacklistInfoPage.propTypes = {};

BlacklistInfoPage.defaultProps = {};

export default BlacklistInfoPage;
