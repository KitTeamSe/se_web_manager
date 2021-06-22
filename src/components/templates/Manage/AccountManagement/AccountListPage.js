import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import Pagination from '../../../modules/Pagination/Pagination';
import Table from '../../../modules/Table/Table';
import AccountData from '../../../../statics/data/AccountData';
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

const AccountListPage = ({ accountList, error, loading }) => {
  const title = '사용자';
  const headerTitle = `${title} 목록 조회`;
  const link = 'account';

  return (
    <Wrapper>
      <ContentHeader title={headerTitle} />
      <ContentWrapper>
        <PaperStyled component="div">
          {error ? (
            <div>loading</div>
          ) : (
            !loading &&
            accountList && (
              <>
                <Table
                  head={AccountData}
                  rows={accountList.data.content}
                  type={link}
                  typeId="idString"
                />
                <Pagination
                  totalPage={accountList.data.totalPages}
                  page={accountList.data.pageable.pageNumber + 1}
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

AccountListPage.propTypes = {
  account: PropTypes.shape({
    data: PropTypes.shape({
      content: PropTypes.shape({
        accountId: PropTypes.string.isRequired,
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

AccountListPage.defaultProps = {
  account: null,
  error: null,
  loading: null
};

export default AccountListPage;
