import React from 'react';
import styled from 'styled-components';
import useToggle from '../../../../libs/useToggle';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import TagDeleteDialogContainer from '../../../modules/DeleteDialog/TagDeleteDialogContainer';
import ManageInfoCard from '../../../modules/ManageInfoCard/ManageInfoCard';
import UpdateDialogContainer from '../../../modules/UpdateDialog/TagUpdateDialogContainer';
import TagData from '../../../../statics/data/TagData';

const ContentWrapper = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
`;

const TagInfoData = {
  tagId: 'ID',
  text: '이름'
};

const TagInfoPage = ({ tag, error, loading }) => {
  const title = '태그 ';
  const headerTitle = `${title} 정보 조회`;
  const [deleteOpen, setDeleteOpen] = useToggle();
  const [updateOpen, setUpdateOpen] = useToggle();

  return (
    <>
      <ContentHeader title={headerTitle} />
      <ContentWrapper>
        <ManageInfoCard
          data={tag}
          error={error}
          loading={loading}
          head={TagInfoData}
          setDeleteOpen={setDeleteOpen}
          setUpdateOpen={setUpdateOpen}
        />
        {!deleteOpen || (
          <TagDeleteDialogContainer
            title={title}
            data={tag.data}
            open={deleteOpen}
            setOpen={setDeleteOpen}
            type="tag"
          />
        )}
        {!updateOpen || (
          <UpdateDialogContainer
            title={title}
            data={tag.data}
            head={TagData}
            open={updateOpen}
            setOpen={setUpdateOpen}
          />
        )}
      </ContentWrapper>
    </>
  );
};

TagInfoPage.propTypes = {};

TagInfoPage.defaultProps = {};

export default TagInfoPage;
