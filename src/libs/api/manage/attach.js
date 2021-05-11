import client from '../client';

const url = `attach`;

export const getAttachs = () => client.get(`${url}`);
export const getAttach = id => client.get(`${url}/${id}`);
export const addAttach = () => client.post(`${url}`);
export const removeAttach = id => client.delete(`${url}/${id}`);
export const getAttachByPostId = id => client.get(`${url}/post/${id}`);
export const getAttachByReplyId = id => client.get(`${url}/reply/${id}`);
