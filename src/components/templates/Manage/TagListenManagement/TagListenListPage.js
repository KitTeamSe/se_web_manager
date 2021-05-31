import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import Pagination from '../../../modules/Pagination/Pagination';
import Table from '../../../modules/Table/Table';
import TagListenData from '../../../../statics/data/TagListenData';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import AddDialogContainer from '../../../modules/AddDialog/TagListenAddDialogContainer';
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

const TagListenListPage = ({ tagListenList, error, loading }) => {
  const title = '수신 태그';
  const headerTitle = `${title} 목록 조회`;
  const link = 'tag_listen';
  const [addOpen, setAddOpen] = useToggle();
  // const handleAddOpen = () => {
  //   setAddOpen(true);
  // };
  console.log(link);

  return (
    <Wrapper>
      <ContentHeader title={headerTitle}>
        <RoundButton component={Link} to={`${link}/add`} color="secondary">
          내 {title} 추가
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
                  rows={tagListenList.data.content}
                  type={link}
                  typeId="tagListeningId"
                />
                <Pagination
                  totalPage={tagListenList.data.totalPages}
                  page={tagListenList.data.pageable.pageNumber + 1}
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
        />
      )}
    </Wrapper>
  );
};

TagListenListPage.propTypes = {
  tagListen: PropTypes.shape({
    data: PropTypes.shape({
      content: PropTypes.shape({
        tagListenId: PropTypes.string.isRequired,
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

TagListenListPage.defaultProps = {
  tagListen: null,
  error: null,
  loading: null
};

export default TagListenListPage;
