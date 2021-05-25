import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import Pagination from '../../../modules/Pagination/Pagination';
import Table from '../../../modules/Table/Table';
import TagData from '../../../../statics/data/TagData';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import AddDialogContainer from '../../../modules/AddDialog/TagAddDialogContainer';
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

const TagListPage = ({ tagList, error, loading }) => {
  const title = '태그 ';
  const headerTitle = `${title} 목록 조회`;
  const link = 'tag';
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
            tagList && (
              <>
                <Table
                  head={TagData}
                  rows={tagList.data.content}
                  type={link}
                  typeId="tagId"
                />
                <Pagination
                  totalPage={tagList.data.totalPages}
                  page={tagList.data.pageable.pageNumber + 1}
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
          head={TagData}
          open={addOpen}
          setOpen={setAddOpen}
        />
      )}
    </Wrapper>
  );
};

TagListPage.propTypes = {
  tag: PropTypes.shape({
    data: PropTypes.shape({
      content: PropTypes.shape({
        tagId: PropTypes.string.isRequired,
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

TagListPage.defaultProps = {
  tag: null,
  error: null,
  loading: null
};

export default TagListPage;
