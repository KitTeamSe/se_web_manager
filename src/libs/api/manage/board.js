import client, { tokenHeader } from '../client';

const URL = `board`;

export const getBoards = ({ token }) =>
  client.get(`${URL}`, tokenHeader(token));
export const getBoard = ({ id, token }) =>
  client.get(`${URL}/${id}`, tokenHeader(token));
export const addBoard = ({ nameEng, nameKor, token }) =>
  client.post(`${URL}`, { nameEng, nameKor }, tokenHeader(token));
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
  client.put(
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
  );
export const removeBoard = ({ id, token }) =>
  client.delete(`${URL}/${id}`, tokenHeader(token));
