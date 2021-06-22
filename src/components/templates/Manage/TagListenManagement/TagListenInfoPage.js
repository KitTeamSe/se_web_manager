import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useToggle from '../../../../libs/useToggle';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import TagListenDeleteDialogContainer from '../../../modules/DeleteDialog/TagListenDeleteDialogContainer';
import ManageInfoCard from '../../../modules/ManageInfoCard/ManageInfoCard';
import RoundButton from '../../../atoms/Button/RoundButton';

const ContentWrapper = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
`;

const TagListenInfoData = {
  tagListeningId: '수신 ID',
  tagId: '태그 ID',
  tagName: '태그 이름',
  accountId: '사용자 account ID',
  accountIdString: '사용자 이름'
};

const TagListenInfoPage = ({ tagListen, error, loading }) => {
  const title = '수신 태그';
  const headerTitle = `${title} 정보 조회`;
  const link = 'tag_listen';
  const [deleteOpen, setDeleteOpen] = useToggle();

  return (
    <>
      <ContentHeader title={headerTitle}>
        {error
          ? null
          : !loading &&
            tagListen && (
              <RoundButton
                component={Link}
                to={`../../${link}/list/${tagListen.data.accountId}`}
                color="secondary"
              >
                사용자 수신태그 목록 보기
              </RoundButton>
            )}
      </ContentHeader>
      <ContentWrapper>
        <ManageInfoCard
          data={tagListen}
          error={error}
          loading={loading}
          head={TagListenInfoData}
          setDeleteOpen={setDeleteOpen}
          disabledUpdate
          type="tagListen"
        />
        {!deleteOpen || (
          <TagListenDeleteDialogContainer
            title={title}
            data={tagListen.data}
            open={deleteOpen}
            setOpen={setDeleteOpen}
            type="tagListen"
          />
        )}
      </ContentWrapper>
    </>
  );
};

TagListenInfoPage.propTypes = {};

TagListenInfoPage.defaultProps = {};

export default TagListenInfoPage;
