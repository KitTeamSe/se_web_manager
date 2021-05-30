const AuthorityGroupData = [
  {
    key: 'authorityGroupId',
    name: 'id',
    type: 'readonly',
    placeholder: '0'
  },
  {
    key: 'name',
    name: '이름',
    type: 'string',
    placeholder: 'DEFAULT'
  },
  {
    key: 'description',
    name: '비고',
    type: 'multiline',
    placeholder: '비로그인 사용자'
  },
  {
    key: 'type',
    name: '타입',
    type: 'empty',
    placeholder: 'NORMAL'
  }
];

export default AuthorityGroupData;
