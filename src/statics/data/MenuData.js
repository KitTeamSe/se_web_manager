export const MenuTypes = {
  BOARD: 'πκ²μν',
  FOLDER: 'πν΄λ',
  REDIRECT: 'πλ§ν¬'
};

export const MenuTypeItems = [
  {
    value: 'FOLDER',
    label: 'πν΄λ'
  },
  {
    value: 'REDIRECT',
    label: 'πλ§ν¬'
  }
];

export const MenuHeadData = {
  menuId: 'ID',
  nameEng: 'μμ΄μ΄λ¦',
  nameKor: 'μ΄λ¦',
  menuOrder: 'μμ',
  menuType: 'νμ',
  parentId: 'μμν΄λID',
  url: 'URL',
  description: 'λΉκ³ '
};

export const MenuUpdateData = [
  {
    key: 'menuId',
    name: 'id',
    type: 'readonly',
    width: '10%',
    placeholder: '0'
  },
  {
    key: 'nameEng',
    name: 'μ΄λ¦(eng)',
    type: 'string',
    width: '10%',
    placeholder: 'freeboard'
  },
  {
    key: 'nameKor',
    name: 'μ΄λ¦(kor)',
    type: 'string',
    width: '10%',
    placeholder: 'μμ κ²μν'
  },
  {
    key: 'menuOrder',
    name: 'μμ',
    type: 'number',
    width: '10%',
    placeholder: '0'
  },
  {
    key: 'menuType',
    name: 'νμ',
    type: 'readonly',
    width: '10%',
    placeholder: 'dropdown'
  },
  {
    key: 'parentId',
    name: 'μμν΄λID',
    type: 'number',
    width: '10%',
    placeholder: '0'
  },
  {
    key: 'url',
    name: 'URL',
    type: 'string',
    width: '10%',
    placeholder: 'url ( / μ μΈν urlλ§ μλ ₯ )'
  },
  {
    key: 'description',
    name: 'λΉκ³ ',
    type: 'multiline',
    width: '30%',
    placeholder: 'λΉκ³ '
  }
];

const MenuData = [
  {
    key: 'menuId',
    name: 'ID',
    type: 'readonly',
    width: '10%',
    placeholder: '0'
  },
  {
    key: 'nameEng',
    name: 'λ©λ΄ μ΄λ¦(eng)',
    type: 'string',
    width: '10%',
    placeholder: 'menu'
  },
  {
    key: 'nameKor',
    name: 'λ©λ΄ μ΄λ¦(kor)',
    type: 'string',
    width: '10%',
    placeholder: 'λ©λ΄'
  },
  {
    key: 'menuOrder',
    name: 'μμ',
    type: 'number',
    width: '10%',
    placeholder: '0'
  },
  {
    key: 'menuType',
    name: 'λ©λ΄ νμ',
    type: 'dropdown',
    items: MenuTypeItems,
    width: '10%',
    placeholder: 'dropdown'
  },
  {
    key: 'parentId',
    name: 'μμν΄λID',
    type: 'number',
    width: '10%',
    placeholder: '0'
  },
  {
    key: 'url',
    name: 'URL',
    type: 'string',
    width: '10%',
    placeholder: 'url ( / μ μΈν urlλ§ μλ ₯ )'
  },
  {
    key: 'description',
    name: 'λΉκ³ ',
    type: 'multiline',
    width: '30%',
    placeholder: 'λΉκ³ '
  }
];

export default MenuData;
