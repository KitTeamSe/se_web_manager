import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import Pagination from '../../../modules/Pagination/Pagination';
import Table from '../../../modules/Table/Table';
import AccountMappingData from '../../../../statics/data/AccountMappingData';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import AddDialogContainer from '../../../modules/AddDialog/AccountMappingAddDialogContainer';
import useToggle from '../../../../libs/useToggle';
import RoundButton from '../../../atoms/Button/RoundButton';

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

const AccountMappingListPage = ({ accountMappingList, error, loading }) => {
  const title = '사용자-권한 그룹 매핑';
  const headerTitle = `${title} 목록 조회`;
  const link = 'account_mapping';
  const [addOpen, setAddOpen] = useToggle();
  // const handleAddOpen = () => {
  //   setAddOpen(true);
  // };

  return (
    <Wrapper>
      <ContentHeader title={headerTitle}>
        <RoundButton component={Link} to={`${link}/add`} color="secondary">
          {title} 추가
        </RoundButton>
        {/* <RoundButton color="secondary" onClick={handleAddOpen}>
          {title} 추가
        </RoundButton> */}
      </ContentHeader>
      <ContentWrapper>
        <PaperStyled component="div">
          {error ? (
            <div>loading</div>
          ) : (
            !loading &&
            accountMappingList && (
              <>
                <Table
                  head={AccountMappingData}
                  rows={accountMappingList.data.content}
                  type={link}
                  typeId="id"
                />
                <Pagination
                  totalPage={accountMappingList.data.totalPages}
                  page={accountMappingList.data.pageable.pageNumber + 1}
                  link={`m/${link}`}
                />
              </>
            )
          )}
        </PaperStyled>
      </ContentWrapper>
      {addOpen && (
        <AddDialogContainer
          title={title}
          head={AccountMappingData}
          open={addOpen}
          setOpen={setAddOpen}
        />
      )}
    </Wrapper>
  );
};

AccountMappingListPage.propTypes = {
  accountMapping: PropTypes.shape({
    data: PropTypes.shape({
      content: PropTypes.shape({
        accountMappingId: PropTypes.string.isRequired,
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

AccountMappingListPage.defaultProps = {
  accountMapping: null,
  error: null,
  loading: null
};

export default AccountMappingListPage;
