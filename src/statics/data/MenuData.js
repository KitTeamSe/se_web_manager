export const MenuTypes = {
  BOARD: '📃게시판',
  FOLDER: '📁폴더',
  REDIRECT: '🔗링크'
};

export const MenuTypeItems = [
  {
    value: 'FOLDER',
    label: '📁폴더'
  },
  {
    value: 'REDIRECT',
    label: '🔗링크'
  }
];

export const MenuHeadData = {
  menuId: 'ID',
  nameEng: '영어이름',
  nameKor: '이름',
  menuOrder: '순서',
  menuType: '타입',
  parentId: '상위폴더ID',
  url: 'URL',
  description: '비고'
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
    name: '이름(eng)',
    type: 'string',
    width: '10%',
    placeholder: 'freeboard'
  },
  {
    key: 'nameKor',
    name: '이름(kor)',
    type: 'string',
    width: '10%',
    placeholder: '자유게시판'
  },
  {
    key: 'menuOrder',
    name: '순서',
    type: 'number',
    width: '10%',
    placeholder: '0'
  },
  {
    key: 'menuType',
    name: '타입',
    type: 'readonly',
    width: '10%',
    placeholder: 'dropdown'
  },
  {
    key: 'parentId',
    name: '상위폴더ID',
    type: 'number',
    width: '10%',
    placeholder: '0'
  },
  {
    key: 'url',
    name: 'URL',
    type: 'string',
    width: '10%',
    placeholder: 'url ( / 제외한 url만 입력 )'
  },
  {
    key: 'description',
    name: '비고',
    type: 'multiline',
    width: '30%',
    placeholder: '비고'
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
    name: '메뉴 이름(eng)',
    type: 'string',
    width: '10%',
    placeholder: 'menu'
  },
  {
    key: 'nameKor',
    name: '메뉴 이름(kor)',
    type: 'string',
    width: '10%',
    placeholder: '메뉴'
  },
  {
    key: 'menuOrder',
    name: '순서',
    type: 'number',
    width: '10%',
    placeholder: '0'
  },
  {
    key: 'menuType',
    name: '메뉴 타입',
    type: 'dropdown',
    items: MenuTypeItems,
    width: '10%',
    placeholder: 'dropdown'
  },
  {
    key: 'parentId',
    name: '상위폴더ID',
    type: 'number',
    width: '10%',
    placeholder: '0'
  },
  {
    key: 'url',
    name: 'URL',
    type: 'string',
    width: '10%',
    placeholder: 'url ( / 제외한 url만 입력 )'
  },
  {
    key: 'description',
    name: '비고',
    type: 'multiline',
    width: '30%',
    placeholder: '비고'
  }
];

export default MenuData;
