export const InfoOpenTypes = {
  AGREE: 'π’',
  DISAGREE: 'β'
};

export const AccountTypes = {
  STUDENT: 'νμ',
  PROFESSOR: 'κ΅μ',
  ASSISTANT: 'μ‘°κ΅',
  OUTSIDER: 'μΈλΆμΈ'
};

export const AccountTypeItems = [
  {
    value: 'STUDENT',
    label: 'νμ'
  },
  {
    value: 'PROFESSOR',
    label: 'κ΅μ'
  },
  {
    value: 'ASSISTANT',
    label: 'μ‘°κ΅'
  },
  {
    value: 'OUTSIDER',
    label: 'μΈλΆμΈ'
  }
];

export const AccountUpdateData = [
  {
    key: 'id',
    name: 'μ¬μ©μ ID',
    type: 'readonly',
    placeholder: '0'
  },
  {
    key: 'studentId',
    name: 'νλ²',
    type: 'string',
    placeholder: '20000000'
  },
  {
    key: 'name',
    name: 'μ΄λ¦',
    type: 'string',
    placeholder: 'name'
  },
  {
    key: 'nickname',
    name: 'λλ€μ',
    type: 'string',
    placeholder: 'nickname'
  },
  {
    key: 'password',
    name: 'λΉλ°λ²νΈ',
    type: 'password',
    placeholder: '********'
  },
  {
    key: 'informationOpenAgree',
    name: 'μ λ³΄κ³΅μ λμ',
    type: 'readonly',
    placeholder: 'AGREE'
  },
  {
    key: 'type',
    name: 'νμ',
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
    name: 'μ¬μ©μ ID',
    type: '',
    placeholder: '0'
  },
  {
    key: 'name',
    name: 'μ΄λ¦',
    type: '',
    placeholder: 'name'
  },
  {
    key: 'nickname',
    name: 'λλ€μ',
    type: '',
    placeholder: 'λλ€μ'
  },
  {
    key: 'email',
    name: 'μ΄λ©μΌ',
    type: '',
    placeholder: 'abc123@efg.com'
  },
  {
    key: 'type',
    name: 'νμ',
    type: '',
    placeholder: 'STUDENT'
  },
  {
    key: 'phoneNumber',
    name: 'ν΄λν°',
    type: '',
    placeholder: '01099999999'
  },
  {
    key: 'studentId',
    name: 'νλ²',
    type: '',
    placeholder: '20000000'
  },
  {
    key: 'informationOpenAgree',
    name: 'μ λ³΄κ³΅μ ',
    type: '',
    placeholder: 'AGREE'
  }
];

export default AccountData;
