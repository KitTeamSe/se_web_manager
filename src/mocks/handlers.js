import { rest } from 'msw';
import baseUrl from '../data/baseUrl';
// menuHandler / userInfoHandler ... 분리?
const menuListMock = [
  {
    child: [],
    description: 'Menu1 Description',
    menuId: 0,
    menuOrder: 0,
    nameEng: 'Menu1 Name in Eng',
    nameKor: 'Menu1 Name in Kor'
  },
  {
    child: [],
    description: 'Menu2 Description',
    menuId: 0,
    menuOrder: 0,
    nameEng: 'Menu2 Name in Eng',
    nameKor: 'Menu2 Name in Kor'
  },
  {
    child: [],
    description: 'Menu3 Description',
    menuId: 0,
    menuOrder: 0,
    nameEng: 'Menu3 Name in Eng',
    nameKor: 'Menu3 Name in Kor'
  },
  {
    child: [],
    description: 'Menu4 Description',
    menuId: 0,
    menuOrder: 0,
    nameEng: 'Menu4 Name in Eng',
    nameKor: 'Menu4 Name in Kor'
  }
];
const handlers = [
  rest.get(`${baseUrl}/api/vl/menu`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ data: menuListMock }));
  })
];

export default handlers;
