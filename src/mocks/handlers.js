import { rest } from 'msw';
import baseUrl from '../libs/baseUrl';
// menuHandler / userInfoHandler ... 분리?
import {menuListMock, menuByIdMock, createMenuMockGenerator, deleteMenuMockGenerator} from './menuMock';

const createMenuMock = createMenuMockGenerator();
const deleteMenuMock = deleteMenuMockGenerator();
const handlers = [
  // 전체 메뉴 조회
  rest.get(`${baseUrl}/api/v1/menu`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json( {data:menuListMock} ));
  }),
  // 메뉴 id로 조회
  rest.get(`${baseUrl}/api/v1/menu/:id`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json( {data:menuByIdMock(req.params)} ));
  }),
  // 메뉴 생성
  rest.post(`${baseUrl}/api/v1/menu`, (req, res, ctx)=>{
    // test
    return res(ctx.status(200), ctx.json( {data:{result: createMenuMock.next().value}}));
  }),
  rest.delete(`${baseUrl}/api/v1/menu/:id`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json( {data:{result: deleteMenuMock.next().value}}));
  }),
];

export default handlers;
