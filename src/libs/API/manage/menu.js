import client from '../client';

const url = `menu`;

export const getMenus = () => client.get(`${url}`);
export const getMenu = id => client.get(`${url}/${id}`);
export const addMenu = () => client.post(`${url}`);
export const updateMenu = () => client.put(`${url}`);
export const removeMenu = id => client.delete(`${url}/${id}`);
