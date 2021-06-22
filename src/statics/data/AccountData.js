export const InfoOpenTypes = {
  AGREE: '🟢',
  DISAGREE: '❌'
};

export const AccountTypes = {
  STUDENT: '학생',
  PROFESSOR: '교수',
  ASSISTANT: '조교',
  OUTSIDER: '외부인'
};

export const AccountTypeItems = [
  {
    value: 'STUDENT',
    label: '학생'
  },
  {
    value: 'PROFESSOR',
    label: '교수'
  },
  {
    value: 'ASSISTANT',
    label: '조교'
  },
  {
    value: 'OUTSIDER',
    label: '외부인'
  }
];

export const AccountUpdateData = [
  {
    key: 'id',
    name: '사용자 ID',
    type: 'readonly',
    placeholder: '0'
  },
  {
    key: 'studentId',
    name: '학번',
    type: 'string',
    placeholder: '20000000'
  },
  {
    key: 'name',
    name: '이름',
    type: 'string',
    placeholder: 'name'
  },
  {
    key: 'nickname',
    name: '닉네임',
    type: 'string',
    placeholder: 'nickname'
  },
  {
    key: 'password',
    name: '비밀번호',
    type: 'password',
    placeholder: '********'
  },
  {
    key: 'informationOpenAgree',
    name: '정보공유동의',
    type: 'readonly',
    placeholder: 'AGREE'
  },
  {
    key: 'type',
    name: '타입',
    type: 'dropdown',
    items: AccountTypeItems,
    placeholder: 'type'
  }
];

const AccountData = [
  {
    key: 'accountId',
    name: 'account ID',
    type: 'empty',
    placeholder: '0'
  },
  {
    key: 'idString',
    name: '사용자 ID',
    type: '',
    placeholder: '0'
  },
  {
    key: 'name',
    name: '이름',
    type: '',
    placeholder: 'name'
  },
  {
    key: 'nickname',
    name: '닉네임',
    type: '',
    placeholder: '닉네임'
  },
  {
    key: 'email',
    name: '이메일',
    type: '',
    placeholder: 'abc123@efg.com'
  },
  {
    key: 'type',
    name: '타입',
    type: '',
    placeholder: 'STUDENT'
  },
  {
    key: 'phoneNumber',
    name: '휴대폰',
    type: '',
    placeholder: '01099999999'
  },
  {
    key: 'studentId',
    name: '학번',
    type: '',
    placeholder: '20000000'
  },
  {
    key: 'informationOpenAgree',
    name: '정보공유',
    type: '',
    placeholder: 'AGREE'
  }
];

export default AccountData;
