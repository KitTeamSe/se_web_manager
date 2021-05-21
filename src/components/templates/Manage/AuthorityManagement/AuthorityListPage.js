import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import Pagination from '../../../modules/Pagination/Pagination';
import Table from '../../../modules/Table/Table';
import AuthorityData from '../../../../statics/data/AuthorityData';
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

const AuthorityListPage = ({ authorityList, error, loading }) => {
  const title = '권한';
  const headerTitle = `${title} 목록 조회`;

  console.log(AuthorityData);

  return (
    <Wrapper>
      <ContentHeader title={headerTitle} />
      <ContentWrapper>
        <PaperStyled component="div">
          {error ? (
            <div>loading</div>
          ) : (
            !loading &&
            authorityList && (
              <>
                <Table
                  head={AuthorityData}
                  rows={authorityList.data.content}
                  type="authority"
                  typeId="authorityId"
                />
                <Pagination
                  totalPage={authorityList.data.totalPages}
                  page={authorityList.data.pageable.pageNumber + 1}
                  link="m/authority"
                />
              </>
            )
          )}
        </PaperStyled>
      </ContentWrapper>
    </Wrapper>
  );
};

AuthorityListPage.propTypes = {
  authority: PropTypes.shape({
    data: PropTypes.shape({
      content: PropTypes.shape({
        authorityId: PropTypes.string.isRequired,
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

AuthorityListPage.defaultProps = {
  authority: null,
  error: null,
  loading: null
};

export default AuthorityListPage;
