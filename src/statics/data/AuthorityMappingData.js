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
    hint: 'authority',
    placeholder: '0'
  },
  {
    key: 'authorityIdNameKor',
    name: '권한 이름(kor)',
    type: 'empty',
    placeholder: '자유게시판'
  },
  {
    key: 'authorityIdNameEng',
    name: '권한 이름(eng)',
    type: 'empty',
    placeholder: 'freeboard'
  },
  {
    key: 'groupId',
    name: '그룹 ID',
    type: 'number',
    hint: 'aughorityGroup',
    placeholder: '0'
  },
  {
    key: 'groupName',
    name: '그룹 이름',
    type: 'empty',
    placeholder: '그룹'
  }
];

export default AuthorityMappingData;
