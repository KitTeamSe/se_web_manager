import client from '../client';

const url = `post`;

export const getPosts = () => client.get(`${url}`);
export const getPost = id => client.get(`${url}/${id}`);
export const addPost = () => client.post(`${url}`);
export const updatePost = () => client.put(`${url}`);
export const removePost = id => client.delete(`${url}/${id}`);
export const getSecretPost = () => client.get(`${url}/secret`);
