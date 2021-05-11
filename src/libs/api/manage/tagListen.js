import client from '../client';

const url = `tag-listen`;

export const getTagListens = () => client.get(`${url}`);
export const getTagListen = id => client.get(`${url}/${id}`);
export const addTagListen = () => client.post(`${url}`);
export const removeTagListen = id => client.delete(`${url}/${id}`);
export const getTagListenById = id => client.get(`${url}/account/${id}`);
