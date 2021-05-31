import client, { tokenHeader, checkToken } from '../client';

const URL = `board`;

export const getBoards = ({ token }) =>
  client.get(`${URL}`, tokenHeader(token)).catch(error => {
    checkToken(error);
  });
export const getBoard = ({ id, token }) =>
  client.get(`${URL}/${id}`, tokenHeader(token)).catch(error => {
    checkToken(error);
  });
export const addBoard = ({ nameEng, nameKor, token }) =>
  client
    .post(`${URL}`, { nameEng, nameKor }, tokenHeader(token))
    .catch(error => {
      checkToken(error);
    });
export const updateBoard = ({
  boardId,
  description,
  boardOrder,
  boardType,
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
        boardId,
        boardOrder,
        boardType,
        nameEng,
        nameKor,
        parentId,
        url
      },
      tokenHeader(token)
    )
    .catch(error => {
      checkToken(error);
    });
export const removeBoard = ({ id, token }) =>
  client.delete(`${URL}/${id}`, tokenHeader(token)).catch(error => {
    checkToken(error);
  });
