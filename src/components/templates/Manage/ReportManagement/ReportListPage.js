import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import Pagination from '../../../modules/Pagination/Pagination';
import Table from '../../../modules/Table/Table';
import ReportData from '../../../../statics/data/ReportData';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';

const ContentWrapper = styled.div`
  display: flex;
  padding: 8px;
`;

const PaperStyled = styled(Paper)`
  width: 100%;
  height: 100%;
  border-radius: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Wrapper = styled.div``;

const ReportListPage = ({ reportList, error, loading }) => {
  const title = '신고';
  const headerTitle = `${title} 목록 조회`;
  const link = 'report';

  return (
    <Wrapper>
      <ContentHeader title={headerTitle} />
      <ContentWrapper>
        <PaperStyled component="div">
          {error ? (
            <div>loading</div>
          ) : (
            !loading &&
            reportList && (
              <>
                <Table
                  head={ReportData}
                  rows={reportList.data.content}
                  type={link}
                  typeId="reportId"
                />
                <Pagination
                  totalPage={reportList.data.totalPages}
                  page={reportList.data.pageable.pageNumber + 1}
                  link={`m/${link}`}
                />
              </>
            )
          )}
        </PaperStyled>
      </ContentWrapper>
    </Wrapper>
  );
};

ReportListPage.propTypes = {
  report: PropTypes.shape({
    data: PropTypes.shape({
      content: PropTypes.shape({
        reportId: PropTypes.string.isRequired,
        building: PropTypes.string.isRequired,
        roomNumber: PropTypes.string.isRequired,
        capacity: PropTypes.string.isRequired,
        note: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }),
  error: PropTypes.string,
  loading: PropTypes.string
};

ReportListPage.defaultProps = {
  report: null,
  error: null,
  loading: null
};

export default ReportListPage;
