import React from 'react';
import styled from 'styled-components';
import useToggle from '../../../../libs/useToggle';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import BoardDeleteDialogContainer from '../../../modules/DeleteDialog/BoardDeleteDialogContainer';
import ManageInfoCard from '../../../modules/ManageInfoCard/ManageInfoCard';
import UpdateDialogContainer from '../../../modules/UpdateDialog/BoardUpdateDialogContainer';
import BoardData from '../../../../statics/data/BoardData';

const ContentWrapper = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
`;

const BoardInfoData = {
  boardId: 'ID',
  nameEng: '영어이름',
  nameKor: '이름',
  menuNameEng: '메뉴이름',
  menuNameKor: '메뉴영어이름'
};

const BoardInfoPage = ({ board, error, loading }) => {
  const title = '게시판';
  const headerTitle = `${title} 정보 조회`;
  const [deleteOpen, setDeleteOpen] = useToggle();
  const [updateOpen, setUpdateOpen] = useToggle();

  return (
    <>
      <ContentHeader title={headerTitle} />
      <ContentWrapper>
        <ManageInfoCard
          data={board}
          error={error}
          loading={loading}
          head={BoardInfoData}
          setDeleteOpen={setDeleteOpen}
          setUpdateOpen={setUpdateOpen}
          type="board"
        />
        {!deleteOpen || (
          <BoardDeleteDialogContainer
            title={title}
            data={board.data}
            open={deleteOpen}
            setOpen={setDeleteOpen}
            type="board"
          />
        )}
        {!updateOpen || (
          <UpdateDialogContainer
            title={title}
            data={board.data}
            head={BoardData}
            open={updateOpen}
            setOpen={setUpdateOpen}
          />
        )}
      </ContentWrapper>
    </>
  );
};

BoardInfoPage.propTypes = {};

BoardInfoPage.defaultProps = {};

export default BoardInfoPage;
