import qs from 'qs';
import client, { tokenHeader } from '../client';

const URL = `menu`;

export const getMenus = ({ direction, page, size, token }) => {
  const queryString = qs.stringify({ direction, page, size });
  return client.get(`${URL}?${queryString}`, tokenHeader(token));
};
export const getMenu = id => client.get(`${URL}/${id}`);
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
