import { rest } from 'msw';
import baseUrl from '../data/baseUrl';
// menuHandler / userInfoHandler ... 분리?
import {menuListMock, menuByIdMock} from './menuMock';

const handlers = [
  rest.get(`${baseUrl}/api/vl/menu`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json( {data:menuListMock} ));
  }),
  rest.post(`${baseUrl}/api/vl/menu/:id`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json( {data:menuByIdMock(req.params)} ));
  })
];

export default handlers;
