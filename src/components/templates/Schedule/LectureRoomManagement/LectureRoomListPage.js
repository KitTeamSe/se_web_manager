import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import NoCheckedDialog from '../../../atoms/NoCheckedDialog/NoCheckedDialog';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import PreInfoList from '../../../modules/PreInfoList/PreInfoList';
import AddDialog from '../../../modules/AddDialog/AddDialog';
import DeleteDialog from '../../../modules/DeleteDialog/DeleteDialog';
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
    key: 'lecture_room_id',
    name: '#',
    type: 'id',
    width: '10%'
  },
  {
    key: 'building',
    name: '건물',
    type: 'string',
    width: '30%'
  },
  {
    key: 'room_number',
    name: '호수',
    type: 'number',
    width: '30%'
  },
  {
    key: 'capacity',
    name: '정원',
    type: 'number',
    width: '30%'
  }
];

const active = [
  {
    lecture_room_id: '1',
    building: 'D',
    room_number: 330,
    capacity: 50
  },
  {
    lecture_room_id: '2',
    building: 'D',
    room_number: 331,
    capacity: 50
  },
  {
    lecture_room_id: '3',
    building: 'DB',
    room_number: 111,
    capacity: 80
  },
  {
    lecture_room_id: '4',
    building: 'G',
    room_number: 111,
    capacity: 30
  },
  {
    lecture_room_id: '5',
    building: 'D',
    room_number: 438,
    capacity: 30
  }
];

const LectureRoomListView = () => {
  const headItem = head;
  const title = '강의실';
  const headerTitle = `사전정보 - ${title}관리`;
  const [rows, setRows] = useState([]);
  const [addOpen, setAddOpen] = useToggle();
  const [deleteOpen, setDeleteOpen] = useToggle();
  const [select, setSelect] = useState(null);
  const [failOpen, setFailOpen] = useToggle();

  useEffect(() => {
    setRows(active);
  }, []);

  useEffect(() => {
    if (failOpen) setFailOpen();
  }, [addOpen, deleteOpen, select]);

  useEffect(() => {});

  const handleDeleteOpen = () => {
    if (!select && !failOpen) setFailOpen();
    if (select !== null) setDeleteOpen();
  };

  return (
    <Wrapper>
      <ContentHeader title={headerTitle} />
      <ContentWrapper>
        <PaperStyled>
          <PreInfoList
            title={title}
            head={headItem}
            rows={rows}
            select={select}
            setSelect={setSelect}
          />
          {failOpen ? <NoCheckedDialog /> : null}
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
            head={rows[select]}
            open={deleteOpen}
            setOpen={setDeleteOpen}
            type="lectureRoom"
          />
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

export default LectureRoomListView;
