const BoardData = [
  {
    key: 'boardId',
    name: 'id',
    type: 'readonly',
    width: '10%',
    placeholder: '0'
  },
  {
    key: 'nameEng',
    name: '게시판 이름(eng)',
    type: 'string',
    width: '10%',
    placeholder: 'board'
  },
  {
    key: 'nameKor',
    name: '게시판 이름(kor)',
    type: 'string',
    width: '10%',
    placeholder: '게시판'
  },
  {
    key: 'menuNameEng',
    name: '메뉴이름(eng)',
    type: 'empty',
    width: '10%',
    placeholder: 'freeboard'
  },
  {
    key: 'menuNameKor',
    name: '메뉴이름(kor)',
    type: 'empty',
    width: '10%',
    placeholder: '자유게시판'
  }
];

export default BoardData;
