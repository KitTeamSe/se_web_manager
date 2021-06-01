import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import Pagination from '../../../modules/Pagination/Pagination';
import Table from '../../../modules/Table/Table';
import NoticeData from '../../../../statics/data/NoticeData';
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

const NoticeListPage = ({ noticeList, error, loading }) => {
  const title = '알림';
  const headerTitle = `${title} 목록 조회`;
  const link = 'notice';

  // const handleAddOpen = () => {
  //   setAddOpen(true);
  // };

  return (
    <Wrapper>
      <ContentHeader title={headerTitle} />
      <ContentWrapper>
        <PaperStyled component="div">
          {error ? (
            <div>loading</div>
          ) : (
            !loading &&
            noticeList && (
              <>
                <Table
                  head={NoticeData}
                  rows={noticeList.data.content}
                  type={link}
                  pageNumber={noticeList.data.pageable.pageNumber}
                  pageSize={noticeList.data.pageable.pageSize}
                />
                <Pagination
                  totalPage={noticeList.data.totalPages}
                  page={noticeList.data.pageable.pageNumber + 1}
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

NoticeListPage.propTypes = {
  notice: PropTypes.shape({
    data: PropTypes.shape({
      content: PropTypes.shape({
        noticeId: PropTypes.string.isRequired,
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

NoticeListPage.defaultProps = {
  notice: null,
  error: null,
  loading: null
};

export default NoticeListPage;
