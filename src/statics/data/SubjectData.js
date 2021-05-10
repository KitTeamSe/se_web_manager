export const SubjectTypeItems = [
  {
    value: 'MAJOR',
    label: '전공'
  },
  {
    value: 'MSC',
    label: 'MSC'
  },
  {
    value: 'LIBERAL_ARTS',
    label: '교양'
  },
  {
    value: 'TEACHER_EDUCATION',
    label: '교사교육'
  },
  {
    value: 'MILITARY_SCIENCE',
    label: '군사교육'
  },
  {
    value: 'COMMON',
    label: '공통'
  },
  {
    value: 'ETC',
    label: '그 외'
  }
];

const SubjectData = [
  {
    key: 'subjectId',
    name: '#',
    type: 'id',
    width: '3%',
    placeholder: '0'
  },
  {
    key: 'curriculum',
    name: '교육과정',
    type: 'string',
    width: '33%',
    placeholder: 'ex) 컴퓨터소프트웨어공학'
  },
  {
    key: 'type',
    name: '교과구분',
    type: 'dropdown',
    items: SubjectTypeItems,
    width: '7%',
    placeholder: 'dropdown'
  },
  {
    key: 'code',
    name: '교과목코드',
    type: 'string',
    width: '14%',
    placeholder: 'ex)CS0000'
  },
  {
    key: 'name',
    name: '교과목명',
    type: 'string',
    width: '19%',
    placeholder: 'ex) 교과목'
  },
  {
    key: 'grade',
    name: '학년',
    type: 'number',
    width: '7%',
    placeholder: '0'
  },
  {
    key: 'semester',
    name: '학기',
    type: 'string',
    width: '7%',
    placeholder: '학기'
  },
  {
    key: 'credit',
    name: '학점',
    type: 'number',
    width: '7%',
    placeholder: '0'
  }
];

export default SubjectData;
