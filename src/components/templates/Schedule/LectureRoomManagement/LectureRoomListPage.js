import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import NoCheckedDialog from '../../../atoms/NoCheckedDialog/NoCheckedDialog';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import PreInfoList from '../../../modules/PreInfoList/PreInfoList';
import AddDialog from '../../Dialog/AddDialog/AddDialog';
import DeleteDialog from '../../Dialog/DeleteDialog/DeleteDialog';
import AddDeleteBox from '../../../modules/AddDeleteBox/AddDeleteBox';
import useToggle from '../../../../libs/useToggle';

const ContentWrapper = styled.div`
  display: flex;
  padding: 8px;
`;

const PaperStyled = styled(Paper)`
  width: 95%;
  height: 520px;
  justify-content: center;
  border-radius: 0;
`;

const Wrapper = styled.div``;

const head = [
  {
    key: 'lectureRoomId',
    name: '#',
    type: 'id',
    width: '10%'
  },
  {
    key: 'building',
    name: '건물',
    type: 'string',
    width: '20%'
  },
  {
    key: 'roomNumber',
    name: '호수',
    type: 'number',
    width: '20%'
  },
  {
    key: 'capacity',
    name: '정원',
    type: 'number',
    width: '20%'
  },
  {
    key: 'note',
    name: '설명',
    type: 'string',
    width: '30%'
  }
];

const LectureRoomListPage = ({ lectureRooms, error, loading }) => {
  const title = '강의실';
  const headerTitle = `사전정보 - ${title}관리`;
  const [addOpen, setAddOpen] = useToggle();
  const [deleteOpen, setDeleteOpen] = useToggle();
  const [select, setSelect] = useState(null);
  const [failOpen, setFailOpen] = useToggle();

  useEffect(() => {
    console.log(head);
  }, []);

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
        <PaperStyled>
          {error ? (
            <div>error</div>
          ) : (
            !loading &&
            lectureRooms && (
              <>
                <PreInfoList
                  title={title}
                  head={head}
                  rows={lectureRooms.data.content}
                  select={select}
                  setSelect={setSelect}
                />
                {failOpen ? <NoCheckedDialog /> : null}
              </>
            )
          )}
        </PaperStyled>
        <AddDeleteBox
          setAddOpen={setAddOpen}
          setDeleteOpen={handleDeleteOpen}
        />

        {!addOpen || (
          <AddDialog
            title={title}
            head={head}
            open={addOpen}
            setOpen={setAddOpen}
            type="lectureRoom"
          />
        )}

        {!deleteOpen || (
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
      }).isRequired
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
