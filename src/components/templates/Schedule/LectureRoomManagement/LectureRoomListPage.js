import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';
// import NoCheckedDialog from '../../../atoms/NoCheckedDialog/NoCheckedDialog';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import PreInfoList from '../../../modules/PreInfoList/PreInfoList';
import AddDialog from '../../Dialog/AddDialog/AddDialog';
import DeleteDialog from '../../Dialog/DeleteDialog/DeleteDialog';
import AddDeleteBox from '../../../modules/AddDeleteBox/AddDeleteBox';
import useToggle from '../../../../libs/useToggle';
import LectureRoomData from '../../../../statics/data/LectureRoomData';
import Pagination from '../../../atoms/Pagination/Pagination';

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

const LectureRoomListPage = ({ lectureRooms, error, loading }) => {
  const title = '강의실';
  const headerTitle = `사전정보 - ${title}관리`;
  const [addOpen, setAddOpen] = useToggle();
  const [deleteOpen, setDeleteOpen] = useToggle();
  const [select, setSelect] = useState(null);
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
            <div>error</div>
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
                  setSelect={setSelect}
                />
                <Pagination
                  totalPage={lectureRooms.data.totalPages}
                  page={lectureRooms.data.pageable.pageNumber + 1}
                  link="m/lecture-room"
                />
                {failOpen || null}
              </>
            )
          )}
        </PaperStyled>
        <AddDeleteBox
          setAddOpen={setAddOpen}
          setDeleteOpen={handleDeleteOpen}
        />

        {addOpen && (
          <AddDialog
            title={title}
            head={LectureRoomData}
            open={addOpen}
            setOpen={setAddOpen}
            type="lectureRoom"
          />
        )}

        {deleteOpen && (
          <DeleteDialog
            title={title}
            head={lectureRooms.data.content[select]}
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
  loading: PropTypes.string
};

LectureRoomListPage.defaultProps = {
  lectureRooms: null,
  error: null,
  loading: null
};

export default LectureRoomListPage;
