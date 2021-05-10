const LectureRoomData = [
  {
    key: 'lectureRoomId',
    name: '#',
    type: 'id',
    width: '10%',
    placeholder: '0'
  },
  {
    key: 'building',
    name: '건물',
    type: 'string',
    width: '20%',
    placeholder: 'ex) D, DB'
  },
  {
    key: 'roomNumber',
    name: '호수',
    type: 'number',
    width: '20%',
    placeholder: '0'
  },
  {
    key: 'capacity',
    name: '정원',
    type: 'number',
    width: '20%',
    placeholder: '0'
  },
  {
    key: 'note',
    name: '비고',
    type: 'multiline',
    width: '30%',
    placeholder: '비고'
  }
];

export default LectureRoomData;
