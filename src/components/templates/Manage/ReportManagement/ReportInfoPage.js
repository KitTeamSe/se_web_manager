import React from 'react';
import styled from 'styled-components';
import useToggle from '../../../../libs/useToggle';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import ReportDeleteDialogContainer from '../../../modules/DeleteDialog/ReportDeleteDialogContainer';
import ManageInfoCard from '../../../modules/ManageInfoCard/ManageInfoCard';
import UpdateDialogContainer from '../../../modules/UpdateDialog/ReportUpdateDialogContainer';
import { ReportUpdateData } from '../../../../statics/data/ReportData';

const ContentWrapper = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
`;

const ReportInfoData = {
  reportId: '신고 ID',
  reportType: '신고 타입',
  targetId: '신고대상 ID',
  description: '설명',
  reporterId: '신고자 ID',
  status: '상태',
  processorId: '처리자 ID'
};

const ReportInfoPage = ({ report, error, loading }) => {
  const title = '신고';
  const headerTitle = `${title} 정보 조회`;
  const [deleteOpen, setDeleteOpen] = useToggle();
  const [updateOpen, setUpdateOpen] = useToggle();

  return (
    <>
      <ContentHeader title={headerTitle} />
      <ContentWrapper>
        <ManageInfoCard
          data={report}
          error={error}
          loading={loading}
          head={ReportInfoData}
          setDeleteOpen={setDeleteOpen}
          setUpdateOpen={setUpdateOpen}
        />
        {!deleteOpen || (
          <ReportDeleteDialogContainer
            title={title}
            data={report.data}
            open={deleteOpen}
            setOpen={setDeleteOpen}
            type="report"
          />
        )}
        {!updateOpen || (
          <UpdateDialogContainer
            title={title}
            data={report.data}
            head={ReportUpdateData}
            open={updateOpen}
            setOpen={setUpdateOpen}
          />
        )}
      </ContentWrapper>
    </>
  );
};

ReportInfoPage.propTypes = {};

ReportInfoPage.defaultProps = {};

export default ReportInfoPage;
