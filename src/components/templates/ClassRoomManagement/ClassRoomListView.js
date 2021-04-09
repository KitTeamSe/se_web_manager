import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RoundButton from '../../atoms/Button/RoundButton';
import ContentHeader from '../../modules/ContentHeader/ContentHeader';
import PreInfoViewContentMain from '../../modules/ContentMain/PreInfoViewContentMain';

const Wrapper = styled.div``;
const head = [
  {
    key: 'lecture_room_id',
    name: '#',
    width: '10%'
  },
  {
    key: 'building',
    name: '건물',
    width: '30%'
  },
  {
    key: 'room_number',
    name: '호수',
    width: '30%'
  },
  {
    key: 'capacity',
    name: '정원',
    width: '30%'
  }
];

const inActive = [
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

const active = [
  {
    lecture_room_id: '6',
    building: 'D',
    room_number: 332,
    capacity: 50
  }
];

const ClassRoomListView = () => {
  const headItem = head;
  const [inActiveRows, setInActiveRows] = useState([]);
  const [activeRows, setActiveRows] = useState([]);

  useEffect(() => {
    setInActiveRows(inActive);
    setActiveRows(active);
  }, []);

  return (
    <Wrapper>
      <ContentHeader title="강의실 관리">
        <RoundButton>엑셀 업로드</RoundButton>
        <RoundButton color="secondary">엑셀 다운로드</RoundButton>
      </ContentHeader>
      <PreInfoViewContentMain
        head={headItem}
        inActiveRows={inActiveRows}
        activeRows={activeRows}
        setInActiveRows={setInActiveRows}
        setActiveRows={setActiveRows}
      />
    </Wrapper>
  );
};

export default ClassRoomListView;
