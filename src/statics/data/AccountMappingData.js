const AccountMappingData = [
  {
    key: 'id',
    name: 'ID',
    type: 'readonly',
    placeholder: '0'
  },
  {
    key: 'accountId',
    name: '사용자 ID',
    type: 'number',
    placeholder: '0'
  },
  {
    key: 'accountIdString',
    name: '사용자 이름',
    type: 'empty',
    placeholder: 'freeboard'
  },
  {
    key: 'groupId',
    name: '그룹 ID',
    type: 'number',
    placeholder: '자유게시판'
  },
  {
    key: 'groupName',
    name: '그룹 이름',
    type: 'empty',
    placeholder: 'ADMIN'
  }
];

export default AccountMappingData;
