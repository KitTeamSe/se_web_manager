import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import PreInfoList from '../../../modules/PreInfoList/PreInfoList';
import AddDialogContainer from '../../Dialog/AddDialog/LectureRoomAddDialogContainer';
import DeleteDialog from '../../Dialog/DeleteDialog/LectureRoomDeleteDialogContainer';
import AddDeleteBox from '../../../modules/AddDeleteBox/AddDeleteBox';
import useToggle from '../../../../libs/useToggle';
import LectureRoomData from '../../../../statics/data/LectureRoomData';
import Pagination from '../../../modules/Pagination/Pagination';

const ContentWrapper = styled.div`
  display: flex;
  padding: 8px;
`;

const PaperStyled = styled(Paper)`
  width: 95%;
  height: 100%;
  border-radius: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Wrapper = styled.div``;

const LectureRoomListPage = ({
  lectureRooms,
  error,
  loading,
  select,
  handleSelect
}) => {
  const title = '강의실';
  const headerTitle = `사전정보 - ${title}관리`;
  const [addOpen, setAddOpen] = useToggle();
  const [deleteOpen, setDeleteOpen] = useToggle();
  const [failOpen, setFailOpen] = useToggle();

  useEffect(() => {
    if (failOpen) setFailOpen();
  }, [addOpen, deleteOpen, select]);

  const handleDeleteOpen = () => {
    if (!select && !failOpen) setFailOpen();
    if (select !== null) setDeleteOpen();
  };

  return (
    <Wrapper>
      <ContentHeader title={headerTitle} />
      <ContentWrapper>
        <PaperStyled component="div">
          {error ? (
            <div>loading</div>
          ) : (
            !loading &&
            lectureRooms && (
              <>
                <PreInfoList
                  page={lectureRooms.data.pageable.pageNumber}
                  title={title}
                  head={LectureRoomData}
                  rows={lectureRooms.data.content}
                  select={select}
                  handleSelect={handleSelect}
                />
                <Pagination
                  totalPage={lectureRooms.data.totalPages}
                  page={lectureRooms.data.pageable.pageNumber + 1}
                  link="m/lecture_room"
                />
                {failOpen || null}
              </>
            )
          )}
        </PaperStyled>
        <AddDeleteBox
          setAddOpen={setAddOpen}
          setDeleteOpen={handleDeleteOpen}
          select={select}
        />

        {addOpen && (
          <AddDialogContainer
            title={title}
            head={LectureRoomData}
            open={addOpen}
            setOpen={setAddOpen}
          />
        )}

        {deleteOpen && (
          <DeleteDialog
            title={title}
            data={lectureRooms.data.content[select]}
            open={deleteOpen}
            setOpen={setDeleteOpen}
            type="lectureRoom"
          />
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

LectureRoomListPage.propTypes = {
  lectureRooms: PropTypes.shape({
    data: PropTypes.shape({
      content: PropTypes.shape({
        lectureRoomId: PropTypes.string.isRequired,
        building: PropTypes.string.isRequired,
        roomNumber: PropTypes.string.isRequired,
        capacity: PropTypes.string.isRequired,
        note: PropTypes.string.isRequired
      }).isRequired,
      totalPages: PropTypes.number,
      pageable: PropTypes.shape({
        pageNumber: PropTypes.number
      })
    }).isRequired
  }),
  error: PropTypes.string,
  loading: PropTypes.string,
  select: PropTypes.string,
  handleSelect: PropTypes.func.isRequired
};

LectureRoomListPage.defaultProps = {
  lectureRooms: null,
  error: null,
  loading: null,
  select: null
};

export default LectureRoomListPage;
