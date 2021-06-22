import client, { tokenHeader, checkToken } from '../client';

const URL = `menu`;

export const getMenus = ({ token }) =>
  client.get(`${URL}`, tokenHeader(token)).catch(error => {
    checkToken(error);
    throw error;
  });
export const getMenu = ({ id, token }) =>
  client.get(`${URL}/${id}`, tokenHeader(token)).catch(error => {
    checkToken(error);
    throw error;
  });
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
  client
    .post(
      `${URL}`,
      { description, menuOrder, menuType, nameEng, nameKor, parentId, url },
      tokenHeader(token)
    )
    .catch(error => {
      checkToken(error);
      throw error;
    });
export const updateMenu = ({
  menuId,
  description,
  menuOrder,
  menuType,
  nameEng,
  nameKor,
  parentId,
  url,
  token
}) =>
  client
    .put(
      `${URL}`,
      {
        description,
        menuId,
        menuOrder,
        menuType,
        nameEng,
        nameKor,
        parentId,
        url
      },
      tokenHeader(token)
    )
    .catch(error => {
      checkToken(error);
      throw error;
    });
export const removeMenu = ({ id, token }) =>
  client.delete(`${URL}/${id}`, tokenHeader(token)).catch(error => {
    checkToken(error);
    throw error;
  });
