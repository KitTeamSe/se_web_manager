import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import Pagination from '../../../modules/Pagination/Pagination';
import Table from '../../../modules/Table/Table';
import TagListenData from '../../../../statics/data/TagListenData';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import AddDialogContainer from '../../../modules/AddDialog/TagListenAddDialogContainer';
import useToggle from '../../../../libs/useToggle';
import RoundButton from '../../../atoms/Button/RoundButton';

const PAGE_DATA_LENGTH = 10;

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

const TagListenByAccountListPage = ({
  history,
  id,
  tagListenList,
  error,
  loading,
  page,
  setPage
}) => {
  const title = `'${
    tagListenList ? tagListenList.data[0].accountIdString : ''
  }'의 수신 태그`;
  const headerTitle = `${title} 목록 조회`;
  const link = `tag_listen/list/${id}`;
  const infoLink = `tag_listen`;
  const [tagListenListData, setTagListenListData] = useState([]);
  const [addOpen, setAddOpen] = useToggle();
  // const handleAddOpen = () => {
  //   setAddOpen(true);
  // };
  useEffect(() => {
    if (tagListenList) {
      setTagListenListData(tagListenList.data);
    }
  }, [tagListenList]);
  const goBack = () => {
    history.push('/m/tag_listen');
  };

  return (
    <Wrapper>
      <ContentHeader title={headerTitle}>
        <RoundButton color="secondary" onClick={goBack}>
          목록으로
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
            tagListenList && (
              <>
                <Table
                  head={TagListenData}
                  rows={tagListenListData.slice(
                    PAGE_DATA_LENGTH * (page - 1),
                    PAGE_DATA_LENGTH * (page - 1) + PAGE_DATA_LENGTH
                  )}
                  type={infoLink}
                  typeId="tagListeningId"
                />
                <Pagination
                  totalPage={Math.ceil(
                    tagListenListData.length / PAGE_DATA_LENGTH
                  )}
                  page={page}
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
          head={TagListenData}
          open={addOpen}
          setOpen={setAddOpen}
          setPage={setPage}
        />
      )}
    </Wrapper>
  );
};

TagListenByAccountListPage.propTypes = {
  tagListenByAccount: PropTypes.shape({
    data: PropTypes.shape({
      content: PropTypes.shape({
        tagListenByAccountId: PropTypes.string.isRequired,
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

TagListenByAccountListPage.defaultProps = {
  tagListenByAccount: null,
  error: null,
  loading: null
};

export default TagListenByAccountListPage;
