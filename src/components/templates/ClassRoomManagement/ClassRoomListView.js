import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ContentHeader from '../../modules/ContentHeader/ContentHeader';
import PreInfoView from '../../modules/ContentMain/PreInfoView';

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

const ClassRoomListView = () => {
  const headItem = head;
  const title = '강의실';
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(active);
  }, []);

  return (
    <Wrapper>
      <ContentHeader title={`${title} 관리`} />
      <PreInfoView title={title} head={headItem} rows={rows} />
    </Wrapper>
  );
};

export default ClassRoomListView;
