import client from './client';

export const getMenus = () => client.get(`/api/v1/menu`);
export const getMenu = id => client.get(`/api/v1/menu/${id}`);
export const addMenu = () => client.post(`/api/v1/menu`);
export const updateMenu = () => client.put(`/api/v1/menu`);
export const removeMenu = id => client.delete(`/api/v1/menu/${id}`);
