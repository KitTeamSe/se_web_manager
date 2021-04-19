import client from '../client';

const url = `board`;

export const getBoards = () => client.get(`${url}`);
export const getBoard = id => client.get(`${url}/${id}`);
export const addBoard = () => client.post(`${url}`);
export const updateBoard = () => client.put(`${url}`);
export const removeBoard = id => client.delete(`${url}/${id}`);
