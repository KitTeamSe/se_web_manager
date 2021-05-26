const AuthorityMappingData = [
  {
    key: 'id',
    name: 'ID',
    type: 'readonly',
    placeholder: '0'
  },
  {
    key: 'authorityId',
    name: '권한 ID',
    type: 'number',
    placeholder: '0'
  },
  {
    key: 'authorityIdNameKor',
    name: '권한 이름(kor)',
    type: 'empty',
    placeholder: 'freeboard'
  },
  {
    key: 'authorityIdNameEng',
    name: '권한 이름(eng)',
    type: 'empty',
    placeholder: '자유게시판'
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

export default AuthorityMappingData;
