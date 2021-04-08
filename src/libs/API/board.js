import axios from 'axios';

export const createBoard = () => axios.post(`/api/board`);

export const readBoard = id => axios.get(`/api/board/${id}`);

export const readBoardList = () => axios.get(`/api/board`);

export const updateBoard = id => axios.post(`/api/board/${id}`);

export const deleteBoard = id => axios.post(`/api/board/${id}`);
