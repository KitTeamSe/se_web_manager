const AuthorityGroupData = [
  {
    key: 'authorityGroupId',
    name: 'id',
    type: 'readonly',
    width: '10%',
    placeholder: '0'
  },
  {
    key: 'name',
    name: '이름',
    type: 'string',
    width: '10%',
    placeholder: 'DEFAULT'
  },
  {
    key: 'description',
    name: '비고',
    type: 'string',
    width: '10%',
    placeholder: '비로그인 사용자'
  },
  {
    key: 'type',
    name: '타입',
    type: 'empty',
    width: '10%',
    placeholder: 'NORMAL'
  }
];

export default AuthorityGroupData;
