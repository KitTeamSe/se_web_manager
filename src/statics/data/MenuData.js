export const MenuTypeItems = {
  BOARD: '게시판',
  FOLDER: '폴더',
  REDIRECT: '링크'
};

const MenuData = [
  {
    key: 'menuId',
    name: 'id',
    type: 'id',
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
    type: 'dropdown',
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
    placeholder: 'freeboard'
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
