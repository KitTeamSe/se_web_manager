export const TeacherTypes = {
  FULL_PROFESSOR: '전임교수',
  FIXED_TERM_PROFESSOR: '기간제교수',
  ASSISTANT: '조교',
  STUDENT: '학생',
  ETC: '그 외'
};

export const TeacherTypeItems = [
  {
    value: 'FULL_PROFESSOR',
    label: '전임교수'
  },
  {
    value: 'FIXED_TERM_PROFESSOR',
    label: '기간제교수'
  },
  {
    value: 'ASSISTANT',
    label: '조교'
  },
  {
    value: 'STUDENT',
    label: '학생'
  },
  {
    value: 'ETC',
    label: '그 외'
  }
];

const TeacherData = [
  {
    key: 'teacherId',
    name: '#',
    type: 'id',
    width: '10%',
    placeholder: '0'
  },
  {
    key: 'name',
    name: '이름',
    type: 'string',
    width: '10%',
    placeholder: 'ex) 이름'
  },
  {
    key: 'type',
    name: '교원구분',
    type: 'dropdown',
    items: TeacherTypeItems,
    width: '10%',
    placeholder: 'dropdown'
  },
  {
    key: 'department',
    name: '소속',
    type: 'string',
    width: '20%',
    placeholder: 'ex) 컴퓨터소프트웨어공학과'
  },
  {
    key: 'note',
    name: '비고',
    type: 'multiline',
    width: '50%',
    placeholder: '비고'
  }
];

export default TeacherData;
