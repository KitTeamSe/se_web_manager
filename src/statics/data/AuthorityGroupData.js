const AuthorityGroupData = [
  {
    key: 'authorityGroupId',
    name: 'id',
    type: 'readonly',
    placeholder: '0'
  },
  {
    key: 'name',
    name: '권한 그룹 이름',
    type: 'string',
    placeholder: '권한 그룹'
  },
  {
    key: 'description',
    name: '비고',
    type: 'multiline',
    placeholder: '비고'
  },
  {
    key: 'type',
    name: '타입',
    type: 'empty',
    placeholder: 'NORMAL'
  }
];

export default AuthorityGroupData;
