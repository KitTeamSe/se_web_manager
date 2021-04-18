import { rest } from 'msw';
import baseUrl from '../libs/baseUrl';
// menuHandler / userInfoHandler ... 분리?
import {menuListMock, menuByIdMock, createMenuMockGenerator, deleteMenuMockGenerator, updateMenuMockGenerator} from './menuMock';

const createMenuMock = createMenuMockGenerator();
const deleteMenuMock = deleteMenuMockGenerator();
const updateMenuMock = updateMenuMockGenerator();
const handlers = [
  // 전체 메뉴 조회
  rest.get(`${baseUrl}/api/v1/menu`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json( menuListMock ));
  }),

  // 메뉴 id로 조회
  rest.get(`${baseUrl}/api/v1/menu/:id`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json( menuByIdMock(req.params) ));
  }),

  // 메뉴 생성
  rest.post(`${baseUrl}/api/v1/menu`, (req, res, ctx)=>{
    // test
    const mockData = createMenuMock.next().value;
    return res(ctx.status(mockData.status), ctx.json( mockData.result));
  }),
  rest.delete(`${baseUrl}/api/v1/menu/:id`, (req, res, ctx) => {
    const mockData = deleteMenuMock.next().value;
    return res(ctx.status(mockData.status), ctx.json( mockData.result));
  }),
  rest.put(`${baseUrl}/api/v1/menu`, (req, res, ctx)=>{
    const mockData = updateMenuMock.next().value;
    return res(ctx.status(mockData.status), ctx.json(mockData.result));
  })
];

export default handlers;
