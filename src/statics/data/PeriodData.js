const PeriodData = [
  {
    key: 'periodId',
    name: '#',
    type: 'id',
    width: '10%',
    placeholder: '0'
  },
  {
    key: 'periodOrder',
    name: '순서',
    type: 'number',
    width: '10%',
    placeholder: '0'
  },
  {
    key: 'name',
    name: '이름',
    type: 'string',
    width: '10%',
    placeholder: '1, 2, ... A, B'
  },
  {
    key: 'startTime',
    name: '시작시간',
    type: 'time',
    width: '15%',
    placeholder: '00:00'
  },
  {
    key: 'endTime',
    name: '종료시간',
    type: 'time',
    width: '15%',
    placeholder: '00:00'
  },
  {
    key: 'note',
    name: '비고',
    type: 'multiline',
    width: '40%',
    placeholder: '비고'
  }
];

export default PeriodData;
