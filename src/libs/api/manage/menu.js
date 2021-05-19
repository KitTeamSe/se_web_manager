import client, { tokenHeader } from '../client';

const URL = `menu`;

export const getMenus = ({ token }) => client.get(`${URL}`, tokenHeader(token));
export const getMenu = ({ id, token }) =>
  client.get(`${URL}/${id}`, tokenHeader(token));
export const addMenu = ({
  description,
  menuOrder,
  menuType,
  nameEng,
  nameKor,
  parentId,
  url,
  token
}) =>
  client.post(
    `${URL}`,
    { description, menuOrder, menuType, nameEng, nameKor, parentId, url },
    tokenHeader(token)
  );
export const updateMenu = () => client.put(`${URL}`);
export const removeMenu = ({ id, token }) =>
  client.delete(`${URL}/${id}`, tokenHeader(token));
